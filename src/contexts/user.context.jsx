import { createContext, useState, useEffect, useReducer } from "react";
import {
  onAuthStateChangedListner,
  signOutUser,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

import { CreateAction } from "../utils/reducer/reducer.util";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const USER_ACTION_TYPES = {
  SET_CURRENT_USER: "SET_CURRENT_USER",
};
const userReducer = (state, action) => {
  console.log("userReducer");
  const { type, payload } = action;

  switch (type) {
    case USER_ACTION_TYPES.SET_CURRENT_USER:
      return {
        ...state,
        currentUser: payload,
      };
    default:
      throw new Error(`Unhandled type ${type} in userReducer`);
  }
};

const INITIAL_STATE = {
  currentUser: null,
};

export const UserProvider = ({ children }) => {
  const [state, dispatch] = useReducer(userReducer, INITIAL_STATE);
  // console.log(currentUser);

  const { currentUser } = state;
  const setCurrentUser = (user) => {
    dispatch(CreateAction(USER_ACTION_TYPES.SET_CURRENT_USER, user));
  };
  // signOutUser();
  useEffect(() => {
    const unsubsribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      setCurrentUser(user);

      console.log(user);
    });
    return unsubsribe;
  }, []);
  // const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
