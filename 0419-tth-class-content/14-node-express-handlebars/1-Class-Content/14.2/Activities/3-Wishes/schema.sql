/*

to run this file do this in your Terminal:

1. go to the directory of this sql file.

2. get into your mysql console

3. run source schema.sql

*/

CREATE DATABASE wishes_db;
USE wishes_db;

CREATE TABLE wishes
(
id int NOT NULL AUTO_INCREMENT,
wish varchar(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO wishes (wish) VALUES ('Shaan wants to read minds.');
INSERT INTO wishes (wish) VALUES ('John wins the lottery.');
INSERT INTO wishes (wish) VALUES ('Kelly wishes for a room full of kittens.');
