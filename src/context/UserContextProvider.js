import React, { createContext, useState, useEffect } from "react";
import fire from "../config/fire";
import { useHistory } from "react-router";

export const UserContext = createContext({});

const UserContenxtProvider = ({ children }) => {
  const [check, setCheck] = useState("");
  const [profilData, setProfilData] = useState("");
  const [adsData, setAdsData] = useState([]);
  const [getLocalStorg, setGetLocalStorage] = useState([]);
  const [emails, setGetEmails] = useState([]);
  const [bookings, setGetBooking] = useState([]);

  let arr = [];
  let adsArr = [];
  let emailsData = [];
  let bookingsData = [];

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

  const getEmails = async () => {
    await fire
      .firestore()
      .collection("emails")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc, key) => {
          let payload = {
            emailId: doc.id,
            title: doc.data().title,
            email: doc.data().email,
            userid: doc.data().id,
            message: doc.data().message,
          };
          emailsData.push({ ...payload });
        });
        setGetEmails(emailsData);
      });
  };

  const getBookings = async () => {
    await fire
      .firestore()
      .collection("bookings")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc, key) => {
          let payload = {
            id: doc.id,
            name: doc.data().name,
            total: doc.data().total,
            email: doc.data().email,
            userid: doc.data().id,
            mobile: doc.data().mobile,
            time: doc.data().time,
            date: doc.data().date,
            adress: doc.data().adress,
            city: doc.data().city,
            uid: doc.data().uid,
          };
          bookingsData.push({ ...payload });
        });
        setGetBooking(bookingsData);
      });
  };
  return (
    <UserContext.Provider
      value={{
        check,
        profilData,
        adsData,
        getLocalStorg,
        emails,
        arr,
        bookings,
        getEmails,
        setGetLocalStorage,
        getCollection,
        GetAds,
        getBookings,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserContenxtProvider;
