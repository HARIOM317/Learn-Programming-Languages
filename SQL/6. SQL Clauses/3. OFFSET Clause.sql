-- OFFSET -> Skips rows before starting output

SELECT * FROM employees;

-- skip first 2 rows and show next 3
SELECT * FROM employees
LIMIT 3 OFFSET 2;