CREATE DATABASE test2;

CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    userName VARCHAR(255),
    email VARCHAR(255),
    dateOfBirth VARCHAR(10)
);

