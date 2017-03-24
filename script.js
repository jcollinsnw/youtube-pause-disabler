// ==UserScript==
// @name         YouTube Pause Banner Disabler
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Removes the annoying banner when pausing Youtube Videos
// @author       Jacob Collins
// @match        https://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    Element.prototype.remove = function() {
        this.parentElement.removeChild(this);
    };
    NodeList.prototype.remove = HTMLCollection.prototype.remove = function() {
        for(var i = this.length - 1; i >= 0; i--) {
            if(this[i] && this[i].parentElement) {
                this[i].parentElement.removeChild(this[i]);
            }
        }
    };
    var x = document.getElementsByClassName('ytp-pause-overlay');
    for( var i in x ) {
        x[i].remove();
    }
    x.remove();
})();
