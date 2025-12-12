-- CASE
SELECT name, salary,
CASE
    WHEN salary >= 75000 THEN 'Very High'
    WHEN salary >= 50000 THEN 'High'
    ELSE 'Low'
END AS level
FROM employees;