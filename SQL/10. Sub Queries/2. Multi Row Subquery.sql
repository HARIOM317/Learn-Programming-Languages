-- ----- MULTi ROW SUBQUERIES -----
-- Returns multiple results → use with: IN, ANY, ALL

-- Get customers who have placed orders
SELECT name FROM customers
WHERE id IN (
    SELECT customer_id FROM orders
);

-- Orders greater than any order of customer 2
SELECT * FROM orders
WHERE amount > ANY (
    SELECT amount FROM orders WHERE customer_id = 2
);

-- Orders greater than all orders of customer 2
SELECT * FROM orders
WHERE amount > ALL (
    SELECT amount FROM orders WHERE customer_id = 2
);