-- Subquery Inside FROM (Inline View)

-- Highest spender customer
SELECT t.customer_id, t.total
FROM (
    SELECT customer_id, SUM(amount) AS total
    FROM orders
    GROUP BY customer_id
) t
ORDER BY total DESC
LIMIT 1;

-- Subquery In SELECT

-- Total spent by each customer (without JOIN)
SELECT name, (
    SELECT SUM(amount) FROM orders
    WHERE customer_id = customers.id
) AS total_spent
FROM customers;