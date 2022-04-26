# Press Start NodeJs API
Esse é um projeto de estudo em NodeJs construido durante o programa Press Start, é um crud simples mas bem estruturado, particularmente foi um bom desafio aprender e executar esse projeto em typescript e usando outras libs como Bcrypt (Hash de senhas), Morgan(Log de requisições), JWT (Token de autorização) e o ORM Prisma, que apesar de ser recente tem um nivel de simplicidade gigante.<br>


## Rotas
    /login * Faz a autorização das rotas seguintes via Token utilizando JWT

    /api/listAll/qnt * Devolve todos os usuarios cadastrados, pode ser passado como parâmetro
    a quantidade de usuarios a ser retornada, caso vázio o padrão é 10.
    /api/getById/id * Devolve o usuário correspondente aquele ID ou uma mensagem de não encontrado.
    /api/addUser * Cadastra um usuario
    /api/updateUser/id * Atualiza um usuario de acordo com o ID informado
    /api/delete/id * Deleta o usuario de acordo com o ID informado

    ** Todas as rotas com /api necessitam da autenticação JWT

## Instalação
1 - Instale as dependencias rodando
```node
npm install
```

2 - Insira sua connectionString e o JWT Secret no arquivo .env.example e renomeie para .env

3 - Altere o SGBD no arquivo prisma.schema se for necessário.

4 - Execute para iniciar
```node
npm run dev
```








