import Cell from "./cell"

export default class {
    constructor(data, parentNode) {
        this.data = data.map(dataPoint => new Cell(dataPoint))
        this.parentNode = parentNode;
        this.render();
        this.cart = [];
        this.orders = [];
    }

    render() {
        let strHTML = "";
        this.data.forEach(element => {
            strHTML += element.render();
        });
        this.parentNode.innerHTML = strHTML;
        this.cartUpdator()
        this.eventListeners()
    }


    eventListeners() {
        this.addBtnsHandler()
        this.minusBtnHandler();
        this.plusBtnHandler();
        this.qtyBoxHandler()
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




    minusBtnHandler() {
        const btns = this.parentNode.querySelectorAll("button.minus");

        btns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const idx = e.target.parentElement.dataset.idx;
                this.data[idx].downQty();
                this.render()
            })
        })
    }

    plusBtnHandler() {
        const btns = this.parentNode.querySelectorAll("button.plus");

        btns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const idx = e.target.parentElement.dataset.idx;
                this.data[idx].upQty();
                this.render()
            })
        })
    }

    qtyBoxHandler() {
        const qtyBoxes = this.parentNode.querySelectorAll("input.qty");

        qtyBoxes.forEach(box => {
            box.addEventListener("change", (e) => {
                const idx = e.target.parentElement.dataset.idx;
                this.data[idx].changeQty(e.target.value);
                this.render()
            })
        })
    }

    cartUpdator() {
        this.cart = this.data.filter(item => item.getQty() > 0);
    }
}
