-- LAG() - access previous row
SELECT emp, month, amount,
    LAG(amount, 1) OVER (
        PARTITION BY emp
        ORDER BY month
    ) AS prev_month_amount
FROM sales;

-- LEAD() - access next row
SELECT emp, month, amount,
    LEAD(amount, 1) OVER (
        PARTITION BY emp
        ORDER BY month
    ) AS next_month_amount
FROM sales;