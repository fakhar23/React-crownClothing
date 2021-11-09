import { createContext, useState, useEffect } from "react";
import {
  onAuthStateChangedListner,
  signOutUser,
  createUserDocumentFromAuth,
} from "../utils/firebase/firebase.utils";

export const userContext = createContext({
  currentUser: null,
  setCurrentUser: () => null,
});

export const UserProvider = ({ children }) => {
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
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };
  return <userContext.Provider value={value}>{children}</userContext.Provider>;
};
