

// { name: 'apple', price: 50 },
// { name: 'lime', price: 60 },
// { name: 'lime', price: 60 },
// { name: 'peach', price: 110 },


const cart = {
    items: [],
    getItems() {
        return this.items;
    },
    add(product) {
        console.table(this.items);
        for (const item of this.items) {
    if (item.name === product.name) {
        item.quantity += 1;
        return;
    }
}

        const newProduct = {
            ...product,
            quantity: 0,
        }
        this.items.push(newProduct);
    },
    remove(productName) {
        const { items } = this; //деструктуризация
        for (let i = 0; i < items.length; i += 1) {
        const { name } = items[i]; //деструктуризация

            if(productName === name) {
            console.log('Нашли продукт', productName);
            console.log('Индекс', i);

            items.splice(i, 1);
            };
        }
    },
    clear() {
        this.items = [];
    },
    countTotalPrice() {
        let total = 0;
        const { items } = this;

        for (const { price, quantity } of items) {
            total += price * quantity;
            }
      return total;
    },
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
};


cart.add({ name: 'apple', price: 50 });
cart.add({ name: 'kiwi', price: 60 });
cart.add({ name: 'lime', price: 60 });
cart.add({ name: 'peach', price: 110 });
cart.add({ name: 'peach', price: 110 });
cart.add({ name: 'peach', price: 110 });
cart.add({ name: 'peach', price: 110 });
cart.add({ name: 'lime', price: 60 });
cart.add({ name: 'lime', price: 60 });





console.table(cart.getItems());

console.log('Total: ', cart.countTotalPrice());

cart.remove('kiwi');

console.table(cart.getItems());

cart.clear();
console.log(cart.getItems());


