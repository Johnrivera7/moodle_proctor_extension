'use strict';

let examTabId = null;
let lockActive = false;

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'PROCTOR_LOCK_START') {
        examTabId = sender.tab ? sender.tab.id : null;
        lockActive = true;
        sendResponse({ ok: true });
    }
    if (message.type === 'PROCTOR_LOCK_STOP') {
        lockActive = false;
        examTabId = null;
        sendResponse({ ok: true });
    }
    return true;
});

chrome.tabs.onActivated.addListener((activeInfo) => {
    if (!lockActive || examTabId === null) {
        return;
    }
    if (activeInfo.tabId !== examTabId) {
        chrome.tabs.update(examTabId, { active: true });
    }
});

chrome.tabs.onCreated.addListener((tab) => {
    if (lockActive && examTabId !== null && tab.id !== examTabId) {
        chrome.tabs.remove(tab.id);
    }
});
