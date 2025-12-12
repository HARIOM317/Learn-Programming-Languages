-- BETWEEN Operator
SELECT * FROM employees
WHERE salary BETWEEN 30000 AND 60000;

-- -------------------------------------

-- IN / NOT IN Operator
SELECT * FROM employees
WHERE department IN ('Engineering', 'HR');

-- NOT IN Operator
SELECT * FROM employees
WHERE age NOT IN (25, 30);

-- -------------------------------------

-- LIKE Operator
-- Names starting with R
SELECT * FROM employees
WHERE name LIKE "R%";

-- Names where 2nd character is a
SELECT * FROM employees
WHERE name LIKE '_a%';

-- -------------------------------------

-- IS NULL / IS NOT NULL Operator
SELECT * FROM employees
WHERE department IS NULL;

SELECT * FROM employees
WHERE department IS NOT NULL;

-- -------------------------------------

-- AND & ALL Operator
-- Find employees whose salary is greater than ANY salary in HR department.
SELECT * FROM employees
WHERE salary > ANY (SELECT salary FROM employees WHERE department = 'HR');

-- Find employees whose salary is greater than ALL HR salaries.
SELECT * FROM employees
WHERE salary > ALL (SELECT salary FROM employees WHERE department='HR');

-- -------------------------------------

-- EXISTS Operator
SELECT name FROM employees e
WHERE EXISTS (
    SELECT 1 FROM employees WHERE department = 'HR'
);

-- -------------------------------------

-- String Operator (MySQL specific)
SELECT CONCAT(name, ' works in ', department) AS info
FROM employees;

-- -------------------------------------

-- Assignment Operator (:=) - Used in MySQL for variables.
SET @a := 100;
SELECT @a;