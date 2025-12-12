USE company;

-- Average salary per department.
SELECT department, AVG(salary) AS  avg_salary
FROM employees
GROUP BY department;