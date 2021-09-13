import React, { createContext, useState, useEffect } from "react";
import fire from "../config/fire";
import { useHistory } from "react-router";

export const UserContext = createContext({});

const UserContenxtProvider = ({ children }) => {
  const [check, setCheck] = useState("");
  const [profilData, setProfilData] = useState("");
  const [adsData, setAdsData] = useState([]);
  const [getLocalStorg, setGetLocalStorage] = useState([]);

  let arr = ["titi"];
  let adsArr = [];

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

  const GetAds = async () => {
    await fire
      .firestore()
      .collection("advertising")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc, key) => {
          // doc.data() is never undefined for query doc snapshots => Notice
          let payload = {
            title: doc.data().title,
            profession: doc.data().profession,
            image: doc.data().image,
            description: doc.data().description,
            price: doc.data().price,
            id: doc.data().id,
            city: doc.data().city,
            docID: doc.id,
          };

          adsArr.push({ ...payload });
        });
        setAdsData(adsArr);
      });
  };

  return (
    <UserContext.Provider
      value={{
        check,
        profilData,
        adsData,
        getLocalStorg,
        setGetLocalStorage,
        getCollection,
        GetAds,
        arr,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContenxtProvider;
