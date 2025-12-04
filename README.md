# Testes E2E com Cypress - FlashFind

Este repositório contém testes End-to-End (E2E) automatizados utilizando Cypress para validação da aplicação FlashFind.

## 🎯 Sobre os Testes

Este projeto contém testes automatizados E2E que validam as principais funcionalidades da aplicação FlashFind. Os testes cobrem a **página inicial** (verificando cabeçalho, conteúdo e rodapé) e a **interface de login** (testando formulário e interação com campos). Esta automação garante qualidade e detecta problemas rapidamente durante o desenvolvimento.

## 📋 Testes Implementados

### 1. Teste da Página Inicial - FlashFind (`home.cy.js`)
- ✅ Deve exibir o título principal
- ✅ Deve exibir a descrição
- ✅ Deve ter o header com a marca
- ✅ Deve ter links de navegação
- ✅ Deve exibir o footer

### 2. Atividade 04 - Interface Web (`login.cy.js`)
- ✅ Deve exibir o título da página
- ✅ Deve exibir o formulário de login
- ✅ Deve permitir digitar usuário e senha
- ✅ Deve exibir o footer com o nome completo

## 🚀 Pré-requisitos

Antes de executar os testes, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [yarn](https://yarnpkg.com/)

## 📦 Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/cypress-e2e-tests.git
cd cypress-e2e-tests
```

2. Instale as dependências:
```bash
npm install
```

## ▶️ Executando os Testes

### Modo Interativo (Cypress Test Runner)
Abre a interface gráfica do Cypress para executar e visualizar os testes:

```bash
npm run cy:open
```
ou
```bash
npx cypress open
```

### Modo Headless (Terminal)
Executa todos os testes no terminal sem interface gráfica:

```bash
npm run cy:run
```
ou
```bash
npx cypress run
```

### Executar um teste específico
```bash
npx cypress run --spec "cypress/e2e/home.cy.js"
```

## 📁 Estrutura do Projeto

```
cypress-e2e-tests/
├── cypress/
│   ├── e2e/
│   │   ├── home.cy.js          # Testes da página inicial
│   │   └── login.cy.js         # Testes da página de login
│   ├── fixtures/               # Dados de teste
│   ├── support/                # Comandos customizados
├── cypress.config.js           # Configurações do Cypress
├── package.json
└── README.md
```

## 🔧 Configuração

O arquivo `cypress.config.js` contém as configurações principais:

```javascript
{
  baseUrl: 'http://localhost:3000', // URL base da aplicação
  viewportWidth: 1280,
  viewportHeight: 720,
  video: true,
  screenshotOnRunFailure: true
}
```

## 🛠️ Tecnologias Utilizadas

- [Cypress](https://www.cypress.io/) - Framework de testes E2E
- [JavaScript](https://developer.mozilla.org/pt-BR/docs/Web/JavaScript) - Linguagem de programação

## 📝 Scripts Disponíveis

```json
{
  "cy:open": "cypress open",
  "cy:run": "cypress run",
  "cy:run:chrome": "cypress run --browser chrome",
  "cy:run:firefox": "cypress run --browser firefox"
}
```

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

Daniel Speziali - [GitHub](https://github.com/seu-usuario)

---

⭐ Se este projeto te ajudou, considere dar uma estrela!
