CREATE DATABASE ng_pacientes_db;

USE ng_pacientes_db;

CREATE TABLE paciente (
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(80),
    apellidos VARCHAR(100),
    direccion VARCHAR(200),
    email VARCHAR(100),
    municipio VARCHAR(100),
    provincia VARCHAR(100),
    telefono VARCHAR(15),
    dni VARCHAR(15)
);

DESCRIBE paciente;