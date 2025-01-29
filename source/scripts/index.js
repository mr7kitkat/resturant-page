
import "../styles/style.css";
import PageManager from "./pagemanager"
import str from "./menuItems"
// DOM MODELS
// ********* PAGES *************
const HOME = document.querySelector("home-page");
const MENU = document.querySelector("menu-page");
const EVENTS = document.querySelector("events-page");
const CONTACT = document.querySelector("contact-page");


// navigation
const HAM_MENU = document.querySelector("#theHam");
HAM_MENU.addEventListener("click", (e) => {
    HAM_MENU.classList.toggle("active");
})

const CONTAINOR = document.querySelector("#menu-containor");
CONTAINOR.innerHTML = str