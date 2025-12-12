USE shopdb;

UPDATE customers
SET city = "Delhi"
WHERE id = 3;

-- ----- SINGLE ROW SUBQUERIES -----
-- Returns exactly one value → used with =, <, >, >=, etc.

-- Customers who spent more than the average amount
SELECT name FROM customers
WHERE id IN (
    SELECT customer_id FROM orders
    GROUP BY customer_id
    HAVING sum(amount) > (
        SELECT AVG(amount) FROM orders
    )
);

-- Order with minimum amount
SELECT * FROM orders
WHERE amount = (
    SELECT MIN(amount) FROM orders
);

-- Customers whose city matches Amit’s city
SELECT * FROM customers
WHERE city = (
    SELECT city FROM customers
    WHERE name = 'Amit'
);