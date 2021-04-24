--- Tabela de Clientes 
CREATE TABLE cliente 
(
id serial primary key,
nome character varying (60),
endereco character varying (100),                            
filme_id integer,
alugado_id integer
)
WITH (OIDS = FALSE
);                                                         
ALTER TABLE cliente OWNER to postgres;

--- Tabela de Filmes -----------
CREATE TABLE filme
(
id serial primary key,
nome character varying (60),
elenco character varying (200),
ator_id integer,
categoria_id integer
)
WITH (OIDS = FALSE 
);
ALTER TABLE filme OWNER to postgres;

-- Tabela de Filmes já Alugados 
CREATE TABLE alugado
(
id serial primary key,
filme character varying (100),
cliente_id integer
)
WITH (OIDS = FALSE
);
ALTER TABLE alugado OWNER to postgres;

-- Tabela de Atores 
CREATE TABLE ator 
(
id serial primary key, 
nome character varying(60),
filme_id integer
)
WITH (OIDS = FALSE
);
ALTER TABLE ator OWNER TO postgres;

-- Tabela de Categorias 
CREATE TABLE categoria 
(
id serial primary key,
genero character varying (60),
filme_id integer
)
WITH (OIDS = FALSE
);
ALTER TABLE categoria OWNER TO postgres;

-- Valores -> Tabela de Clientes
INSERT INTO cliente (nome, endereco)
VALUES ('Carlos Henrique', 'Av. Rio Branco, 123'),
('Larissa Garibald', 'Av. Ten. Luiz Meireles, 232'),
('Giovanne Santos', 'R: Fileuterpe, 343'),
('Dayane Silva', 'R: Minas Gerais, 3243'),
('Maria Nascimento', 'R: Tupi, 3251'),
('Alice Periles', 'R: Duque de Caxias, 1232');

-- Valores -> Tabela de Filmes 
INSERT INTO filme (nome, ator_id, categoria_id)
VALUES ('Enemy', '1', '1'),
('Residente Evil V - Retribuição', '1', '3'),
('O Poço', '3', '1'),
('O Homem Invísivel', '4', '1'),
('Querido John', '5', '3'),
('Como Eu Era Antes de Você', '6', '3');

-- Valores -> Tabela de Filmes Alugados 
INSERT INTO alugado (filme)
VALUES ('MA'),
('Residente Evil IV'),
('O Cubo'),
('Divergente'),
('Um Homem de Sorte'),
('O Melhor de Mim');

-- Valores -> Tabela Atores 
INSERT INTO ator (nome)
VALUES ('Jake Gyllenhal'),
('Milica Jovovich'),
('Iván Massagé'),
('Oliver Jackson-Cohen'),
('Amanda Seyfried'),
('Emilia Clarke');

-- Valores -> Tabela Categoria 
INSERT INTO categoria (genero)
VALUES ('Suspense'),
('Ficção Científica'),
('Romance');

--- Quais filmes cada cliente já alugou 

SELECT 
cliente.nome AS cliente,
alugado.filme
FROM cliente
JOIN alugado ON alugado.cliente_id = cliente.alugado_id

--- Quais filmes cada ator já participou

SELECT 
ator.nome,
filme.nome
FROM filme
JOIN ator ON ator.id = filme.id_ator
--- Quais atores tem em um determinado filme
WHERE id_ator = 1

--- Quais os filmes de uma determinada categoria

SELECT 
filme.nome,
categoria.genero
FROM filme
JOIN categoria ON categoria.id = filme.id_categoria
