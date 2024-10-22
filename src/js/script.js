function getStringDescription(product) {
    console.log("\u0422\u043E\u0432\u0430\u0440: ".concat(product.name, ", \u0426\u0456\u043D\u0430: ").concat(product.price, " \u0433\u0440\u043D., \u0412 \u043D\u0430\u044F\u0432\u043D\u043E\u0441\u0442\u0456: ").concat(product.available ? 'Так' : 'Ні'));
}
var product1 = { name: 'banana', price: 999, available: false };
var product2 = { name: 'minion', price: 0, available: true };
var product3 = { name: 'smth expensive', price: 99999999999, available: false };
getStringDescription(product1);
getStringDescription(product2);
getStringDescription(product3);
