-- Create Database
CREATE DATABASE companydb;
USE companydb;

-- Drop tables if already exist
DROP TABLE IF EXISTS orders;
DROP TABLE IF EXISTS customers;

-- Create Customers Table
CREATE TABLE customers (
    customer_id INT PRIMARY KEY,
    customer_name VARCHAR(50),
    city VARCHAR(50)
);

-- Create Orders Table
CREATE TABLE orders (
    order_id INT PRIMARY KEY,
    customer_id INT,
    product_name VARCHAR(50),
    amount DECIMAL(10,2),
    FOREIGN KEY (customer_id) REFERENCES customers(customer_id)
);

-- Insert Customers
INSERT INTO customers VALUES
(1,'Praveen','Chennai'),
(2,'Ashwin','Coimbatore'),
(3,'Dinesh','Madurai'),
(4,'Akash','Salem'),
(5,'Ravi','Trichy');

-- Insert Orders
INSERT INTO orders VALUES
(101,1,'Laptop',50000),
(102,2,'Mobile',20000),
(103,1,'Keyboard',1500),
(104,3,'Mouse',800),
(105,4,'Monitor',12000);

-- View Data
SELECT * FROM customers;
SELECT * FROM orders;

-- INNER JOIN
SELECT c.customer_name,
       o.order_id,
       o.product_name,
       o.amount
FROM customers c
INNER JOIN orders o
ON c.customer_id = o.customer_id;

-- LEFT JOIN
SELECT c.customer_name,
       o.order_id,
       o.product_name
FROM customers c
LEFT JOIN orders o
ON c.customer_id = o.customer_id;

CREATE TABLE Students (
    StudentID INT PRIMARY KEY,
    StudentName VARCHAR(50)
);

CREATE TABLE Courses (
    StudentID INT,
    CourseName VARCHAR(50),
    FOREIGN KEY (StudentID) REFERENCES Students(StudentID)
);

INSERT INTO Students VALUES
(1,'Praveen'),
(2,'Ashwin');

INSERT INTO Courses VALUES
(1,'SQL'),
(1,'React'),
(2,'Java'),
(2,'Python');

CREATE TABLE Department (
    DeptID INT PRIMARY KEY,
    DeptName VARCHAR(50)
);

CREATE TABLE Employee (
    EmpID INT PRIMARY KEY,
    EmpName VARCHAR(50),
    DeptID INT,
    FOREIGN KEY (DeptID) REFERENCES Department(DeptID)
);

INSERT INTO Department VALUES
(101,'IT'),
(102,'HR');

INSERT INTO Employee VALUES
(1,'Praveen',101),
(2,'Ashwin',102);

SHOW TABLES;

SELECT * FROM customers;
SELECT * FROM orders;
SELECT * FROM Students;
SELECT * FROM Courses;
SELECT * FROM Department;
SELECT * FROM Employee;