export default class {
    constructor(data) {
        this.orders = [];
        this.data = data;
    }


    incrementItem(id) {
        this.data[id].qty += 1;
        this.getOrder();
    }


    decrementItem(id) {
        if (this.data[id].qty >= 1) {
            this.data[id].qty -= 1;
        }
        this.getOrder();
    }

    getOrder() {
        const filtered = this.data.filter(item => item.qty > 0);
        this.orders = filtered;
        return this.orders;
    }

    getTotalQty() {
        return this.orders.reduce((prev, next) => +prev.qty + +next.qty);
    }

    getTotalValue() {
        return this.orders.reduce((prev, next) => (+prev.qty * +prev.price) + (+next.qty * +next.price));
    }

    removeItemFromOrder(id) {
        this.data[id].qty = 0;
    }

    submitOrder() {
        this.orders = [];
        return true;
    }

}