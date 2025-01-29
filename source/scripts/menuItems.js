import data from "./data"

let str = "";
data.forEach(item => {
    str += `
    <section class="card">
        <img
            src=${item["url"]}
            alt=""
        />
        <section class="add-order active">
            <button class="decrease">-</button>
            <input name="qty" id="qty" />
            <button class="increase">+</button>
        </section>
        <p class="title">${item["title"]}</p>
        <section class="detail">
        <button class="submit">Place Order</button>
            <span class="price">${item["price"]}</span>
        </section>
    </section>
    `;
})

export default str;