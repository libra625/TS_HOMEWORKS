# <center> ДЗ 12. Управління Замовленнями з Використанням enum </center>

## Опис

Уявімо, що ти створюєш систему для управління замовленнями в інтернет-магазині. В цій системі тобі потрібно
використовувати enum для представлення різних статусів замовлення та типів оплати.

## Деталі

1. Створити enum OrderStatus, який представлятиме можливі статуси замовлення:

   Pending — замовлення очікує підтвердження.

   Processing — замовлення в обробці.

   Shipped — замовлення відправлено.

   Delivered — замовлення доставлено.

   Canceled — замовлення скасовано.

2. Створити enum PaymentType, який представлятиме типи оплати:

   CreditCard — оплата кредитною карткою.

   PayPal — оплата через PayPal.

   BankTransfer — оплата через банківський переказ.

   CashOnDelivery — оплата при доставці.

3. Створити інтерфейс Order, який містить поля:

   id — унікальний ідентифікатор замовлення (типу string).

   amount — загальна сума замовлення (типу number).

   status — статус замовлення (типу OrderStatus).

   paymentType — тип оплати (типу PaymentType).

4. Створити декілька замовлень для тестування системи, використовуючи OrderStatus та PaymentType.

5. Написати функцію updateOrderStatus, яка приймає order: Order і status: OrderStatus, оновлює статус замовлення, а
   також
   виводить у консоль повідомлення про зміну статусу.

6. Написати функцію getOrdersByStatus, яка приймає масив orders: Order[] і status: OrderStatus, і повертає всі
   замовлення з
   відповідним статусом.
