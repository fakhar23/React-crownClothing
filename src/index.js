import React from "react";
import { render } from "react-dom";

import { Provider } from "react-redux";

import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { store, persistor } from "./store/store";

import { PersistGate } from "redux-persist/integration/react";

import "./index.scss";

const rootElement = document.getElementById("root");

render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  rootElement
);
