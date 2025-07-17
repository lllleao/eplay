# ePlay

🚀 Projeto Frontend de Simulação de E-commerce de Jogos

O **ePlay** é um aplicativo web que simula uma plataforma de comércio eletrônico para jogos digitais. Criado com React e TypeScript, ele oferece uma experiência fluida e interativa para navegação, visualização de detalhes dos jogos e finalização de compras.

---

## 🔍 Funcionalidades

- **Navegação por Categorias e Abas**  
  O usuário pode explorar jogos organizados por categorias em um menu intuitivo.

- **Página de Detalhes do Jogo**  
  Cada jogo possui uma página exclusiva exibindo imagens, vídeos e informações relevantes.

- **Checkout Simulado**  
  Processo de compra com preenchimento de dados e validações via Formik e Yup.

- **Estilização e UX Modernos**  
  Interface elegante e responsiva com Styled Components e animações via React Spinners.

---

## 🧱 Tecnologias e Dependências

### Principais

- [React](https://reactjs.org/) + [TypeScript](https://www.typescriptlang.org/)
- [Formik](https://formik.org/) + [Yup](https://github.com/jquense/yup)
- [Styled Components](https://styled-components.com/)
- [React Router DOM](https://reactrouter.com/)
- [Redux Toolkit](https://redux-toolkit.js.org/)

### Testes

- `@testing-library/react`, `jest-dom`, `user-event`

### Validação e Máscaras

- `react-input-mask` para campos como CPF e cartão de crédito

### Análise de Performance

- `web-vitals` para métricas do Core Web Vitals

---

## ▶️ Scripts disponíveis

- `npm start` — Inicia o projeto em modo desenvolvimento  
- `npm run build` — Gera o build otimizado para produção  
- `npm test` — Executa os testes automatizados  
- `npm run eject` — Expõe configurações internas (não recomendável)

---

## 🌐 Compatibilidade

Compatível com os principais navegadores modernos:

- Última versão do Chrome, Firefox e Safari

---

## 💻 Instalação

```bash
# Clonar o repositório
git clone https://github.com/seu-usuario/eplay.git

# Instalar dependências
npm install

# Rodar localmente
npm start
