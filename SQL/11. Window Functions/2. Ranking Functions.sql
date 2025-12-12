--  ROW_NUMBER() - Gives unique number per row based on ordering.
-- Example: Rank sales within each employee
SELECT emp, month, amount,
ROW_NUMBER() OVER (
    PARTITION BY emp
    ORDER BY amount DESC
) AS rank_no
FROM sales;

-- RANK() - Gives gaps when ties occur.
-- Example: Two equal amounts both get rank 1 → next rank becomes 3.
SELECT amount, RANK() OVER (
    ORDER BY amount DESC
) AS r
FROM sales;

-- DENSE_RANK() → No gaps, Ranks go 1,1,2,3...
SELECT amount, DENSE_RANK() OVER (
    ORDER BY amount DESC
) AS dr
FROM sales;