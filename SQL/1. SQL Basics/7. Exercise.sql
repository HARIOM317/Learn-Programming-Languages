-- Q1. Find top 2 highest paid employees from Engineering
SELECT name, salary FROM employees
WHERE department = "Engineering"
ORDER BY salary DESC
LIMIT 2;

-- Q2. Fetch name + department + age of employees older than 28
SELECT name, department, age FROM employees
WHERE age > 28;

-- Q3. Get the 3 lowest paid employees
SELECT * from employees
ORDER BY salary ASC
LIMIT 3;

-- Q4. Get employees whose name ends with “a”
SELECT * FROM employees
WHERE name LIKE "%a";

-- Q5. Fetch Engineering employees with salary < 80,000
SELECT * FROM employees
WHERE department = 'Engineering' AND salary < 80000;

-- Q6. Fetch employees between age 26 and 32 sorted by highest salary
SELECT * FROM employees
WHERE age BETWEEN 26 AND 32
ORDER BY salary DESC;