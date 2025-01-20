
import "../styles/style.css";

// DOM MODELS

// navigation
const HAM_MENU = document.querySelector("#theHam");
HAM_MENU.addEventListener("click", (e) => {
    HAM_MENU.classList.toggle("active");
})

class PageManager {
    constructor() {
    }
}