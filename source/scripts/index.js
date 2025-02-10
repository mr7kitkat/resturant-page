
import "../styles/style.css";
import classToggler from "./classToggler"
import RenderingEngine from "./renderer";
import data from "./data";

// DOM MODELS
// ********* PAGES *************
const NAV = document.querySelector("#navigation nav");
const MAIN = document.querySelector("main");


// ********* NAVIGATION MANAGEMENT ************
// navigation (mobile mode)
const HAM_MENU = document.querySelector("#theHam");
HAM_MENU.addEventListener("click", (e) => {
    HAM_MENU.classList.toggle("active");
});

// navigation (desktop mode)
const PageManager = new classToggler(MAIN.children, "hide");
const NavigationManager = new classToggler(NAV.children, "active", true);
NavigationManager.list().forEach(link => {
    link.addEventListener("click", function () {
        const targetElem = MAIN.querySelector(link.hash);
        PageManager.activate(targetElem);
        NavigationManager.activate(link);
        HAM_MENU.classList.toggle("active");
    })
})

// Adding Menu to pages
const MENU_PAGE = document.querySelector("#menu-page");
const CONTAINOR = document.querySelector("#menu-containor");
const CART = document.querySelector("#order-list");
const RE = new RenderingEngine(MENU_PAGE, data, CONTAINOR, CART);

// cart open btn
const CART_OPEN_BTN = document.querySelector("img#showCart");
CART_OPEN_BTN.addEventListener("click", function () {
    MENU_PAGE.classList.add("active");
})


// cart close btn
const CART_CLOSE_BTN = document.querySelector("button.close");
CART_CLOSE_BTN.addEventListener("click", function () {
    MENU_PAGE.classList.remove("active");
})
