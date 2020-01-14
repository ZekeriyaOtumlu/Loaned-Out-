Drop database if exists loaned_db;
CREATE DATABASE loaned_db;
USE loaned_db;

CREATE TABLE People (
	people_id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	Phone_Number VARCHAR(20) NOT NULL,
	Email VARCHAR(255) NOT NULL,
	PRIMARY KEY (people_id)
);

CREATE TABLE Items
(
	item_id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (item_id),
	item_name varchar(255) NOT NULL,
	Category varchar(255) NOT NULL,
	Value varchar(255) NOT NULL

);

CREATE TABLE Transaction
(
	transaction_id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (transaction_id),
	Borrower_id INT NOT NULL,
	Borrower_Name VARCHAR(255),
	LoanedItem_id INT NOT NULL,
	LoanedItem_Name VARCHAR(255),
	time_created VARCHAR(255)
);