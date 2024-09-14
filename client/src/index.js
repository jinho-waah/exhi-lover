import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const queryCient = new QueryClient({
  defaultOptions: {
    queries: {
      gcTime: 5 * 1000,
    },
  },
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <QueryClientProvider client={queryCient}>
      <App />
    </QueryClientProvider>
    {/* changed */}
  </BrowserRouter>
);
