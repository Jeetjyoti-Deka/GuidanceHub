/* Replace with your SQL commands */
CREATE TABLE users (
    id SERIAL PRIMARY KEY,                  
    username VARCHAR(50) NOT NULL,  
    email VARCHAR(100) NOT NULL UNIQUE,
    image varchar(100)
);