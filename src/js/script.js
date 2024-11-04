var user = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    age: 21,
    street: 'John Doe street',
    city: 'John Doe city',
    zipCode: '12345',
};
console.log(user);
var orders = [
    {
        orderId: 1,
        userId: 101,
        products: [
            {
                name: "Ноутбук",
                price: 1500,
                category: {
                    categoryId: 1,
                    categoryName: "Електроніка",
                },
            },
            {
                name: "Миша",
                price: 30,
                category: {
                    categoryId: 1,
                    categoryName: "Електроніка",
                },
            },
        ],
    },
    {
        orderId: 2,
        userId: 102,
        products: [
            {
                name: "Книга",
                price: 15,
                category: {
                    categoryId: 2,
                    categoryName: "Література",
                },
            },
        ],
    },
    {
        orderId: 3,
        userId: 103,
        products: [
            {
                name: "Кросівки",
                price: 80,
                category: {
                    categoryId: 3,
                    categoryName: "Взуття",
                },
            },
            {
                name: "Футболка",
                price: 25,
                category: {
                    categoryId: 4,
                    categoryName: "Одежда",
                },
            },
        ],
    },
];
console.log(JSON.stringify(orders, null, 2));
function getFullName(person) {
    var firstName = person.firstName, lastName = person.lastName, middleName = person.middleName;
    if (middleName) {
        return "".concat(firstName, " ").concat(middleName, " ").concat(lastName);
    }
    return "".concat(firstName, " ").concat(lastName);
}
var person1 = {
    firstName: "Іван",
    lastName: "Іванович"
};
var person2 = {
    firstName: "Іван2",
    lastName: "Іванович2",
    middleName: "Іванов2"
};
console.log(getFullName(person1));
console.log(getFullName(person2));
function applySettings(settings) {
    console.log("\n\n\n\n\u0422\u0435\u043C\u0430 \u043F\u0440\u043E\u0433\u0440\u0430\u043C\u0438: ".concat(settings.theme));
    if (settings.notifications) {
        console.log("Повідомлення ввімкнені.");
    }
    else {
        console.log("Повідомлення вимкнені.");
    }
    if (settings.autoSave.enabled) {
        console.log("\u0410\u0432\u0442\u043E\u0437\u0431\u0435\u0440\u0435\u0436\u0435\u043D\u043D\u044F \u0443\u0432\u0456\u043C\u043A\u043D\u0435\u043D\u043E. \u0406\u043D\u0442\u0435\u0440\u0432\u0430\u043B: ".concat(settings.autoSave.interval, " \u043C\u0441."));
    }
    else {
        console.log("Автозбереження вимкнено.");
    }
}
var settings = {
    theme: "dark",
    notifications: true,
    autoSave: {
        enabled: true,
        interval: 5000
    }
};
applySettings(settings);
