--up

CREATE TABLE services(
  id INT PRIMARY KEY,
  service VARCHAR(20),
  link VARCHAR(100) NOT NULL
);

CREATE TABLE updates(
  id serial PRIMARY KEY,
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
  (5, 'USERNAMES', 'https://usernames.tyway.net'),
  (3, 'STEFS-MASSAGE', 'https://stefsmassage.co.uk');

INSERT INTO updates(description, type, date, service) VALUES
  ('Released site', 'rel', '2023-02-20', 5),
  ('Updated readme', 'std', '2023-02-20', 5),
  ('Released the 1st version of the frontend for usernames', 'std', '2023-02-13', 5),
  ('Released the API for usernames and have started work on frontend', 'std', '2023-02-10', 5),
  ('Started project "usernames"', 'sta', '2023-02-06', 5),
  ('Released site', 'rel', '2023-01-15', 4),
  ('Added more planets!!', 'std', '2023-01-09', 4),
  ('Updated the readme and added documentation.', 'std', '2022-12-16', 4),
  ('Added further data to the raw page and improved the styling of graphs.', 'std', '2022-12-15', 4),
  ('Added per month graph to raw page', 'std', '2022-12-05', 4),
  ('Added raw page', 'std', '2022-11-21', 4),
  ('Added contact information', 'std', '2022-10-28', 1),
  ('now using HTTPS', 'std', '2022-10-03', 2),
  ('Released site', 'rel', '2022-09-27', 3),
  ('Released site preview', 'rel', '2022-09-26', 4),
  ('Added text content', 'std', '2022-09-22', 3),
  ('Added locations page and updated bookings page', 'std', '2022-09-14', 3),
  ('V2.0 released', 'rel', '2022-09-08', 1),
  ('fixed home page bug', 'std', '2022-09-08', 1),
  ('more content', 'std', '2022-09-08', 3),
  ('added about page', 'std', '2022-08-30', 1),
  ('more content', 'std', '2022-08-22', 3),
  ('random testimonials', 'std', '2022-08-17', 3),
  ('typo and styles update', 'std', '2022-08-12', 3),
  ('fixed navbar sizing', 'std', '2022-08-09', 1),
  ('Added the updates page', 'std', '2022-08-09', 1);
