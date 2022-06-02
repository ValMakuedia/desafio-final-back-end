create database "api-desafio"

	create table if not exists users (
    id serial primary key,
    name varchar not null,
    email varchar unique not null,
    password text not null,
  	phone integer ,
    cpf integer unique 
    );
  
    
    create table if not exists client (
     id serial primary key,
     name varchar not null,
     email varchar unique not null,
     phone integer not null,
     cpf integer unique not null,
     cep integer,
     address varchar,
     complement varchar,
     district varchar,
     city varchar,
     state varchar,
     on-day boolean DEFAULT false
    )

    create table if not exists transaction (  
    id serial primary key,
    client_id integer REFERENCES client(id),
    description text,
    status varchar,
    amount integer,
    expiration date
    )
