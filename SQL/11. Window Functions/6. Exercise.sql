-- 1) Find top 2 sales per employee
SELECT * FROM (
    SELECT emp, month, amount,
        ROW_NUMBER() OVER (
            PARTITION BY emp
            ORDER BY amount DESC
        ) AS rn
    FROM sales
) t
WHERE rn <= 2;

-- 2) Find month-over-month growth
SELECT emp, month, amount,
    amount - LAG(amount) OVER(
        PARTITION BY emp
        ORDER BY month
    ) AS growth
FROM sales;

-- 3) Percentage of contribution of each sale to total company sales
SELECT emp, amount, ROUND(
    amount * 100.00 / SUM(amount) OVER(), 2
) AS Percentage
FROM sales;

-- 4) Rank employees by total sales
SELECT emp, SUM(amount) AS total_sales,
    RANK() OVER(
        ORDER BY SUM(amount) DESC
    ) AS company_rank
FROM sales
GROUP BY emp;