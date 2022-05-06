--up

CREATE TABLE apps(
  id VARCHAR(36) PRIMARY KEY,
  name VARCHAR(50) NOT NULL,
  Link VARCHAR(100) NOT NULL,
  gitLink VARCHAR(100),
  status VARCHAR(20) NOT NULL
);

INSERT INTO apps(id, name, Link, gitLink, status) VALUES
  (1, 'Hangman', 'http://hangman.tyway.net', 'https://github.com/howlingunit/hangman', 'released'),
  (3, 'Old-Tyway', 'http://old.tyway.net', 'https://github.com/howlingunit/old-tyway', 'released');