import Cell from "./cell"

export default class {
    constructor(data, parentNode) {
        this.data = data.map(dataPoint => new Cell(dataPoint))
        this.parentNode = parentNode;
        this.render()
        this.orders = [];
    }

    render() {
        let strHTML = "";

        this.data.forEach(element => {
            strHTML += element.render();
        });

        this.parentNode.innerHTML = strHTML;
        this.addBtnsHandler()
        this.placeBtnsHandler()
    }


    addBtnsHandler() {
        const btns = this.parentNode.querySelectorAll("button.add");

        btns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const idx = e.target.dataset.idx;
                this.data[idx].upQty()
                this.render()
            })
        })
    }


    placeBtnsHandler() {
        const btns = this.parentNode.querySelectorAll("button.orderBtn");

        btns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const idx = e.target.dataset.idx;
                const item = this.data[idx];
                this.orders.push(item)
                this.render()
            })
        })
    }
} 
