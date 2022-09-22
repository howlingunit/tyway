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
  (1, 'Hangman', 'http://hangman.tyway.net', 'https://github.com/howlingunit/hangman', '2022-04-25', 1),
  (2, 'Star wars weather', 'http://sww.tyway.net', 'https://github.com/howlingunit/star-wars-weather', '2022-09-22', 2),
  (3, 'Dark hallway 2.0', 'http://dh.tyway.net', 'https://github.com/howlingunit/darkhallwayV2', '2022-05-16', 3),
  (4, 'Old-Tyway', 'http://old.tyway.net', 'https://github.com/howlingunit/old-tyway', '2022-04-24', 1),
  (7, 'Stefs massage', 'http://sms-preview.tyway.net', 'https://github.com/howlingunit/stefs-massage-website', '2022-09-22', 2),
  (6, 'Tyway', 'http://tyway.net', 'https://github.com/howlingunit/tyway', '2022-09-12', 1);
