'use strict';

let examTabId = null;
let examWindowId = null;
let lockActive = false;

const AI_HOSTS = [
    'chatgpt.com',
    'chat.openai.com',
    'claude.ai',
    'gemini.google.com',
    'copilot.microsoft.com',
    'perplexity.ai',
    'poe.com'
];

function isAiUrl(url) {
    if (!url) {
        return false;
    }
    try {
        const host = new URL(url).hostname.replace(/^www\./, '');
        return AI_HOSTS.some((blocked) => host === blocked || host.endsWith('.' + blocked));
    } catch (e) {
        return false;
    }
}

function notifyExam(type) {
    if (!lockActive || examTabId === null) {
        return;
    }
    chrome.tabs.sendMessage(examTabId, {type: 'PROCTOR_INCIDENT', incident: type}).catch(() => {});
}

function reportDisplays() {
    if (!chrome.system || !chrome.system.display) {
        return;
    }
    chrome.system.display.getInfo((displays) => {
        if (displays && displays.length > 1) {
            notifyExam('multiple_displays');
        }
    });
}

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
    if (message.type === 'PROCTOR_LOCK_START') {
        examTabId = sender.tab ? sender.tab.id : null;
        examWindowId = sender.tab ? sender.tab.windowId : null;
        lockActive = true;
        reportDisplays();
        sendResponse({ok: true});
    }
    if (message.type === 'PROCTOR_LOCK_STOP') {
        lockActive = false;
        examTabId = null;
        examWindowId = null;
        sendResponse({ok: true});
    }
    return true;
});

chrome.tabs.onActivated.addListener((activeInfo) => {
    if (!lockActive || examTabId === null) {
        return;
    }
    if (activeInfo.tabId !== examTabId) {
        chrome.tabs.update(examTabId, {active: true});
        notifyExam('tab_hidden');
    }
});

chrome.tabs.onCreated.addListener((tab) => {
    if (lockActive && examTabId !== null && tab.id !== examTabId) {
        chrome.tabs.remove(tab.id);
    }
});

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (!lockActive || tabId === examTabId) {
        return;
    }
    if (isAiUrl(changeInfo.url || tab.url)) {
        chrome.tabs.remove(tabId);
        notifyExam('ai_tool');
    }
});

if (chrome.system && chrome.system.display && chrome.system.display.onDisplayChanged) {
    chrome.system.display.onDisplayChanged.addListener(() => {
        reportDisplays();
    });
}

// Focus left Chrome (another browser or app) or moved to another Chrome window.
chrome.windows.onFocusChanged.addListener((windowId) => {
    if (!lockActive || examWindowId === null || windowId === examWindowId) {
        return;
    }
    if (windowId === chrome.windows.WINDOW_ID_NONE) {
        notifyExam('browser_left');
        return;
    }
    chrome.windows.update(examWindowId, {focused: true}).catch(() => {});
    notifyExam('tab_hidden');
});
