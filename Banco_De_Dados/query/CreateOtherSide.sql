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
nome VARCHAR(12) NOT NULL,
CONSTRAINT chkNome
	CHECK (nome IN ('Combatente', 'Especialista', 'Ocultista')),
descricao VARCHAR(500) NOT NULL
);

CREATE TABLE descricao (
idDescricao INT PRIMARY KEY AUTO_INCREMENT,
historia VARCHAR(500),
aparencia VARCHAR(500),
personalidade VARCHAR(500)
);

CREATE TABLE ficha (
idFicha INT NOT NULL,
fkUsuario INT NOT NULL,
CONSTRAINT fkUsuarioFicha
	FOREIGN KEY (fkUsuario)
		REFERENCES usuario(idUsuario),
nome VARCHAR(100) NOT NULL,
forca INT NOT NULL,
agilidade INT NOT NULL,
vigor INT NOT NULL,
intelecto INT NOT NULL,
presenca INT NOT NULL,
nex INT NOT NULL,
vida INT NOT NULL,
sanidade INT NOT NULL,
esforco INT NOT NULL,
fkDescricao INT,
CONSTRAINT fkDescricaoFicha
	FOREIGN KEY (fkDescricao)
		REFERENCES descricao(idDescricao),
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