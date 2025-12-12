-- Creating a History Table
CREATE TABLE employee_log (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50),
    action_time TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Trigger - executes automatically on INSERT, UPDATE, or DELETE
DELIMITER $$

CREATE TRIGGER before_employee_insert
BEFORE INSERT ON employees
FOR EACH ROW
BEGIN
    INSERT INTO employee_log(name)
    VALUES (NEW.name);
END $$

DELIMITER ;

-- After Update Trigger
DELIMITER $$

CREATE TRIGGER after_salary_update
AFTER UPDATE ON employees
FOR EACH ROW
BEGIN
    INSERT INTO employee_log(name)
    VALUES (CONCAT('Updated ', NEW.name));
END $$

DELIMITER ;

-- Delete Trigger
DROP TRIGGER before_employee_insert;