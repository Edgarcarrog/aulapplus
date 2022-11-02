import App from "./App";
import "./styles/index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(
  <Provider store={store}>
    <App tab="home" />
  </Provider>
);
