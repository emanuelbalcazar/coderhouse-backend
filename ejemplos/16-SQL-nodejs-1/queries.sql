/* listar las bases de datos */
SHOW databases

/* crear una base de datos */
CREATE DATABASE mydb CHARACTER SET utf8;

/* borrar una base de datos */
DROP DATABASE mydb

/* modificar una base de datos */
ALTER DATABASE mydb CHARACTER SET utf8

/* crear una tabla */
CREATE TABLE users (
    id int,
    name varchar(255),
    lastname varchar(255),
    address varchar(255)
);

/* crear una tabla con id autoincremental y pk */
CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT,
    name varchar(255),
    lastname varchar(255),
    address varchar(255),
    PRIMARY KEY (id)
);

/* borrar una tabla */
DROP TABLE users

/* insertar datos en una tabla */
INSERT INTO users (name, lastname, address) VALUES ("Emanuel", "Balcazar", "Pellegrini 742");

INSERT INTO users (name, lastname, address) VALUES ("Juan", "Perez", "Juan B Justo 1894");

INSERT INTO users (name, lastname, address) VALUES ("Maria", "Farias", "Av. del Valle 734");

INSERT INTO users (name, lastname, address) VALUES ("Adrian", "Andoro", "Julian de Castro 733");

INSERT INTO users (name, lastname, address) VALUES ("Jose", "Caseres", "San Luis 432");

INSERT INTO users (name, lastname, address) VALUES ("Jose", "Mario", "San Juan 455");

INSERT INTO users (name, lastname, address) VALUES ("Jose", "Linares", "San Pedro 323");

/* actualizar datos de una tabla */
UPDATE users SET name = "Carlos Emanuel" WHERE id = 1

/* borrar datos de una tabla */
DELETE FROM users WHERE id = 1

/* listar todos los registros */
SELECT * FROM users

/* listar campos especificos */
SELECT name, lastname FROM users

/* listar los registros que cumplan una condicion */
SELECT * FROM users WHERE id = 2

/* listar los registros usando condiciones AND */
SELECT * FROM users WHERE id = 2 AND name = "Maria"

/* listar los registros usando condiciones OR */
SELECT * FROM users WHERE id = 2 OR name = "Maria"

/* listar los registros que no cumplan con la condicion dada */
SELECT * FROM users WHERE NOT name = "Jose"

/* listar por nombres distintos */
SELECT DISTINCT name FROM users

/* listar cuantos nombres distintos hay */
SELECT COUNT(DISTINCT name) FROM users;

/* listar el nombre y cuantas veces se repiten */
SELECT name, COUNT(name) as total FROM users GROUP BY name

/* listar los usuarios ordenados de manera descendente por nombre */
SELECT * FROM users ORDER BY name DESC

/* listar un maximo de 3 registros */
SELECT * FROM users LIMIT 3

/* listar los registros que tengan un campo NULL */
SELECT * FROM users WHERE address IS NULL

/* listar los registros cuyo nombre inicien con J */
SELECT * FROM users WHERE name LIKE "J%";

/* listar los registros cuyo apellido termine en S */
SELECT * FROM users WHERE lastname LIKE "%s"

/* listar los registros cuyo apellido contengan AR */
SELECT * FROM users WHERE lastname LIKE "%ar%"

/* listar los registros cuyos ids esten dentro de los parametros indicados */
SELECT * FROM users WHERE id IN (1, 2, 3, 4)

/* igual a la consulta anterior pero con strings */
SELECT * FROM users WHERE name IN ("Jose", "Maria")
