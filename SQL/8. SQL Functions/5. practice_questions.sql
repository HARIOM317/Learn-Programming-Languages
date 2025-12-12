-- Q1) Convert "hello world" to uppercase
SELECT UPPER("hello world");

-- Q2) Extract "Kumar" from "Amit Kumar"
SELECT SUBSTRING('Amit Kumar', 6);

-- Q3) Show today's date + 30 days
SELECT DATE_ADD(CURRENT_DATE(), INTERVAL 30 DAY);

-- Q4) Replace "SQL is good" → "SQL is awesome"
SELECT REPLACE("SQL is good", "good", "awesome");

-- Q5) Round 12.678 to 2 decimal places.
SELECT ROUND(12.678, 2);

-- Q6) Show day name of '2025-01-01'
SELECT DAYNAME('2025-01-01');

-- Q7) Show customers'id who purchased more than 1 item
SELECT customer_id FROM orders
GROUP BY customer_id
HAVING COUNT(customer_id) > 1;

SELECT * FROM orders;