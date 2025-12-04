USE otherSide;

INSERT INTO classe (nome, descricao) VALUES
    ('Combatente', 'Treinado para lutar com todo tipo de armas, e com a força e a coragem para encarar os perigos de frente. É o tipo de agente que prefere abordagens mais diretas e costuma atirar primeiro e perguntar depois.'),
    ('Especialista', 'Um agente que confia mais em esperteza do que em força bruta. Um especialista se vale de conhecimento técnico, raciocínio rápido ou mesmo lábia para resolver mistérios e enfrentar o paranormal.'),
    ('Ocultista', 'O Outro Lado é misterioso, perigoso e, de certa forma, cativante. Muitos estudiosos das entidades se perdem em seus reinos obscuros em busca de poder, mas existem aqueles que visam compreender e dominar os mistérios paranormais para usá-los para combater o próprio Outro Lado. Esse tipo de agente não é apenas um conhecedor do oculto, como também possui talento para se conectar com elementos paranormais.');

SELECT fkClasse, COUNT(fkClasse) FROM ficha WHERE fkUsuario = 1 GROUP BY fkClasse ORDER BY fkClasse;
    
SELECT fkClasse, COUNT(fkClasse) AS quantidade FROM ficha GROUP BY fkClasse ORDER BY fkClasse;

SELECT nomePersonagem, vida FROM ficha ORDER BY vida DESC LIMIT 5;
SELECT nomePersonagem, sanidade FROM ficha ORDER BY sanidade DESC LIMIT 5;
SELECT nomePersonagem, esforco FROM ficha ORDER BY esforco DESC LIMIT 5;



select * from ficha;

desc ficha;
-- INSERT INTO habilidades (nome, descricao, requisito, fkClasse) VALUES