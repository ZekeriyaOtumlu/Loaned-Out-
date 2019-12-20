Drop database if exists loaned_db;

CREATE DATABASE loaned_db;
USE loaned_db;

CREATE TABLE loans
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured boolean DEFAULT false,
	PRIMARY KEY (id)
);
