USE company;

--  Create a View
CREATE VIEW employee_salary_view AS
SELECT name, salary, department FROM employees
WHERE salary > 50000;

-- Select from View
SELECT * FROM employee_salary_view;

-- Update a View (Replace)
CREATE OR REPLACE VIEW employee_salary_view AS
SELECT name, salary FROM employees
WHERE salary > 60000;

-- Drop a View
DROP VIEW employee_salary_view;