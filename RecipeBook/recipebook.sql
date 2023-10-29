
CREATE DATABASE recipebook;

CREATE TABLE recipes (
    id SERIAL PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    ingredients TEXT NOT NULL,
    steps TEXT NOT NULL,
    image_url VARCHAR(255)
);

-- Create the 'ratings' table
CREATE TABLE ratings (
    id SERIAL PRIMARY KEY,
    recipe_id INT REFERENCES recipes(id),
    user_id TEXT, -- You can add more details for user management
    rating INT CHECK (rating >= 0 AND rating <= 5) NOT NULL
);