// ==UserScript==
// @name         Remove IDLIX's Adblock Detection Alert
// @namespace    https://github.com/dibowz
// @version      0.1
// @description  Remove IDLIX's adblock detection elements and styles from a loaded HTML page
// @author       Dibowz x ChatGPT
// @match        *://*/*
// @grant        none
// @downloadURL  https://raw.githubusercontent.com/dibowz/Remove-IDLIX-Adblock-Detection-Alert/main/remove-idlix-adblock-detection-alert.user.js
// @updateURL    https://raw.githubusercontent.com/dibowz/Remove-IDLIX-Adblock-Detection-Alert/main/remove-idlix-adblock-detection-alert.user.js
// ==/UserScript==


(function() {
    'use strict';

    function removeElements() {
        const prefix = getDynamicPrefix();

        // Task 1: Remove <div class="{prefix}-blackout active">
        removeElementsByClass(`${prefix}-blackout`);

        // Task 2: Remove <div class="{prefix}-wrapper"> with its content
        removeElementsByClass(`${prefix}-wrapper`);

        // Task 3: Remove the specified class from the body element
        removeClassFromBody(`${prefix}-style-compact`);
        removeClassFromBody(`${prefix}-blur`);
    }

    function removeElementsByClass(className) {
        const elements = document.getElementsByClassName(className);
        for (let i = 0; i < elements.length; i++) {
            elements[i].remove();
        }
    }

    function removeClassFromBody(className) {
        const bodyElement = document.body;
        if (bodyElement) {
            bodyElement.classList.remove(className);
        }
    }

    function getDynamicPrefix() {
        const divsWithPrefix = document.querySelectorAll('[class*=ce][class*=blackout]');
        if (divsWithPrefix.length > 0) {
            const classNames = divsWithPrefix[0].className.split(' ');
            for (let i = 0; i < classNames.length; i++) {
                if (classNames[i].includes('blackout')) {
                    return classNames[i].replace('-blackout', '');
                }
            }
        }
        return null; // Default to null if prefix is not found
    }

    // Run the script after the page has completely loaded
    window.addEventListener('load', function() {
        removeElements();
    });
})();
