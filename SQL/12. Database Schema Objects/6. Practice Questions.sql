-- Q1) Create a view of employees earning more than 60k.
CREATE VIEW high_salary_employees AS
SELECT name, salary FROM employees
WHERE salary > 60000;

-- Select
SELECT * FROM high_salary_employees;

-- Q2) Create a procedure to increase salary of a department by 10%.
SET SQL_SAFE_UPDATES = 0;

DELIMITER $$
CREATE PROCEDURE IncreaseSalaryByDept(IN dept VARCHAR(50))
BEGIN
    UPDATE employees
    SET salary = salary * 1.10
    WHERE dept = department;
END $$
DELIMITER ;

-- Call
CALL IncreaseSalaryByDept("Engineering");
SELECT * FROM employees;

-- Q3) Create a function to add GST (18%) to any amount.
DELIMITER $$
CREATE FUNCTION add_gst(amount INT)
RETURNS INT
DETERMINISTIC
BEGIN
    RETURN amount + (amount * 0.18);
END $$
DELIMITER ;

-- Call
SELECT name, salary, add_gst(salary) AS gst_included FROM employees;

-- Q4) Create trigger to delete logs when employee is deleted.
DELIMITER $$
CREATE TRIGGER after_employee_delete
AFTER DELETE ON employees
FOR EACH ROW
BEGIN
    DELETE FROM employee_log WHERE name = OLD.name;
END $$
DELIMITER ;

-- Q5) Create event to auto-update bonus every month.
CREATE EVENT monthly_bonus
ON SCHEDULE EVERY 1 MONTH
DO
    UPDATE employees SET salary = salary + 2000;
