import React from "react";
import ReactDOM from "react-dom";
import { ThemeProvider, CSSReset, ColorModeProvider } from "@chakra-ui/core";

import App from "./App";

import * as serviceWorker from "./serviceWorker";

const rootElement = document.getElementById("root");
ReactDOM.render(
  // <React.StrictMode>
    <ThemeProvider>
      <ColorModeProvider>
        <CSSReset />
        <App />
      </ColorModeProvider>
    </ThemeProvider>
    // </React.StrictMode>,
    ,
  rootElement
);

serviceWorker.register()
