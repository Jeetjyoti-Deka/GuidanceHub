/* Replace with your SQL commands */
CREATE TYPE user_role AS ENUM ('mentor', 'mentee');
CREATE TYPE request_status AS ENUM ('pending', 'accepted', 'rejected', 'cancelled');


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

CREATE TABLE requests (
    id SERIAL PRIMARY KEY,
    sender_id INT NOT NULL,
    receiver_id INT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status request_status DEFAULT 'pending',
    FOREIGN KEY (sender_id) REFERENCES users(id),
    FOREIGN KEY (receiver_id) REFERENCES users(id)
);

ALTER TABLE skills
ADD CONSTRAINT fk_user FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE;

ALTER TABLE requests
ADD CONSTRAINT unique_request UNIQUE (sender_id, receiver_id);

ALTER TABLE skills ADD CONSTRAINT check_skill_name_lowercase CHECK (name = LOWER(name));
