import React, { createContext, useState, useEffect } from "react";
import fire from "../config/fire";
import { useHistory } from "react-router";

export const UserContext = createContext({});

const UserContenxtProvider = ({ children }) => {
  const [user, setUser] = useState("");

  const authListnner = () => {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(user);
      }
    });
  };

  useEffect(() => {
    authListnner();
  }, []);

  return <UserContext.Provider value={user}>{children}</UserContext.Provider>;
};

export default UserContenxtProvider;
