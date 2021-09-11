import React, { createContext, useState, useEffect } from "react";
import fire from "../config/fire";
import { useHistory } from "react-router";

export const UserContext = createContext({});

const UserContenxtProvider = ({ children }) => {
  const [check, setCheck] = useState("");
  const [profilData, setProfilData] = useState("");

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

  const getCollection = async (collection, userId) => {
    await fire
      .firestore()
      .collection(collection)
      .doc(userId)
      .get()
      .then((doc) => {
        setProfilData(doc.data());
      });
  };

  const tester = async (data) => {
    const file = data.image[0];
    const storagRef = fire.storage().ref();
    const fileRef = storagRef.child(data.image[0].name);
    await fileRef.put(data.image[0]);
    const fileUrl = await fileRef.getDownloadURL();

    const payload = {
      avatar: fileUrl,
    };

    await fire.firestore().collection("advertising").add({ payload });
  };

  return (
    <UserContext.Provider value={{ check, profilData, getCollection, tester }}>
      {children}
    </UserContext.Provider>
  );
};

export default UserContenxtProvider;
