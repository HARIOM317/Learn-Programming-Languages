-- Fetch first 3 records
SELECT * FROM employees
LIMIT 3;

-- Skip 2 rows, fetch next 3 (Pagination)
SELECT * FROM employees
LIMIT 2, 3;