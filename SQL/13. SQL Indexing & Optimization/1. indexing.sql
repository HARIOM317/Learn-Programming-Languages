SELECT * FROM employees;

-- Create index
CREATE INDEX idx On employees(name);

-- Index on multiple columns (Composite Index)
CREATE INDEX idx_dept_salary ON employees(department, salary);

-- Drop Index
DROP INDEX idx ON employees