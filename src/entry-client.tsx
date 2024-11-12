import React from "react";
import ReactDOM from "react-dom/client";
import "./App.css";
import ServerRoutes from "./utils/router/Router";
import { Router } from "wouter";

ReactDOM.hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <React.StrictMode>
    <Router>
      <ServerRoutes />
    </Router>
  </React.StrictMode>,
);
