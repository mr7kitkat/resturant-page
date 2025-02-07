export default class {
    constructor({ id, title, tags, url, qty, price }) {
        this.id = id;
        this.title = title;
        this.tags = tags;
        this.url = url;
        this.qty = qty;
        this.price = price;
    }

    // render 
    render() {
        const status = this.qty > 0 ? `qty-containor active` : "qty-containor";
        const btn = this.qty > 0 ? `<button class="orderBtn" data-idx=${this.id}>Place Order</button>` : `<button class="add" data-idx=${this.id}>Add</button>`;
        return `
        <section class="card">
        <section class="image-containor">
            <img src=${this.url} alt="">
        </section>
        <section class="details">
            <section class='${status}'  data-idx=${this.id}>
                <button class="minus">-</button>
                <input type="text" class="qty" value=${this.qty}>
                <button class="plus">+</button>
            </section>
            <p class="title">${this.title}</p>
            <section class="order-btns">
                ${btn}
                <span class="price">${this.price}</span>
            </section>
        </section>
        </section>
        `;
    }

    upQty() {
        this.qty = this.qty + 1;
    }

    downQty() {
        if (this.qty > 1) {
            this.qty = this.qty - 1
        }
        else {
            this.qty = 0
        }
    }

    changeQty(value) {
        if (value >= 0) {
            this.qty = value;
        }
    }

    getQty() {
        return this.qty;
    }

    getValue() {
        return this.qty * this.price
    }


}