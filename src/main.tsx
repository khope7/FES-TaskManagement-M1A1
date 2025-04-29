import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from "./components/AUth0Provider";
import React from "react";
import { TaskProvider } from "./context/TasksContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <TaskProvider>
    <BrowserRouter>
      <Auth0ProviderWithNavigate>
        <App />
      </Auth0ProviderWithNavigate>
    </BrowserRouter>
  </TaskProvider>
);