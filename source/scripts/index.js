
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
const CONTAINOR = document.querySelector("#menu-containor");
const RE = new RenderingEngine(CONTAINOR, data);
[...CONTAINOR.children].forEach(item => {
    const addBtn = item.querySelector(".add");
    const qtyContainor = item.querySelector(".qty-containor");
    const qtyBox = qtyContainor.querySelector("input")

    addBtn.addEventListener("click", function (e) {
        RE.incrementItem(e.target.dataset.idx);
        qtyContainor.classList.add("active");
    })
})