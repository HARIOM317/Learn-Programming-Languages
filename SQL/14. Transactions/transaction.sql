-- Create Database
DROP DATABASE IF EXISTS bankdb;
CREATE DATABASE bankdb;
USE bankdb;

-- Create Accounts Table
CREATE TABLE accounts (
    account_number INT PRIMARY KEY,
    name VARCHAR(100),
    balance INT
);

-- Create Transaction Log Table
CREATE TABLE transaction_log (
    id INT PRIMARY KEY AUTO_INCREMENT,
    message VARCHAR(255),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- Insert Sample Data
INSERT INTO accounts 
(account_number, name, balance) VALUES
(12344321, 'Amit', 10000),
(10011234, 'Rohan', 6000);

SELECT * FROM accounts;

-- ===== TRANSACTION =====
-- Example: Amit transfers ₹3,000 to Rohan

-- Start Transaction
START TRANSACTION;

-- Step 1: Amit → Deduct 3000
UPDATE accounts SET balance = balance - 3000
WHERE account_number = 12344321;

-- tep 2: Rohan → Add 3000
UPDATE accounts SET balance = balance + 3000
WHERE account_number = 10011234;

-- Step 3: Insert a log entry
INSERT INTO transaction_log(message)
VALUES ('Amit transferred 3000 to Rohan');

-- Step 4 (A): Commit if everything is successful
COMMIT;

-- Step 4 (B): Rollback (if any error occurs)
ROLLBACK;

-- Check New balance and log
SELECT * FROM accounts;
SELECT * FROM transaction_log;