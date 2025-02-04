// class toggler
export default class {
    constructor(nodeList, clsName, toggleMode = false) {
        this.items = [...nodeList];
        this.clsName = clsName;
        this.toggleMode = toggleMode;
        this.deactivate();
        this.activate(this.items[1]);
    }

    // add a new item to the toggler
    addItem(node) {
        this.items.push(node);
    }

    // add a class to the node list
    deactivate() {
        this.items.forEach(item => {
            if (this.toggleMode) {
                item.classList.remove(this.clsName);
            }
            else {
                item.classList.add(this.clsName);
            }
        });
    }

    activate(target) {
        this.deactivate();
        if (this.toggleMode) {
            target.classList.add(this.clsName);
        }
        else {
            target.classList.remove(this.clsName);
        }
    }


    list() {
        return this.items;
    }
}
