/* Replace with your SQL commands */
CREATE TYPE user_role AS ENUM ('mentor', 'mentee');


CREATE TABLE users (
    id SERIAL PRIMARY KEY,                  
    username VARCHAR(50) NOT NULL,  
    email VARCHAR(100) NOT NULL UNIQUE,
    image VARCHAR(100),
    role user_role
);

CREATE TABLE skills (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    user_id INT NOT NULL
);

ALTER TABLE skills
ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;
