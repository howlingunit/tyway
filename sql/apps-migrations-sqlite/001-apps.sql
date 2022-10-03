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
  lastUpdated TEXT NOT NULL,
  status INTEGER,
  FOREIGN KEY(status) REFERENCES states(id)
);

INSERT INTO states(id, status) VALUES 
  (1, 'Released'),
  (2, 'WIP'),
  (3, 'Backlog');

INSERT INTO apps(id, name, Link, gitLink, lastUpdated, status) VALUES
  (1, 'Hangman', 'https://hangman.tyway.net', 'https://github.com/howlingunit/hangman', '2022-04-25', 1),
  (2, 'Star wars weather', 'https://sww.tyway.net', 'https://github.com/howlingunit/star-wars-weather', '2022-09-26', 2),
  (3, 'Dark hallway 2.0', 'https://dh.tyway.net', 'https://github.com/howlingunit/darkhallwayV2', '2022-05-16', 3),
  (4, 'Old-Tyway', 'https://old.tyway.net', 'https://github.com/howlingunit/old-tyway', '2022-04-24', 1),
  (7, 'Stefs massage', 'https://stefsmassage.co.uk', 'https://github.com/howlingunit/stefs-massage-website', '2022-09-27', 1),
  (6, 'Tyway', 'https://tyway.net', 'https://github.com/howlingunit/tyway', '2022-09-12', 1);
