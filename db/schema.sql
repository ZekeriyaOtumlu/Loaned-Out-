Drop database if exists loaned_db;
CREATE DATABASE loaned_db;
USE loaned_db;

CREATE TABLE People (
	people_id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	Phone_Number VARCHAR(20) NOT NULL,
	Email VARCHAR(255) NOT NULL,
	Photo_url VARCHAR (255),
	PRIMARY KEY (people_id)
);

CREATE TABLE Items
(
	item_id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (item_id),
	item_name varchar(255) NOT NULL,
	Category varchar(255) NOT NULL,
	Value INTEGER NOT NULL,
	image_url VARCHAR(255)
);

CREATE TABLE Transaction
(
	transaction_id int NOT NULL AUTO_INCREMENT,
	PRIMARYowedIte KEY (transaction_id),
	Borrower_id INT NOT NULL,
	Borrower_Name INT NOT NULL,
	LoanedItem_id INT NOT NULL,
	LoadedItem_Name VARCHAR(255) NOT NULL,
	time_created TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SET TIME_ZONE = '-05:00';