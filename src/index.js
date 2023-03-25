import React,{StrictMode} from "react";
import {createRoot} from "react-dom/client";
import App from "./app";
const rootElement = document.querySelector("#root");
const reactRoot = createRoot(rootElement);
reactRoot.render(
    <StrictMode>
      <App/>
    </StrictMode>
)