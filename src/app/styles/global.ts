import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      /* outline: 0; */
      /* outline-color: green; */
    }

    #root, body, html {
      height: 100%;
    }

    body{}

    hr {
      border: none;
      height: 1px;
    }

    ul {
        list-style: none;
    }

    h1, h2, h3, h4, h5, h6{
      margin-block-start: 0;
      margin-block-end: 0;
      font-family: Ubuntu;
    }

    legend{
      padding-inline-start: 0;
      padding-inline-end: 0;
    }

    button {
      cursor: pointer;
    }

    fieldset{
      border-width: 0px;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      padding-block-end: 0px;
      padding-block-start: 0px;
      padding-inline-end: 0px;
      padding-inline-start: 0px;
      border-style: none;
      border-color: unset;
      border-image: none;
    }
`;