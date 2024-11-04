//Task 1
interface Address {
    street: string;
    city: string;
    zipCode: string;
}

interface User {
    name: string;
    age: number;
}

interface UserWithAddress extends Address, User {
    email: string;
}

const user: UserWithAddress = {
    name: 'John Doe',
    email: 'johndoe@gmail.com',
    age: 21,
    street: 'John Doe street',
    city: 'John Doe city',
    zipCode: '12345',
}

console.log(user)

//Task 2
type Category = {
    categoryId: number,
    categoryName: string,
}

interface Product {
    name: string;
    price: number;
    category: Category;
}

interface Order {
    orderId: number;
    userId: number;
    products: Product[];
}

type OrdersArray = Order[];

const orders: OrdersArray = [
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

console.log(JSON.stringify(orders, null, 2))

//Task 3
interface Person {
    firstName: string;
    lastName: string;
    middleName?: string;
}

function getFullName(person: Person): string {
    const {firstName, lastName, middleName} = person;
    if (middleName) {
        return `${firstName} ${middleName} ${lastName}`;
    }
    return `${firstName} ${lastName}`;
}

const person1: Person = {
    firstName: "Іван",
    lastName: "Іванович"
};

const person2: Person = {
    firstName: "Іван2",
    lastName: "Іванович2",
    middleName: "Іванов2"
};

console.log(getFullName(person1));
console.log(getFullName(person2));

//Task 4
type AutoSave = {
    enabled: boolean;
    interval: number;
}

interface Settings {
    theme: 'light' | 'dark';
    notifications: boolean;
    autoSave: AutoSave
}

function applySettings(settings: Settings): void {
    console.log(`\n\n\n\nТема програми: ${settings.theme}`);
    
    if (settings.notifications) {
        console.log("Повідомлення ввімкнені.");
    } else {
        console.log("Повідомлення вимкнені.");
    }
    
    if (settings.autoSave.enabled) {
        console.log(`Автозбереження увімкнено. Інтервал: ${settings.autoSave.interval} мс.`);
    } else {
        console.log("Автозбереження вимкнено.");
    }
}

const settings: Settings = {
    theme: "dark",
    notifications: true,
    autoSave: {
        enabled: true,
        interval: 5000
    }
};

applySettings(settings)
