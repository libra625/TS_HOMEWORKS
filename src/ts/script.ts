interface Product {
    name: string;
    price: number;
    available: boolean;
}

function getStringDescription(product: Product) {
    console.log(`Товар: ${product.name}, Ціна: ${product.price} грн., В наявності: ${product.available ? 'Так' : 'Ні'}`);
    
}

const product1: Product = {name: 'banana', price: 999, available: false};
const product2: Product = {name: 'minion', price: 0, available: true};
const product3: Product = {name: 'smth expensive', price: 99999999999, available: false};

getStringDescription(product1);
getStringDescription(product2);
getStringDescription(product3);
