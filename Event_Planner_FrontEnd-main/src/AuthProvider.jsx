import React from "react";
import { auth } from "./Firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";
import { useContext, createContext, useEffect, useState } from "react";

const AuthContext = createContext();

export function useAuth() {
  return useContext(AuthContext);
}

const AuthProvider = ({ children }) => {
  const [curruser, setCurruser] = useState();
  const signup = (email, pass) => {
    return createUserWithEmailAndPassword(auth, email, pass);
  };

  const signin = (email, pass) => {
    return signInWithEmailAndPassword(auth, email, pass);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const sub = onAuthStateChanged(auth, (user) => {
      setCurruser(user);
      //console.log(user);
    });

    return sub;
  }, []);

  const value = { curruser, signup, signin, logout };
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;