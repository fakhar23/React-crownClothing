import React from "react";
import { render } from "react-dom";
import "./index.scss";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { UserProvider } from "./contexts/user.context";
import { CategoriesContext } from "./contexts/categories.context";
import { Categoriesprovider } from "./contexts/categories.context";
import { CartProvider } from "./contexts/cart.context";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <BrowserRouter>
      <UserProvider>
        <Categoriesprovider>
          <CartProvider>
            <App />
          </CartProvider>
        </Categoriesprovider>
      </UserProvider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement
);
