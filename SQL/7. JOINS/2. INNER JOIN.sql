SELECT * FROM customers as c
INNER JOIN orders as o
ON c.id = o.customer_id;

SELECT customers.name, orders.product, orders.amount
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;