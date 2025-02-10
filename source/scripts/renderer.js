import Cell from "./cell"

function renderers(dataAry, theNode, fn = function () { }) {
    let strHtml = "";
    dataAry.forEach(elem => {
        strHtml += elem.render();
    })

    theNode.innerHTML = strHtml;
    fn()
}


export default class {
    constructor(page, data, parentNode, cartElement) {
        this.data = data.map(dataPoint => new Cell(dataPoint))
        this.page = page
        this.parentNode = parentNode;
        this.cartElement = cartElement;
        this.cart = [];
        this.render();
    }

    render() {
        renderers(this.data, this.parentNode, () => {
            this.cartUpdator();
            this.eventListeners();
        })
    }

    eventListeners() {
        this.addBtnsHandler()
        this.minusBtnHandler();
        this.plusBtnHandler();
        this.qtyBoxHandler()
        this.placeOrder()
    }


    addBtnsHandler() {
        const btns = this.page.querySelectorAll("button.add");

        btns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const idx = e.target.dataset.idx;
                this.data[idx].upQty()
                this.render()
            })
        })

    }

    minusBtnHandler() {
        const btns = this.page.querySelectorAll("button.minus");

        btns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const idx = e.target.dataset.idx;

                this.data[idx].downQty();
                this.render()
            })
        })
    }

    plusBtnHandler() {
        const btns = this.page.querySelectorAll("button.plus");

        btns.forEach(btn => {
            btn.addEventListener("click", (e) => {
                const idx = e.target.dataset.idx;

                this.data[idx].upQty();
                this.render()
            })
        })
    }

    qtyBoxHandler() {
        const qtyBoxes = this.page.querySelectorAll("input.qty");

        qtyBoxes.forEach(box => {
            box.addEventListener("change", (e) => {
                const idx = e.target.dataset.idx;

                this.data[idx].changeQty(e.target.value);
                this.render()
            })
        })
    }

    cartUpdator() {
        this.cart = this.data.filter(item => item.getQty() > 0);
        this.cart = this.cart.map(item => {
            return new Cell({
                ...item,
                value: item.qty * item.price
            })
        });
        if (this.cart.length && window.innerWidth >= 500) {
            this.page.classList.add("active");
        } else {
            this.page.classList.remove("active");

        }

        renderers(this.cart, this.cartElement);
        this.updateTotal()
    }


    updateTotal() {
        let totalQ = 0;
        let totalV = 0;

        this.cart.map(item => {
            totalQ += item.getQty();
            totalV += item.getValue();
        })

        const totalQty = this.page.querySelector("#total .totalQty")
        const totalValue = this.page.querySelector("#total .totalValue")
        totalQty.innerText = `${totalQ} Food Item`
        totalValue.innerText = `$${totalV}`
    }

    placeOrder() {
        const showBtn = this.page.querySelector("#confirm");
        const dialog = this.page.querySelector("#orderSuccess");
        const closeBtn = dialog.querySelector("button");

        // Remove previous listener to avoid multiple fires
        showBtn.removeEventListener("click", this.showModalHandler);

        this.showModalHandler = () => {
            dialog.showModal();
        };

        showBtn.addEventListener("click", this.showModalHandler);


        closeBtn.removeEventListener("click", this.closeModalHandler)
        this.closeModalHandler = () => {
            dialog.close();
            this.cart.map(item => {
                this.data[item.id].qty = 0
            });
            this.render()
        }

        closeBtn.addEventListener("click", this.closeModalHandler);

    }


}
