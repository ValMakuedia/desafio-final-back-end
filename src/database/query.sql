create database "api-desafio"

	create table users (
    id serial primary key,
    name varchar not null,
    email varchar unique not null,
    password text not null,
  	phone integer ,
    cpf integer unique 
    );
  
    
    create table client (
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
     state varchar
    )

