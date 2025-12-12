-- ---------------------------------------------------
-- 1. Create Stored Procedure (IN Parameter)
-- ---------------------------------------------------
DELIMITER $$

CREATE PROCEDURE GetEmployeeByDept(IN dept INT)
BEGIN
    SELECT name, salary 
    FROM employees
    WHERE id = dept; 
END $$

DELIMITER ;

-- Call Stored Procedure
CALL GetEmployeeByDept(2);


-- ---------------------------------------------------
-- 2. Procedure with OUT Parameter
-- ---------------------------------------------------
DELIMITER $$

CREATE PROCEDURE GetTotalEmployee(OUT total INT)
BEGIN
    SELECT COUNT(*) INTO total FROM employees;
END $$

DELIMITER ;

-- Call
CALL GetTotalEmployee(@count);
SELECT @count;


-- ---------------------------------------------------
-- 3. Delete Procedure
-- ---------------------------------------------------
DROP PROCEDURE IF EXISTS GetEmployeeByDept;
DROP PROCEDURE IF EXISTS GetTotalEmployee;