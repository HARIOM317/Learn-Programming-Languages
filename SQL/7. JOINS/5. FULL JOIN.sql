SELECT * FROM customers as c
LEFT JOIN orders as o
ON c.id = o.customer_id
UNION
SELECT * FROM customers as c
RIGHT JOIN orders as o
ON c.id = o.customer_id;

SELECT customers.name, orders.product
FROM customers
LEFT JOIN orders
ON customers.id = orders.customer_id
UNION
SELECT customers.name, orders.product
FROM customers
RIGHT JOIN orders
ON customers.id = orders.customer_id;