CREATE TABLE IF NOT EXISTS users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE IF NOT EXISTS user_auth (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    auth_type VARCHAR(50),
    identifier VARCHAR(255) UNIQUE NOT NULL,
    password_hash TEXT
);

CREATE TABLE IF NOT EXISTS plants (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    name VARCHAR(255),
    species VARCHAR(255),
    purchase_date DATE,
    image TEXT,
    water_qty INT NOT NULL,
    water_frequency INT NOT NULL
);

CREATE TABLE IF NOT EXISTS watering_history (
    id SERIAL PRIMARY KEY,
    user_id INT REFERENCES users(id) ON DELETE CASCADE,
    plant_id INT REFERENCES plants(id) ON DELETE CASCADE,
    date TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO users (name, email) VALUES
('john', 'john@doe.com')
ON CONFLICT (email) DO NOTHING;

INSERT INTO plants (user_id, name, species, water_qty, water_frequency) VALUES
(1, 'Monstera', 'Monstera Deliciosa', 500, 7);
