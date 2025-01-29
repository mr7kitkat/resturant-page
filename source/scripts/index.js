
import "../styles/style.css";
import PageManager from "./pagemanager"
import str from "./menuItems"

// DOM MODELS
// ********* PAGES *************
const NAV = document.querySelector("#navigation nav");
const MAIN = document.querySelector("main");


// navigation (mobile mode)
const HAM_MENU = document.querySelector("#theHam");
HAM_MENU.addEventListener("click", (e) => {
    HAM_MENU.classList.toggle("active");
});

// navigation (desktop mode)
// page initilization
const pm = new PageManager();
[...MAIN.children].forEach(link => {
    pm.addPage(link)
});

[...NAV.children].forEach(link => {
    link.addEventListener("click", (e) => {
        const target = document.querySelector(link.hash);
        pm.removeClass(target, "hide");

        // if its in mobile state then close navigation effect
        HAM_MENU.classList.toggle("active");
    })
})


// Adding Menu to pages
const CONTAINOR = document.querySelector("#menu-containor");
CONTAINOR.innerHTML = str