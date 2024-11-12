import React from "react";
import ReactDOMServer from "react-dom/server";
import "./App";
import { Router } from "wouter";
import ServerRoutes from "./utils/router/Router";

export function render({ path }: { path: string }) {
  const html = ReactDOMServer.renderToString(
    <React.StrictMode>
      <Router ssrPath={`/${path}`}>
        <ServerRoutes />
      </Router>
    </React.StrictMode>,
  );
  return { html };
}
