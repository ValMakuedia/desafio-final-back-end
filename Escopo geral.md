# Escopo geral 



## O que o usuário pode fazer
- fazer cadastro
- fazer login
- editar dados do usuario logado
- ver dados do usuario logado
- fazer cadastro de cliente



## O que não será possível fazer
- recuperar senha
 


## Endpoints

### POST - Login

#### Dados enviados 
- email *
- senha *

#### Dados retornados
- sucesso / erro
- token

#### Objetivos gerais
 ---
 ### POST - Cadastro 
 
#### Dados enviados
- nome *
- email *
- senha *

#### Dados retornados
- sucesso / erro

#### Objetivos gerais
- criptografar senha
- verificar email
- direcionar para login
---
### GET - Ver dados do usuario

#### Dados enviados 
- token

#### Dados retornados
- nome 
- cpf
- telefone
- email 
- senha 

#### Objetivos gerais

---

### PUT - Editar Usuario

#### Dados enviados 
- token *
- nome *
- cpf
- telefone
- email *
- senha *

#### Dados retornados
- sucesso / erro
---
 ### POST - Cadastro de cliente
 
#### Dados enviados
 - Campos necessários para o cadastro:
    - Nome do usuário (*)
    - Email (*)
    - Cpf (*)
    - Telefone (*)
    - Cep !
    - Logradouro
    - Complemento
    - Bairro
    - Cidade
    - Estado
#### Dados retornados
- sucesso / erro
- Mensagem de confirmação

#### Objetivos gerais
- criptografar senha
- verificar email
- direcionar para login

#### Objetivos gerais

# Importante

## Banco de dados
 - usuario
   - id
   - email
   - senha
   - nome
   - senha criptografada
 - cliente  
    - id
    - Nome do usuário 
    - email     
    - Cpf 
    - Telefone 
    - Cep !
    - Logradouro
    - Complemento
    - Bairro
    - Cidade
    
    
## Senha
- criptografar senha ANTES de mandar pro banco de dados
- caracteres
  - min: 6
  
   
## 




### Legenda 
 - Obrigatório - *
 - legal colocar - !