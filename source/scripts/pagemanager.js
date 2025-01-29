// pages manager
export default class {
    constructor() {
        this.pages = [];
        this.current = null;
    }

    addPage(id) {
        const target = document.querySelector(id);
        this.pages.push(target);
    }

    addClass(className) {
        const len = this.pages.length;
        for (let i = 0; i < len; i++) {
            this.push[i].classList.add(className);
        }
    }

    removeClass(target, className) {
        target.classList.remove(className);
    }

    updateCurrent(target) {
        this.current = target
    }
}

