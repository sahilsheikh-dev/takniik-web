import React from "react";
import { ThemeProvider } from "react-bootstrap";
import ReactDOM from "react-dom/client";
import App from "./App";
import { lightTheme } from "./theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={lightTheme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);
