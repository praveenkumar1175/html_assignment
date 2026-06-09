-- 1. Create table events
CREATE TABLE events (
    id INT PRIMARY KEY,
    event_name VARCHAR(100),
    event_date DATE
);

-- 2. Insert events with different dates
INSERT INTO events (id, event_name, event_date)
VALUES
(1, 'Tech Fest', '2025-07-15'),
(2, 'Sports Day', '2025-08-20'),
(3, 'Workshop', '2025-09-10'),
(4, 'Hackathon', '2025-10-05'),
(5, 'Annual Day', '2025-12-25');

-- View all records
SELECT * FROM events;

-- 3. Display current date and time
SELECT NOW() AS current_datetime;

-- 4. Format event_date using DATE_FORMAT()
SELECT
    event_name,
    DATE_FORMAT(event_date, '%d-%m-%Y') AS formatted_date
FROM events;

-- 5. Extract YEAR and MONTH from event_date
SELECT
    event_name,
    YEAR(event_date) AS event_year,
    MONTH(event_date) AS event_month
FROM events;

-- 6. Combine event_name and event_date using CONCAT()
SELECT
    CONCAT(event_name, ' - ', event_date) AS event_details
FROM events;