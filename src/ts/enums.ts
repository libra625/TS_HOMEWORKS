export const enum OrderStatus {
    Pending = 'pending',
    Processing = 'processing',
    Shipped = 'shipped',
    Delivered = 'delivered',
    Canceled = 'canceled',
}

export const enum PaymentType {
    CreditCard = 'creditCard',
    PayPal = 'payPal',
    BankTransfer = 'bankTransfer',
    CashOnDelivery = 'cashOnDelivery',
}
