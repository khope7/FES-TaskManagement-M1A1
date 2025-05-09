import ReactDOM from "react-dom/client";
import App from "./App";
import "./App.css"
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithNavigate from "./components/Auth0Provider";


// Sending App an Browser Router to run dev
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <BrowserRouter>
  <Auth0ProviderWithNavigate>
    <App />
  </Auth0ProviderWithNavigate>
</BrowserRouter>
);