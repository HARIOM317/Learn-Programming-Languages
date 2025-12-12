-- SUM() OVER() (Running Totals)
SELECT emp, month, amount, 
    SUM(amount) OVER (
        PARTITION BY emp
        ORDER BY month
    ) AS running_total
FROM sales;

-- AVG() OVER() (Running Average)
SELECT emp, month, amount,
    AVG(amount) OVER (
        PARTITION BY emp
        ORDER BY month
    ) AS running_avg
FROM sales;

-- MAX() OVER() (Running Maximum)
SELECT emp, month, amount,
    MAX(amount) OVER (
        PARTITION BY emp
        ORDER BY month
    ) AS running_max
FROM sales;

-- MIN() OVER() (Running Minimum)
SELECT emp, month, amount,
    MIN(amount) OVER (
        PARTITION BY emp
        ORDER BY month
    ) AS running_min
FROM sales;

-- COUNT() OVER() (Running Count)
SELECT emp, month, amount,
    COUNT(amount) OVER (
        PARTITION BY emp
        ORDER BY month
    ) AS running_cnt
FROM sales;