-- SQLite
DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS categories;
DROP TABLE IF EXISTS quizz;
DROP TABLE IF EXISTS stats;
DROP TABLE IF EXISTS questions;
DROP TABLE IF EXISTS responses;
DROP TABLE IF EXISTS friends;
DROP TABLE IF EXISTS notes;

PRAGMA foreign_keys = ON;

CREATE TABLE IF NOT EXISTS users (
  id_user INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  username VARCHAR(40) UNIQUE NOT NULL,
  email VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(100) NOT NULL,
  insc_date DEFAULT CURRENT_DATE NOT NULL,
  image VARCHAR(255),
  bio VARCHAR(150),
  status BOOLEAN DEFAULT FALSE NOT NULL
);

CREATE TABLE IF NOT EXISTS categories (
    id_category INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
    name VARCHAR(30) UNIQUE NOT NULL
);

CREATE TABLE IF NOT EXISTS quizz (
  id_quizz INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_user INTEGER NOT NULL,
  id_category INTEGER,
  name VARCHAR(30) UNIQUE NOT NULL,
  FOREIGN KEY (id_user) REFERENCES users (id_user) ON DELETE CASCADE,
  FOREIGN KEY (id_category) REFERENCES categories (id_category) ON UPDATE CASCADE
);

CREATE TABLE IF NOT EXISTS stats (
  id_stats INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_user INTEGER,
  id_quizz INTEGER,
  points INTEGER NOT NULL,
  date DEFAULT CURRENT_DATE NOT NULL,
  FOREIGN KEY (id_user) REFERENCES users (id_user) ON DELETE CASCADE,
  FOREIGN KEY (id_quizz) REFERENCES quizz (id_quizz) ON DELETE CASCADE
);
  
CREATE TABLE IF NOT EXISTS questions (
  id_question INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_quizz INTEGER,
  id_category INTEGER,
  question VARCHAR(255) UNIQUE NOT NULL,
  FOREIGN KEY (id_quizz) REFERENCES quizz (id_quizz) ON DELETE CASCADE,
  FOREIGN KEY (id_category) REFERENCES categories (id_category) ON UPDATE CASCADE
);
CREATE TABLE IF NOT EXISTS responses (
  id_response INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_question INTEGER,
  response VARCHAR(255) NOT NULL,
  value BOOLEAN NOT NULL,
  FOREIGN KEY (id_question) REFERENCES questions (id_question) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS friends (
  id_friend INTEGER PRIMARY KEY AUTOINCREMENT NOT NULL,
  id_user1 INTEGER,
  id_user2 INTEGER,
  FOREIGN KEY (id_user1) REFERENCES users (id_user) ON DELETE CASCADE,
  FOREIGN KEY (id_user2) REFERENCES users (id_user) ON DELETE CASCADE
);

CREATE TABLE IF NOT EXISTS notes (
  id_notes INTEGER PRIMARY KEY AUTOINCREMENT  NOT NULL,
  id_user INTEGER,
  id_quizz INTEGER,
  note INTEGER NOT NULL,
  FOREIGN KEY (id_user) REFERENCES users (id_user) ON DELETE CASCADE,
  FOREIGN KEY (id_quizz) REFERENCES quizz (id_quizz) ON DELETE CASCADE
);

INSERT INTO users (username,email,password,status) 
VALUES 
    ('Laurent','1491laurent@gmail.com','azerty11234',true),
    ('Dylan','dylan@gmail.com','1234567',false);

INSERT INTO categories (name) 
VALUES ('History'), ('Chemistry'), ('Music'), ('Math');

INSERT INTO quizz (id_user, id_category, name) 
VALUES (1,4,'Les additions'),(1,2,'Tableaux periodique des elements');

INSERT INTO questions (id_quizz, id_category, question)
VALUES (1,4,'Combien font 1+1 ?'),(1,4,'Combien font 5+0 ?'),(1,4,'Combien font 30+30 ?'),(2,2,'Quel est le plus petit élément du tableau ?');

INSERT INTO responses (id_question, response, value)
VALUES (1,'3',FALSE),(1,'1',FALSE),(1,'2',TRUE),(1,'12',FALSE),(4,"L'helium",TRUE);

INSERT INTO friends (id_user1,id_user2)
VALUES (1,2);

INSERT INTO notes (id_user,id_quizz,note)
VALUES (2,2,5);

INSERT INTO stats (id_user,id_quizz,points)
VALUES (1,1,2500),(1,2,2500);
