-- Q1) Find customer who placed the highest order.
SELECT name FROM customers
WHERE id = (
    SELECT customer_id FROM orders
    ORDER BY amount DESC
    LIMIT 1
);

-- Q2) Find customers who placed more than 1 order.
SELECT name FROM customers
WHERE id IN (
    SELECT customer_id FROM orders
    GROUP BY customer_id
    HAVING COUNT(*) > 1
);

-- Q3) Find orders above the total average order amount.
SELECT * FROM orders
WHERE amount > (
    SELECT AVG(amount) FROM orders
);

-- Q4) For each customer, show their highest order amount.
SELECT name, (
    SELECT MAX(amount) FROM orders
    WHERE customer_id = customers.id
) AS highest_amount
FROM customers;
