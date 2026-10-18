'use strict';

(function() {
    // Presence on every matched Moodle page, so the course block and install page can tell
    // the extension is installed. No configuration is needed: it works on any Moodle site.
    const version = chrome.runtime.getManifest().version;
    document.documentElement.dataset.moodleProctorExtension = version;
    document.addEventListener('moodle-proctor-ping', () => {
        document.dispatchEvent(new CustomEvent('moodle-proctor-extension-ok', { detail: { version } }));
    });
    document.dispatchEvent(new CustomEvent('moodle-proctor-extension-ok', { detail: { version } }));

    // Locking only happens inside a quiz attempt.
    if (location.pathname.indexOf('/mod/quiz/attempt.php') === -1) {
        return;
    }

    const BLOCKED_KEYS = ['c', 'v', 'x', 'a', 'p', 's', 'u'];

    function notifyIncident(type) {
        document.dispatchEvent(new CustomEvent('moodle-proctor-incident', { detail: { type } }));
    }

    document.addEventListener('keydown', (e) => {
        if (e.ctrlKey || e.metaKey) {
            if (BLOCKED_KEYS.includes(e.key.toLowerCase())) {
                e.preventDefault();
                notifyIncident('keyboard_shortcut');
            }
        }
    });

    document.addEventListener('copy', (e) => {
        e.preventDefault();
        notifyIncident('copy_attempt');
    });

    document.addEventListener('paste', (e) => {
        e.preventDefault();
        notifyIncident('paste_attempt');
    });

    document.addEventListener('contextmenu', (e) => {
        e.preventDefault();
    });

    chrome.runtime.sendMessage({ type: 'PROCTOR_LOCK_START' });

    chrome.runtime.onMessage.addListener((message) => {
        if (message.type === 'PROCTOR_INCIDENT' && message.incident) {
            notifyIncident(message.incident);
        }
    });

    window.addEventListener('beforeunload', () => {
        chrome.runtime.sendMessage({ type: 'PROCTOR_LOCK_STOP' });
    });
})();
