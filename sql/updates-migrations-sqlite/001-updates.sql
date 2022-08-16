--up

CREATE TABLE services(
  id INT PRIMARY KEY,
  service VARCHAR(20)
);

CREATE TABLE updates(
  id VARCHAR(36) PRIMARY KEY,
  description TEXT NOT NULL,
  Link VARCHAR(100) NOT NULL,
  date TEXT,
  service INT NOT NULL,
  FOREIGN KEY(service) REFERENCES services(id)
);

INSERT INTO services(id, service) VALUES 
  (1, 'TYWAY'),
  (2, 'SYSTEM'),
  (3, 'STEFS-MASSAGE');

INSERT INTO updates(id, description, Link, date, service) VALUES
  (4, 'random testimonials', 'http://sms-preview.tyway.net/', '2022-08-17', 3),
  (3, 'typo and styles update', 'http://sms-preview.tyway.net/', '2022-08-12', 3),
  (2, 'fixed navbar sizing', 'http://preview.tyway.net/', '2022-08-09', 1),
  (1, 'Added the updates page', 'http://preview.tyway.net/updates.html', '2022-08-09', 1);
