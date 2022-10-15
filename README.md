# ToDo List API

Desafio final do módulo **Arquitetura de Software e Ágil II** do curso de Web Full Stack da Let's Code.

Squad: [Leandro Vendemiatto Antunes](https://github.com/antuneslv) e [Guilherme Pereira de Oliveira](https://github.com/Gui-P-Oliveira).

Esse projeto consiste na criação de uma API utilizando a **arquitetura de microsserviços** com os conceitos aprendidos durante este módulo.

Requisitos obrigatórios:   
  - Fluxo de recuperação de senha para usuários cadastrados no qual o usuário tem 3 minutos após a solicitação para realizar a confirmação, caso o tempo expire, o usuário precisa fazer uma nova solicitação.
  - Crie um API Gateway
  - Modularize serviços
  - Deve ter pelo menos 4 funcionalidades 
  - Integração externa
  - Utilize Redis
  - Utilize RabbitMQ
  - Nodemailer + Mailhog (ou similar)

Nesta API você terá acesso:
- Serviço login.
- Serviço recuperação de senha.
- Serviço alteração de senha.
 
  Caso esteja logado:
  - Serviço ChuckNorrisJokeService integrado a uma API externa.
  

A aplicação foi desenvolvida em **JavaScript** e utiliza as seguintes bibliotecas:

- Express
- Axios
- Jsonwebtoken
- Dotenv
- Nodemon
- Amqplib
- Nodemailer
- Yup
- Redis

# Quick Start

## Instalando as dependências

Use o comando a baixo a partir de cada serviço:

```
npm i
```

## Iniciando o Projeto

Inicialize o RabbitMQ, Mailhog e Redis na sua máquina.

Após instalar as dependências e inicializar as aplicações acima, configure as variáveis de ambiente e utilize o comando abaixo em cada serviço:

```
npm run start
```

