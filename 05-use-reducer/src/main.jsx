import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BierProvider } from "./BierProvider";
import { DataProvider } from "./DataProvider";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <DataProvider>
    <App />
  </DataProvider>
);
