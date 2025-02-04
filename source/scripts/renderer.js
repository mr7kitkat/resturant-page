import ordermanager from "./ordermanager";

class RenderingEngine extends ordermanager {
    constructor(parentNode, data) {
        super(data)
        this.current_view = [...this.data]
        this.parentNode = parentNode
        this.render();
    }


    render() {
        let strHTML = ""
        this.data.forEach(item => {
            strHTML += `
                    <section class="card">
                    <section class="image-containor">
                        <img src=${item.url} alt="">
                    </section>
                    <section class="details">
                        <section class="qty-containor"  data-idx=${item.id}>
                        <button class="minus">-</button>
                        <input type="text" class="qty" value=${item.qty}>
                        <button class="plus">+</button>
                        </section>
                        <p class="title">${item.title}</p>
                        <section class="order-btns">
                        <button class="add" data-idx=${item.id}>Place Order</button>
                        <span class="price">${item.price}</span>
                        </section>
                    </section>
                    </section>
                    `;
        });

        this.parentNode.innerHTML = strHTML;
    }


}


export default RenderingEngine