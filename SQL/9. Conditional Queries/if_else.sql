USE company;

SELECT * FROM employees;

-- IF()
SELECT name, salary,
IF(salary >= 50000, 'High', "Low") AS income
FROM employees;