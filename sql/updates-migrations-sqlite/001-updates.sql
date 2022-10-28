--up

CREATE TABLE services(
  id INT PRIMARY KEY,
  service VARCHAR(20),
  link VARCHAR(100) NOT NULL
);

CREATE TABLE updates(
  id VARCHAR(36) PRIMARY KEY,
  description TEXT NOT NULL,
  type VARCHAR(3) NOT NULL,
  date TEXT,
  service INT NOT NULL,
  FOREIGN KEY(service) REFERENCES services(id)
);

INSERT INTO services(id, service, link) VALUES 
  (1, 'TYWAY', 'https://tyway.net'),
  (2, 'SYSTEM', 'https://tyway.net'),
  (4, 'SWW', 'https://sww.tyway.net'),
  (3, 'STEFS-MASSAGE', 'https://stefsmassage.co.uk');

INSERT INTO updates(id, description, type, date, service) VALUES
  (15, 'Added contact information', 'std', '2022-10-28', 1),
  (15, 'now using HTTPS', 'std', '2022-10-03', 2),
  (14, 'Released site', 'rel', '2022-09-27', 3),
  (13, 'Released site preview', 'rel', '2022-09-26', 4),
  (12, 'Added text content', 'std', '2022-09-22', 3),
  (10, 'Added locations page and updated bookings page', 'std', '2022-09-14', 3),
  (9, 'V2.0 released', 'rel', '2022-09-08', 1),
  (8, 'fixed home page bug', 'std', '2022-09-08', 1),
  (7, 'more content', 'std', '2022-09-08', 3),
  (6, 'added about page', 'std', '2022-08-30', 1),
  (5, 'more content', 'std', '2022-08-22', 3),
  (4, 'random testimonials', 'std', '2022-08-17', 3),
  (3, 'typo and styles update', 'std', '2022-08-12', 3),
  (2, 'fixed navbar sizing', 'std', '2022-08-09', 1),
  (1, 'Added the updates page', 'std', '2022-08-09', 1);
