![Portal Atlas](./public/site/images/logo_footer.png)

Esse projeto servirá de base para os futuros sites da Atlas, que serão desenvolvidos em Next.js.

## Inicialização:

Após realizar o clone do projeto e instalar as dependências (npm install ou yarn), certifique-se de ter copiado o arquivo env.example para um novo arquivo chamado env.local.
Obs: A versão do Node utilizada atualmente é a 18.13.0.

## Para rodar o projeto:

```bash
npm run dev
```
ou
```bash
yarn dev
```
ou
```bash
pnpm dev
```

O projeto estará rodando na porta 3000 e pode ser acessado em [http://localhost:3000](http://localhost:3000).

## Utilização como template:

Para utilizar o projeto como template, basta executar o comando create para um projeto Next.js, utilizando a flag -e (example), seguida da URL do repositório template (https://github.com/planmkt/atlas-next-sample.git). Isso fará com que todas as configurações do template atual sejam copiadas para o novo projeto, evitando retrabalho.

**Exemplos do comando de create:**

```bash
npx create-next-app [nome-do-projeto] -e https://github.com/planmkt/atlas-next-sample.git
```
ou
```bash
yarn create next-app [nome-do-projeto] -e https://github.com/planmkt/atlas-next-sample.git
```
ou
```bash
pnpm create next-app [nome-do-projeto] -e https://github.com/planmkt/atlas-next-sample.git
```

## Documentação da framework:

Para mais informações sobre desenvolvimento e configuração de projetos em Next.js, consulte as principais documentações:

- [Sobre o React](https://react.dev/learn);
- [Documentação do React](https://react.dev/reference/react);
- [Sobre o next](https://nextjs.org/learn/foundations/about-nextjs);
- [Documentação do next.js](https://nextjs.org/docs);

## Bibliotecas já configuradas no template:

- [reduxjs/toolkit](https://redux-toolkit.js.org/) - Para o gerenciamento de estados;
- [redux-saga](https://redux-saga.js.org/) - Para o gerenciamento de requisições assíncronas;
- [axios](https://axios-http.com/ptbr/docs/intro) - Para as chamadas HTTP da API;
- [lucide-react](https://lucide.dev/) - Biblioteca de ícones que podem ser úteis no layout;
- [moment.js](https://momentjs.com/) - Para a manipulação e formatação de datas;
- [sass](https://sass-lang.com/) - Para a estilização;
- [react-form-hook](https://www.react-hook-form.com/) - Para o gerenciamento de formulários;
- [react-tostify](https://fkhadra.github.io/react-toastify/introduction) - Para a exibição de erros e exceções;
- [tailwindcss](https://tailwindcss.com/) - Para a estilização.

## Boas práticas:

- Os componentes serão desenvolvidos seguindo os conceitos do composition pattern;
- Caso esteja utilizando o vscode busque utilizar os plugins recomendados;
- Busque configurações de "format on save" com o eslint e editorconfig em sua IDE para manter o código organizado e evitar problemas com conflitos de merge;
- Evite a utilização do tipo "any" em suas implementações;
- Respeite a configuração de pastas e a organização do projeto, dando prioridade à criação de services e hooks personalizados (com exceção dos server components);
- Sempre busque modularizar a estilização, evitando classes globais, a menos que sejam estritamente necessárias.
- Tenha uma visão crítica sobre seu código, crie componentes sempre que necessário da melhor forma para que possam ser reaproveitados no futuro e sempre classifique o mesmo como sendo client side ou server side de acordo com sua função.
