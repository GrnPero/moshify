/**
 * Purpose: Collapsible menu
 * Author: Rodrigo Alvarez
 * File: main.js
 */

const collapsible = document.querySelectorAll('.collapsible');

collapsible.forEach((item) => {
    item.addEventListener('click', () => {
        item.classList.toggle('collapsible--expanded');
    });
});