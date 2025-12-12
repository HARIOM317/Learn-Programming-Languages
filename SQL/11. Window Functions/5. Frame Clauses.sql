-- ROWS BETWEEN
SELECT emp, month, amount,
    AVG(amount) OVER (
        PARTITION BY emp
        ORDER BY month
        ROWS BETWEEN 2 PRECEDING AND CURRENT ROW
    ) AS moving_avg
FROM sales;