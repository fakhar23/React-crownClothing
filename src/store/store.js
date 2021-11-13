import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import logger from "redux-logger";

import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  backlist: ["user"],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);
// filer(boolearn) removes false, returns [] for false
const middleWares = [process.env.NODE_ENV === "development" && logger].filter(
  Boolean
);

const composeEnhancer =
  (process.env.NODE_ENV !== "production" &&
    window.__REDUX_DEVTOOLS_EXTENSION__ &&
    window.__REDUX_DEVTOOLS_EXTENSION__()) ||
  compose;
const composedEnhancer = compose(applyMiddleware(...middleWares));
// replace rootReducer with persistedReducer
export const store = createStore(persistedReducer, undefined, composeEnhancer);

export const persistor = persistStore(store);
window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();
