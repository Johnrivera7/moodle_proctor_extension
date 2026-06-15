'use strict';

(function() {
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

    document.addEventListener('moodle-proctor-ping', () => {
        document.dispatchEvent(new CustomEvent('moodle-proctor-extension-ok'));
    });

    window.addEventListener('beforeunload', () => {
        chrome.runtime.sendMessage({ type: 'PROCTOR_LOCK_STOP' });
    });
})();
