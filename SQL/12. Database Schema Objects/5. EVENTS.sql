-- EVENTS (Scheduled SQL Jobs)

-- Enable Event Scheduler
SET GLOBAL event_schedular = ON;

-- Create Event: Delete logs older than 30 days
CREATE EVENT delete_old_logs
ON SCHEDULE EVERY 1 DAY
DO
    DELETE FROM employee_log
    WHERE action_time < NOW() - INTERVAL 30 DAY;

-- Create One-Time Event
CREATE EVENT one_time_event
ON SCHEDULE AT '2026-01-01 00:00:00'
DO
    UPDATE employees SET salary = salary * 1.10;

-- DROP Event
DROP EVENT delete_old_logs;