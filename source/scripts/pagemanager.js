// pages manager
export default class {
    constructor() {
        this.pages = [];
    }

    addPage(node) {
        this.pages.push(node);
    }

    addClass(className) {
        const len = this.pages.length;
        for (let i = 0; i < len; i++) {
            this.pages[i].classList.add(className);
        }
    }

    removeClass(target, className) {
        this.addClass(className);
        target.classList.remove(className);
    }

}

