-- Salary greater than 50,000
SELECT * FROM employees
WHERE salary > 50000;

-- Engineering department employees
SELECT name, salary FROM employees
WHERE department = "Engineering";

-- Age between 25 and 30
SELECT * FROM employees
WHERE age BETWEEN 25 AND 30;

-- Excluding Marketing department
SELECT * FROM employees
WHERE department != "Marketing";

-- Names starting with “P”
SELECT * FROM employees
WHERE name LIKE 'P%';