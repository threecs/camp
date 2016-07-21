CREATE DATABASE movie_planner_db;
USE movie_planner_db;

CREATE TABLE movies
(
id int NOT NULL AUTO_INCREMENT,
movie varchar(255) NOT NULL,
PRIMARY KEY (id)
);

INSERT INTO movies (movie) VALUES ('Rush Hour 2');
