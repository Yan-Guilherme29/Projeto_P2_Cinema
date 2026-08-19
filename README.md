# 🎬 Cinema Backend — API REST


Backend de um sistema de gerenciamento de cinema desenvolvido com **NestJS, TypeScript, Prisma e PostgreSQL**, com documentação interativa da API através do **Swagger**.


O projeto foi desenvolvido como atividade acadêmica na disciplina de **POO III**, aplicando conceitos de desenvolvimento backend, organização modular, persistência de dados e validação de informações.


---


## 🚀 Tecnologias Utilizadas


- [NestJS](https://nestjs.com/) — Framework Node.js para construção de APIs
- [TypeScript](https://www.typescriptlang.org/) — Linguagem de programação
- [Prisma](https://www.prisma.io/) — ORM para comunicação com o banco de dados
- [PostgreSQL](https://www.postgresql.org/) — Banco de dados relacional
- [Swagger](https://swagger.io/) — Documentação interativa da API
- [class-validator](https://github.com/typestack/class-validator) — Validação de dados


---


## 📋 Funcionalidades


O sistema possui recursos para gerenciamento das principais entidades de um cinema, incluindo:


- 🎬 Gerenciamento de cinemas
- 🎞️ Gerenciamento de filmes
- 🏛️ Gerenciamento de salas
- 🎥 Gerenciamento de sessões
- 🎟️ Gerenciamento de ingressos
- 🛒 Gerenciamento de pedidos
- 🍿 Gerenciamento de lanches e combos
- 📚 Validação dos dados recebidos pela API
- 📖 Documentação dos endpoints através do Swagger


---


## 🗃️ Modelo do Banco de Dados


O banco de dados foi estruturado utilizando PostgreSQL e Prisma.


Principais relacionamentos:


- **Cinema** possui várias **Salas**, **Filmes** e **Sessões**
- **Sessão** referencia um **Filme** e uma **Sala**
- **Ingresso** pertence a uma **Sessão**
- **Pedido** contém vários **Ingressos** e **LancheCombos**


A comunicação com o banco de dados é realizada através do **Prisma ORM**.


---


## 📋 Pré-requisitos


Antes de executar o projeto, certifique-se de possuir:


- Node.js v18+
- PostgreSQL instalado e em execução
- npm


---


## ⚙️ Como Instalar e Rodar


### 1. Clone o repositório


```bash
git clone https://github.com/Yan-Guilherme29/Projeto_P2_Cinema.git
cd Projeto_P2_Cinema
2. Instale as dependências
npm install
3. Configure o banco de dados

Crie um arquivo .env na raiz do projeto:

DATABASE_URL="postgresql://postgres:postgres@localhost:5432/cinema_db?schema=public"

Ajuste os dados da conexão de acordo com a configuração do seu PostgreSQL.

4. Execute as migrations
npx prisma migrate dev

Depois, gere o Prisma Client:

npx prisma generate
5. Inicie o servidor

Para executar em modo de desenvolvimento:

npm run start:dev
6. Acesse a documentação da API

Com o servidor em execução, acesse:

http://localhost:3000/api

A documentação interativa dos endpoints estará disponível através do Swagger.

📁 Estrutura do Projeto

A aplicação está organizada de forma modular utilizando a estrutura do NestJS.

Os principais módulos incluem:

src/
├── cinema/
├── filme/
├── ingresso/
├── lanche-combo/
├── pedido/
├── sala/
├── sessao/
└── prisma/

Essa organização separa as principais responsabilidades do sistema em módulos independentes.

🎓 Contexto Acadêmico

Projeto desenvolvido como atividade da disciplina de POO III, com foco na aplicação prática de conceitos de programação orientada a objetos e desenvolvimento de uma API backend.

👨‍💻 Autor

Yan Guilherme Siqueira Gomides

Estudante de Engenharia de Software com foco em desenvolvimento backend.

🔗 GitHub

🔗 LinkedIn
