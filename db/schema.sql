Drop database if exists loaned_db;
CREATE DATABASE loaned_db;
USE loaned_db;

CREATE TABLE People (
	id INT NOT NULL AUTO_INCREMENT,
	name VARCHAR(255) NOT NULL,
	Phone_Number INTEGER NOT NULL,
	Email VARCHAR(255) NOT NULL,
	Photo_url VARCHAR (255),
	PRIMARY KEY (id)
);


CREATE TABLE Items
(
	id int NOT NULL AUTO_INCREMENT,
	PRIMARY KEY (id),
	item_name varchar(255) NOT NULL,
	Category varchar(255) NOT NULL,
	Value INTEGER NOT NULL,
	image_url VARCHAR(255)
);