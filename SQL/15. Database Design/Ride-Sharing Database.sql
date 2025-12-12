-- Create Database
DROP DATABASE IF EXISTS uber;
CREATE DATABASE uber;
USE uber;

-- Drivers Table
CREATE TABLE drivers (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(15) UNIQUE
);

-- Cars Table
CREATE TABLE cars (
    id INT AUTO_INCREMENT PRIMARY KEY,
    driver_id INT,
    model VARCHAR(100),
    plate VARCHAR(20) UNIQUE,
    FOREIGN KEY (driver_id) REFERENCES drivers(id)
);

-- Riders Table
CREATE TABLE riders (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    phone VARCHAR(15) UNIQUE
);

-- Ride Table
CREATE TABLE rides (
    id INT AUTO_INCREMENT PRIMARY KEY,
    driver_id INT,
    rider_id INT,
    pickup_location VARCHAR(255),
    drop_location VARCHAR(255),
    fare DECIMAL(10,2),
    status ENUM('REQUESTED','ACCEPTED','STARTED','COMPLETED','CANCELLED'),
    requested_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (driver_id) REFERENCES drivers(id),
    FOREIGN KEY (rider_id) REFERENCES riders(id),
);

-- ===================================================
-- ---------- OPERATIONS ----------
-- 1. Active rides
SELECT * FROM riders WHERE status = 'STARTED';

-- Daily earning of a driver
SELECT driver_id, SUM(fare)
FROM rides
WHERE status = 'COMPLETED'
GROUP BY driver_id;