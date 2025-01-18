# helpDesk

## Descrição

O **helpDesk** é uma aplicação para gerenciamento de chamados de suporte. Através deste sistema, os usuários podem criar, editar e exibir chamados, permitindo uma comunicação eficiente entre clientes e a equipe de suporte.

Este projeto foi desenvolvido utilizando **Node.js** para o backend e **Prisma** para a comunicação com o banco de dados MySQL.

## Tecnologias Utilizadas

- **Node.js** - Para o desenvolvimento do backend.
- **Express** - Framework para Node.js.
- **Prisma** - ORM (Object Relational Mapping) para interação com o banco de dados MySQL.
- **MySQL** - Sistema de gerenciamento de banco de dados.
- **React** - Para o frontend.
- **Next** - Framework React para roteamento.
- **Cors** - Para gerenciar a comunicação entre diferentes origens.

## Funcionalidades

- **Criação de Chamados**: Usuários podem criar novos chamados de suporte.
- **Edição de Chamados**: Chamados podem ser editados para atualizar seu status ou informações.
- **Exibição de Chamados**: Chamados podem ser visualizados em uma lista com filtros baseados no status.
  
## Estrutura do Projeto

A arquitetura do projeto segue o padrão **MVC** (Model-View-Controller), onde:

- **Model**: Contém a definição das entidades e a lógica de comunicação com o banco de dados.
- **View**: A camada responsável pela interface de comunicação com o frontend (não aplicável diretamente neste backend, mas pode ser consumido por APIs).
- **Controller**: Responsável por receber as requisições, interagir com os models e retornar as respostas.

## Como Rodar o Projeto

### Pré-requisitos

- Node.js instalado na sua máquina.
- Next.js devidamente instalado.
- MySQL instalado e rodando.
- Prisma instalado (via `npm install prisma`).

### Passos para Execução

1. Clone o repositório:

   ```bash
   git clone https://github.com/usuario/helpDesk.git
   cd helpDesk
