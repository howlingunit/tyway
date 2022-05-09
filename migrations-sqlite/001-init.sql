--up

CREATE TABLE states(
  id INT PRIMARY KEY,
  status VARCHAR(20)
);

CREATE TABLE apps(
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  Link VARCHAR(100) NOT NULL,
  gitLink VARCHAR(100),
  status INTEGER,
  FOREIGN KEY(status) REFERENCES states(id)
);

INSERT INTO states(id, status) VALUES 
  (1, 'released'),
  (2, 'WIP'),
  (3, 'idea');

INSERT INTO apps(id, name, Link, gitLink, status) VALUES
  (1, 'Hangman', 'http://hangman.tyway.net', 'https://github.com/howlingunit/hangman', 1),
  (3, 'Old-Tyway', 'http://old.tyway.net', 'https://github.com/howlingunit/old-tyway', 1);