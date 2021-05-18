import React from "react";
import ReactDOM from "react-dom";
import { createGlobalStyle } from "styled-components";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

import App from "./App";

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
   font-family: 'Lexend Deca', sans-serif;
    font-weight: 400;
    margin: 0;
    padding: 0;
    text-decoration: none;
    
  }`;

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
