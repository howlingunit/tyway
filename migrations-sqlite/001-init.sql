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
  (2, 'Star wars weather', 'http://sww.tyway.net', 'https://github.com/howlingunit/star-wars-weather', 2),
  (3, 'Dark hallway 2.0', 'http://dh.tyway.net', 'https://github.com/howlingunit/darkhallwayV2', 2),
  (4, 'Old-Tyway', 'http://old.tyway.net', 'https://github.com/howlingunit/old-tyway', 1),
  (5, 'Local apps', 'http://local-apps.tyway.net', 'https://github.com/howlingunit/local-apps', 3);