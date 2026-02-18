-- Data Definition Language (DDR)
CREATE DATABASE hospital;
-- A partir de agora todos os comandos serão dentro de "hospital"

USE hospital;
	
CREATE TABLE pacientes (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
	cpf VARCHAR(11) NOT NULL UNIQUE,
	data_nascimento DATE NOT NULL,
	ativo BOOL NOT NULL DEFAULT TRUE
); 

CREATE TABLE medicos (
	id INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(255) NOT NULL,
	cpf VARCHAR(11) NOT NULL UNIQUE,
	data_nascimento DATE NOT NULL,
	crm VARCHAR(8) NOT NULL UNIQUE,
	ativo BOOL NOT NULL DEFAULT TRUE    
);


CREATE TABLE enderecos(
	id INT PRIMARY KEY AUTO_INCREMENT,
    rua VARCHAR(255) NOT NULL,
    bairro VARCHAR(100) NOT NULL,
    cidade VARCHAR(100) NOT NULL,
	estado VARCHAR(50) NOT NULL,
    numero VARCHAR (10)
    );

ALTER TABLE medicos ADD email VARCHAR(255);
ALTER TABLE pacientes ADD email VARCHAR(255);




-- Excluido tabelas
-- DROP TABLE medicos;

-- Data Query Language (DQL)
SELECT * FROM pacientes;
SELECT * FROM medicos;

INSERT INTO pacientes (nome, cpf, data_nascimento)
VALUES ('Maria', '01234567891','1990-05-09');
