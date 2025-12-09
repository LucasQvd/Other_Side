DROP DATABASE IF EXISTS otherSide;
CREATE DATABASE otherSide;
USE otherSide;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	email VARCHAR(50) NOT NULL UNIQUE,
	senha VARCHAR(50) NOT NULL
);

CREATE TABLE classe (
	idClasse INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(12) NOT NULL UNIQUE,
	CONSTRAINT chkNome
		CHECK (nome IN ('Combatente', 'Especialista', 'Ocultista')),
	descricao VARCHAR(500) NOT NULL
);

CREATE TABLE ficha (
	idFicha INT NOT NULL AUTO_INCREMENT,
	fkUsuario INT NOT NULL,
	CONSTRAINT fkUsuarioFicha
		FOREIGN KEY (fkUsuario)
			REFERENCES usuario(idUsuario),
	CONSTRAINT pkComposta
		PRIMARY KEY (idFicha, fkUsuario),
	forca INT NOT NULL,
	agilidade INT NOT NULL,
	vigor INT NOT NULL,
	intelecto INT NOT NULL,
	presenca INT NOT NULL,
	nex INT NOT NULL,
	vida INT NOT NULL,
	sanidade INT NOT NULL,
	esforco INT NOT NULL,
	nomePersonagem VARCHAR(100) NOT NULL,
	nomeJogador VARCHAR(100) NOT NULL,
	historia TEXT,
	aparencia TEXT,
	personalidade TEXT,
    fkClasse INT NOT NULL,
	CONSTRAINT fkClasseFicha
		FOREIGN KEY (fkClasse)
			REFERENCES classe(idClasse)
);

CREATE TABLE habilidades (
	idHabilidades INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) NOT NULL,
	descricao VARCHAR(500) NOT NULL,
	requisito VARCHAR(50),
	fkClasse INT,
	CONSTRAINT fkHabilidadeClasse
		FOREIGN KEY (fkClasse)
			REFERENCES classe(idClasse)
);