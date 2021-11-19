import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./Mainpage";
import "../styles/globals.css";
import type { AppProps } from "next/app";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    border: none;
    outline: none;
    list-style: none;
    text-decoration: none;
    font-family: sans-serif, "Segoe UI", "Roboto", "Oxygen", "Ubuntu", "Cantarell",
    "Fira Sans", "Droid Sans", "Helvetica Neue";
  }
  body {
    background: #04080F;
    height: 100%;
    overflow: auto;
  }
  html {
    overflow: auto;
  }
  button {
    border: none;
    background: none;
    color: white;
  }
`;

function MyApp({ Component, pageProps }: AppProps) {
	// return <Component {...pageProps} />
	<Router>
		<GlobalStyle />

		<Routes>
			<Route exact path="/" component={Mainpage} />
		</Routes>
	</Router>;
}

export default MyApp;
