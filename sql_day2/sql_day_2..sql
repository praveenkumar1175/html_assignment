CREATE DATABASE companysDB;

USE companysDB;

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    salary INT DEFAULT 30000
);

INSERT INTO employees (id, name, email, salary) VALUES
(1, 'Arun', 'arun@gmail.com', 40000),
(2, 'Priya', 'priya@gmail.com', 45000),
(3, 'Rahul', 'rahul@gmail.com', 50000),
(4, 'Sneha', 'sneha@gmail.com', 35000),
(5, 'Kavin', 'kavin@gmail.com', 30000);

SELECT * FROM employees;

INSERT INTO employees (id, name, email, salary)
VALUES (6, 'Vijay', 'arun@gmail.com', 38000);

DROP TABLE employees;

CREATE TABLE employees (
    id INT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    email VARCHAR(100) UNIQUE,
    salary INT DEFAULT 30000,
    CHECK (salary > 0)
);