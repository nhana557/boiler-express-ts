-- Enter migration here
DROP TABLE IF EXISTS products;

CREATE TABLE products(
    id serial PRIMARY KEY,
    name varchar(255) NOT NULL,
    description text,
    price integer,
    stock integer,
    create_at timestamp without time zone,
    update_at timestamp without time zone
);