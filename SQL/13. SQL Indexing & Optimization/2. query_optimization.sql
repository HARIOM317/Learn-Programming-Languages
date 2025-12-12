-- 1. Use SELECT only required columns
-- BAD
SELECT * FROM employees;

-- GOOD
SELECT name, salary FROM employees;

-- ====================================================

-- 2. Use LIMIT to reduce dataset
SELECT name FROM employees ORDER BY salary DESC LIMIT 3;

-- ====================================================

-- 3. Use EXISTS instead of IN for large lists
-- BAD
SELECT name FROM employees
WHERE department IN (
    SELECT department FROM departments
);

-- GOOD
SELECT name FROM employees e
WHERE EXISTS (
    SELECT 1 FROM departments d WHERE d.department = e.department
);

-- ====================================================

-- 4. Avoid OR on different columns, Use UNION
-- BAD
SELECT name, salary FROM employees
WHERE department = 'Engineering' OR salary > 50000;

-- GOOD
SELECT name, salary FROM employees
WHERE department = 'Engineering'
UNION
SELECT name, salary FROM employees
WHERE salary > 50000;

-- ====================================================

-- 5. Avoid wildcard at the beginning
-- Cannot use index
SELECT name FROM employees
WHERE name LIKE '%a';

-- Can use index
SELECT name FROM employees
WHERE name LIKE 'A%';
