CREATE DATABASE schoolsDB;

USE schoolsDB;

CREATE TABLE students (
    id INT PRIMARY KEY,
    name VARCHAR(50),
    age INT,
    grade VARCHAR(10)
);

INSERT INTO students (id, name, age, grade) VALUES
(1, 'Arun', 15, 'A'),
(2, 'Priya', 16, 'B'),
(3, 'Rahul', 15, 'A'),
(4, 'Sneha', 14, 'C'),
(5, 'Kavin', 16, 'B');

SELECT * FROM students;

DROP DATABASE schoolDB;