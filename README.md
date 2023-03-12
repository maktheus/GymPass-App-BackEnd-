# App 

GymPass style app.

## FRs (fuctionanl requirements)

- [ ] Deve ser possível criar um usuário;
- [ ] Deve ser possível se autenticar;
- [ ] Deve ser possível obter o perfil de um usuário logado;
- [ ] Deve ser possível obter o numero de checkins realizado pelo usuário logado;
- [ ] Deve ser possível o usuario buscar academia mais proxima;
- [ ] Deve ser possível o usuario buscar academia por nome;
- [ ] Deve ser possível realizar checkin em uma academia;
- [ ] Deve ser possível calidar o checkin de um usuário; 
- [ ] Deve ser possível cadastrar uma academia;


## RNs (Regras de negócio)
- O usuário não pode se autenticar com um email não cadastrado;
- O usuário não pode se autenticar com uma senha incorreta;
- O usuário não deve poder cadastrar com um email duplicado;
- O usuario nao pode fazer 2 checkins no mesmo dia;
- O usuario nao pode fazer check-in se nao estiver perto (100m) da academia;
- o checkin so pode ser validado ate 20 min apos criado;
- O checkin so pode ser validado por administradores da academia;
- A academia so pode ser cadastrada por administradores;


## NFRs (non-functional requirements)
- [ ] A senha do usuario precisa estar criptografada;
- [ ] Os dados da aplicacao precisam estar persistidos em um banco PostegresSQL;
- [ ] Todas listas de dados precisam estar paginadas com 20 itens por pagina;
- [ ] O usuarkl deve ser identidicado por um JWT (Json Web Token);