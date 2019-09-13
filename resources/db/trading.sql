DROP DATABASE IF EXISTS trading;
CREATE DATABASE IF NOT EXISTS trading;
USE trading;


CREATE TABLE empresa
(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre VARCHAR(100) NOT NULL,
    abreviatura VARCHAR(10) NOT NULL,
    activo BOOL DEFAULT true
);

CREATE TABLE accion
(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    valor DOUBLE NOT NULL,
    fecha DATE NOT NULL,
    empresa_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(empresa_id) REFERENCES empresa(id)
);

CREATE TABLE daily_history
(
	id INT UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    fecha DATE NOT NULL,
    apertura DOUBLE NOT NULL,
    alto DOUBLE NOT NULL,
    bajo DOUBLE NOT NULL,
    cierre DOUBLE NOT NULL,
    empresa_id INT UNSIGNED NOT NULL,
    FOREIGN KEY(empresa_id) REFERENCES empresa(id)
);