-- JOIN + WHERE
SELECT name, product
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id
WHERE amount > 1000;

-- JOIN + ORDER BY
SELECT name, product, amount 
FROM customers
INNER JOIN orders
ON customers.id = orders.customer_id
ORDER BY amount DESC;

-- JOIN + GROUP BY (Total spending per customer)
SELECT customers.name, SUM(orders.amount) AS total_amount
FROM customers
LEFT JOIN orders
ON customers.id = orders.customer_id
GROUP BY customers.name;