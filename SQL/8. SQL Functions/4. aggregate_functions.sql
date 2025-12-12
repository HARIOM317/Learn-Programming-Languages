USE shopdb;

-- COUNT()
SELECT COUNT(*) FROM orders;

-- SUM()
SELECT SUM(amount) FROM orders;

-- AVG()
SELECT AVG(amount) FROM orders;

-- MIN()
SELECT MIN(amount) FROM orders;

-- MAX()
SELECT MAX(amount) FROM orders;

-- ---------------------------------------------------

-- Q1. Total spending per customer
SELECT customer_id, SUM(amount)
FROM orders
GROUP by customer_id;

-- Q2. Find customers spending more than 10,000
SELECT customer_id, SUM(amount) AS total
FROM orders
GROUP BY customer_id
HAVING SUM(amount) > 10000;