import {OrderStatus, PaymentType} from "./enums";
import {Order} from "./interfaces";

const orders: Order[] = [
    {
        id: "1",
        amount: 250,
        status: OrderStatus.Pending,
        paymentType: PaymentType.CreditCard
    },
    {
        id: "2",
        amount: 500,
        status: OrderStatus.Processing,
        paymentType: PaymentType.PayPal
    },
    {
        id: "3",
        amount: 150,
        status: OrderStatus.Shipped,
        paymentType: PaymentType.BankTransfer
    },
    {
        id: "4",
        amount: 300,
        status: OrderStatus.Delivered,
        paymentType: PaymentType.CashOnDelivery
    },
    {
        id: "5",
        amount: 200,
        status: OrderStatus.Canceled,
        paymentType: PaymentType.CreditCard
    }
];

const updateOrderStatus = (order: Order, status: OrderStatus): void => {
    const previousStatus = order.status;
    order.status = status;
    console.log(`Статус замовлення ${order.id} змінено з ${previousStatus} на: ${status}`);
    console.log('Order: ', order);
}

const getOrdersByStatus = (orders: Order[], status: OrderStatus): Order[] | Order | [] => {
    return orders.filter(order => order.status === status);
}

let shippedOrders = getOrdersByStatus(orders, OrderStatus.Shipped);
console.log("\tЗамовлення зі статусом Shipped:", shippedOrders)

updateOrderStatus(orders[0], OrderStatus.Shipped);

shippedOrders = getOrdersByStatus(orders, OrderStatus.Shipped);
console.log("\tЗамовлення зі статусом Shipped:", shippedOrders)
