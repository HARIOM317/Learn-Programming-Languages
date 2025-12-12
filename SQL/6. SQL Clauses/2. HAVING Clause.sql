-- Show only those departments whose average salary is more than 50,000

SELECT department, AVG(salary) AS avg_salary
FROM employees
GROUP BY department
HAVING avg_salary > 50000;