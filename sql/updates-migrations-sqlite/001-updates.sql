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
  (8, 'fixed home page bug', 'http://preview.tyway.net', '2022-09-12', 1),
  (7, 'more content', 'http://sms-preview.tyway.net/about.html', '2022-09-08', 3),
  (6, 'added about page', 'http://preview.tyway.net/about.html', '2022-08-30', 1),
  (5, 'more content', 'http://sms-preview.tyway.net/', '2022-08-22', 3),
  (4, 'random testimonials', 'http://sms-preview.tyway.net/', '2022-08-17', 3),
  (3, 'typo and styles update', 'http://sms-preview.tyway.net/', '2022-08-12', 3),
  (2, 'fixed navbar sizing', 'http://preview.tyway.net/', '2022-08-09', 1),
  (1, 'Added the updates page', 'http://preview.tyway.net/updates.html', '2022-08-09', 1);
