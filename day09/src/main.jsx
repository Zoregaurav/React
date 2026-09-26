import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import Cart from "./cart.jsx";

// console.log(<h1>Hello Coder Army</h1>);

// const element = document.createElement("h1");

// element.textContent = "Hello Coder Army";

// console.dir(element);

createRoot(document.getElementById("root")).render(
  <>
    <App />
    <Cart />
  </>,
);
