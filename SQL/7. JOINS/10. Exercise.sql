-- Q1) Show all customers who placed an order.
SELECT DISTINCT customers.name
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id;

-- Q2) Show customers who placed NO orders.
SELECT customers.name
FROM customers
LEFT JOIN orders
ON customers.id = orders.customer_id
WHERE orders.id IS NULL;

-- Q3) Show each order with customer city.
SELECT customers.name, customers.city, orders.product
FROM customers
JOIN orders -- Default INNER JOIN
ON customers.id = orders.customer_id;

-- Q4) Show customers and total number of orders they placed.
SELECT customers.name, COUNT(orders.id) AS order_count
FROM customers
LEFT JOIN orders
ON customers.id = orders.customer_id
GROUP BY customers.name;

-- Q5) Show orders that have no valid customer.
SELECT orders.*
FROM orders
LEFT JOIN customers
ON customers.id = orders.customer_id
WHERE customers.id IS NULL;

-- Q6) Perform FULL JOIN manually.
SELECT * FROM customers
LEFT JOIN orders
ON customers.id = orders.customer_id
UNION
SELECT * FROM customers
RIGHT JOIN orders
ON customers.id = orders.customer_id;