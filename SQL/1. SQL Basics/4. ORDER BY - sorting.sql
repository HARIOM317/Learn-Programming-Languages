-- Sort by salary (ascending)
SELECT * FROM employees
ORDER BY salary ASC;

-- Sort by salary (descending)
SELECT * FROM employees
ORDER BY salary DESC;

-- Sort by department then salary
SELECT * FROM employees
ORDER BY department ASC, salary DESC;