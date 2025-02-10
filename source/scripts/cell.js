export default class {
    constructor({ id, title, tags, url, qty, price, value = null }) {
        this.id = id;
        this.title = title;
        this.tags = tags;
        this.url = url;
        this.qty = qty;
        this.price = price;
        this.value = value
    }

    // render 
    render() {
        const status = this.qty > 0 ? `qty-containor active` : "qty-containor";
        const btn = this.qty > 0 ? `
            <section class='${status}'>
                <button data-idx=${this.id} class="minus">-</button>
                <input data-idx=${this.id} type="text" class="qty" value=${this.qty}>
                <button data-idx=${this.id} class="plus">+</button>
            </section>`
            : `<button class="add" data-idx=${this.id}>Add</button>`;



        return `
        <section class="card">
        <section class="image-containor">
            <img src=${this.url} alt="">
        </section>
        <section class="details">
            
            <p class="title">${this.title}</p>
            <section class="order-btns">
                ${btn}
                <span class="price" title="Price per plate">${Boolean(this.value) === true ? this.value : this.price}</span>
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
        const val = Number(value)
        if (val >= 0) {
            this.qty = val;
        }
    }

    getQty() {
        if (this.qty > 0) {
            return Number(this.qty)
        }
        return 0
    }

    getValue() {
        if (this.value) {
            return Number(this.value)
        }
        return 0
    }

}