import React, { createContext, useState, useEffect } from "react";
import fire from "../config/fire";
import { useHistory } from "react-router";

export const UserContext = createContext({});

const UserContenxtProvider = ({ children }) => {
  const [check, setCheck] = useState("");
  const [amin, setamin] = useState("amin");

  const authListnner = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setCheck(user);
      } else {
        setCheck(user);
      }
    });
  };

  useEffect(() => {
    authListnner();
  }, []);

  return (
    <UserContext.Provider value={{ check, amin }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContenxtProvider;
