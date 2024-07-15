-- just for visualization purpose so we can easily take care of postgres sql commands..

CREATE DATABASE todo;

CREATE TABLE todo(
  todo_id SERIAL PRIMARY KEY,
  title VARCHAR(255)
);


INSR