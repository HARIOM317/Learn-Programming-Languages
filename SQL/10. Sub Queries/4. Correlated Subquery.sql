-- ----- MULTi ROW SUBQUERIES -----
-- Correlated Subquery → executed for each row of main query (It depends on values from outer query)

-- Orders higher than customer’s average order
SELECT * FROM orders o1
WHERE amount > (
    SELECT AVG(amount) FROM orders o2
    WHERE o1.customer_id = o2.customer_id
);

-- Customers who placed at least 1 high-value order (correlated)
SELECT name FROM customers c
WHERE EXISTS (
    SELECT 1 FROM orders o
    WHERE o.customer_id = c.id AND o.amount > 1000
);