SELECT *FROM employees;

SELECT *
FROM employees
WHERE department = 'Engineering' AND salary > 75000;

SELECT *
FROM employees
WHERE department = 'Engineering' OR department = 'HR';

SELECT *
FROM employees
WHERE NOT department = 'HR';