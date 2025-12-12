-- ----- MULTi ROW SUBQUERIES -----
-- Returns more than one columns

-- Order with same (customer_id, amount) as highest order
SELECT customer_id, amount FROM orders
WHERE (customer_id, amount) = (
    SELECT customer_id, MAX(amount) FROM orders
    GROUP BY customer_id
    ORDER BY MAX(amount) DESC
    LIMIT 1
);