# Dogwatch

docker run -p 5432:5432 --name dogwatch -e POSTGRES_PASSWORD=davidH -d postgres

connect postico with the dogwatch

SQL Query:
create table users (
	id serial not null,
	username varchar(100) not null,
	email varchar(200) not null,
	password varchar(100) not null

);

create table breeds (
	id serial not null,
	breed varchar(200) not null
);

create table breedLikes (
	id serial not null,
	userId serial not null,
	breedId serial not null,
	likes serial
);
