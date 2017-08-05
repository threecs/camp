CREATE DATABASE wizard_schools_db;
USE wizard_schools_db;

CREATE TABLE schools (
  id int AUTO_INCREMENT,
  name varchar(30) NOT NULL,
  PRIMARY KEY(id)
);

INSERT INTO schools (name) VALUES ("Hogwarts School of Witchcraft");
INSERT INTO schools (name) VALUES ("Castelobruxo");
INSERT INTO schools (name) VALUES ("Durmstrang Institute");
INSERT INTO schools (name) VALUES ("Beauxbatons Academy of Magic");
