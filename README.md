<div align="center" >
  <img
    alt="swr"
    title="swr"
    src=".github/swr-logo.png"
    height="110px"
    />
  <img
    alt="react"
    title="react"
    src=".github/react-logo.png"
    width="180px" />
</div>
&nbsp;

<h1> SWR - POC</h1>

<p align="left">
   <a href="https://github.com/danieljpgo">
      <img
        alt="author"
        src="https://img.shields.io/badge/author-danieljpgo-a1a1a1?style=flat&labelColor=000000"
      />
   </a>
   <img
      alt="languages"
      src="https://img.shields.io/github/languages/count/danieljpgo/swr-poc?color=a1a1a1&style=flat&labelColor=000000"
   />
   <a href="https://github.com/danieljpgo/swr-poc/graphs/contributors">
      <img
        alt="contributors"
        src="https://img.shields.io/github/stars/danieljpgo/swr-poc?color=a1a1a1&style=flat&labelColor=000000"/>
   </a>
    <a href="https://github.com/danieljpgo/swr-poc/network/members">
      <img
         alt="forks"
         src="https://img.shields.io/github/forks/danieljpgo/swr-poc?color=a1a1a1&style=flat&labelColor=000000"/>
   </a>
     <img alt="License" src="https://img.shields.io/badge/license-MIT-a1a1a1?style=flat&labelColor=000000">
</p>

> A proof of concept of the <a href="https://vercel.com/">Vercel's</a> HTTP cache invalidation strategy <a href="https://swr.vercel.app/">SWR</a> library. :clipboard:

&nbsp;

<div align="center">
   <a href="#project">Project</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#features">Features</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#technologies">Technologies</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#getting-started">Getting Started</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
   <a href="#license">License</a>
</div>
<div align="center">
   <img
      alt="SWR useFetch Hook"
      title="SWR useFetch Hook"
      width="870px"
      src=".github/code.png"
   />
   <div>
      <b>useFetch Hook</b>, responsible for the <s>magic</s>.
   </div>
</div>

&nbsp;

## Project

The idea of ​​this project, was to test a data fetch solution, which used cache strategies to solve data persistence and state management, however, SWR delivers much more functionality, ~~which is incredible~~.

## Features

The following hook was implemented to create an abstraction of the **useSWR** hook:

- **useFetch Hook**

Main use cases for the library are listed below:

- **Revalidate on focus.**
<div align="center">
   <img
      alt="exemple 1"
      title="exemple 1"
      width="770px"
      src=".github/retry.gif"
   />
</div>
&nbsp;

- **Persisting request data using cache strategies.**
<div align="center">
   <img
      alt="exemple 2"
      title="exemple 2"
      width="770px"
      src=".github/persist.gif"
   />
</div>
&nbsp;

- **Editing the local route cache and related routes cache.**
<div align="center">
   <img
      alt="exemple 3"
      title="exemple 3"
      width="770px"
      src=".github/edit-persist.gif"
   />
</div>
&nbsp;

- **Adding data to local cache and on related route.**
<div align="center">
   <img
      alt="exemple 4"
      title="exemple 4"
      width="770px"
      src=".github/create.gif"
   />
</div>

## Technologies

The main technologies used to develop the project were:

- [React](https://reactjs.org/)
- [SWR](https://swr.vercel.app/)
- [JSON Server](https://github.com/typicode/json-server)
<!-- - [Styled Component](https://styled-components.com/) -->
- [Typescript](https://www.typescriptlang.org/)

This project was bootstrapped with:

- [create-react-app](https://github.com/facebook/create-react-app)

## Getting Started

First of all, you may clone this project:

```
git clone https://github.com/danieljpgo/swr-poc.git
```

Run the following scripts in order to execute the application:

```
// install dependencies
yarn install

// start the server
yarn server

// start the application
yarn start
```

## License

This project is under the [MIT license](https://github.com/danieljpgo/swr-poc/blob/master/LICENSE).

<div>Released in 2020.</div>

Make with ❤️ by [Daniel Jorge](https://github.com/danieljpgo)

<!-- TODO -->
<!-- [] testes para validar todas as funcionalidades para cada aplicação futura -->
<!-- [] atualizar react router dom -->
<!-- toaster global para ações de sucesso e falha -->
<!-- corrigir nomes -->
