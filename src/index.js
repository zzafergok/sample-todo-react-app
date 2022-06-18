import React from "react";
import ReactDOM from "react-dom/client";
import "./assets/style/index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import TodoContextProvider from "./contexts/TodoContext";

if (process.env.NODE_ENV === "development") {
  const { worker } = require("./mocks/browser");
  worker.start();
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <TodoContextProvider>
      <App />
    </TodoContextProvider>
  </React.StrictMode>
);

reportWebVitals();
