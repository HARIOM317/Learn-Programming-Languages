SELECT * FROM customers
CROSS JOIN orders;

SELECT customers.name, orders.product
FROM customers
CROSS JOIN orders;