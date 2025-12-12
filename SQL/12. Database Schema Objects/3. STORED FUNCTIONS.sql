-- Create Function
DELIMITER $$

CREATE FUNCTION yearly_salary(monthly INT)
RETURNS INT
DETERMINISTIC
BEGIN
    RETURN monthly * 12;
END $$

DELIMITER ;

-- Use Function
SELECT name, yearly_salary(salary) AS annual_salary FROM employees;