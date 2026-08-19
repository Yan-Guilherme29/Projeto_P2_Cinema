# 🎬 Cinema Backend — API REST

Backend de um sistema de gerenciamento de cinema desenvolvido com NestJS, Prisma e PostgreSQL, com documentação interativa via Swagger.

---

## 🚀 Tecnologias Utilizadas

- [NestJS](https://nestjs.com/) — Framework Node.js para construção de APIs
- [Prisma](https://www.prisma.io/) — ORM para comunicação com o banco de dados
- [PostgreSQL](https://www.postgresql.org/) — Banco de dados relacional
- [Swagger](https://swagger.io/) — Documentação interativa da API
- [TypeScript](https://www.typescriptlang.org/) — Linguagem de programação
- [class-validator](https://github.com/typestack/class-validator) — Validação de dados

---

## 📋 Pré-requisitos

- Node.js v18+
- PostgreSQL instalado e rodando
- npm

---

## ⚙️ Como Instalar e Rodar

### 1. Clone o repositório

```
git clone https://github.com/seu-usuario/cinema-backend.git
cd cinema-backend
```

### 2. Instale as dependências

```
npm install
```

### 3. Configure o banco de dados

Crie um arquivo `.env` na raiz do projeto:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/cinema_db?schema=public"
```

### 4. Execute a migration

```
npx prisma migrate dev
npx prisma generate
```

### 5. Inicie o servidor

```
npm run start:dev
```

### 6. Acesse o Swagger

[http://localhost:3000/api](http://localhost:3000/api)

---

## 🗃️ Modelo do Banco de Dados

As entidades e seus relacionamentos seguem o diagrama de classes do projeto:

- **Cinema** possui várias **Salas**, **Filmes** e **Sessões**
- **Sessão** referencia um **Filme** e uma **Sala**
- **Ingresso** pertence a uma **Sessão**
- **Pedido** contém vários **Ingressos** e **LancheCombos**

---

👨‍💻 Autor

Yan Guilherme Siqueira Gomides

Estudante de Engenharia de Software com foco em desenvolvimento backend.

- 💼 [LinkedIn](https://www.linkedin.com/in/yan-guilherme-dev-backend)
