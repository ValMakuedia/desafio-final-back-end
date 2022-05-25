create database "api-desafio"

	create table usuarios (
    id serial primary key,
    name varchar not null,
    email varchar unique not null,
    password text not null
    );
    
  
    
    create table clientes (
     id serial primary key,
     name varchar not null,
     email varchar unique not null,
     telefone integer not null,
     cpf integer unique not null,
     cep integer,
     logradouro varchar,
     complemento varchar,
     bairro varchar,
     cidade varchar,
     estado varchar
      
    )

