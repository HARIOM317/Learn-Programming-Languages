-- --------------- LEFT EXCLUSIVE JOIN ---------------
SELECT customers.name, orders.product, orders.amount FROM customers
LEFT JOIN orders
ON customers.id = orders.customer_id
WHERE orders.customer_id IS NULL;

-- --------------- RIGHT EXCLUSIVE JOIN ---------------
SELECT customers.name, orders.product, orders.amount FROM customers
RIGHT JOIN orders
ON customers.id = orders.customer_id
WHERE customers.id IS NULL;

-- --------------- FULL EXCLUSIVE JOIN ---------------
SELECT customers.name, orders.product, orders.amount FROM customers
LEFT JOIN orders
ON customers.id = orders.customer_id
WHERE orders.customer_id IS NULL
UNION
SELECT customers.name, orders.product, orders.amount FROM customers
RIGHT JOIN orders
ON customers.id = orders.customer_id
WHERE customers.id IS NULL;
