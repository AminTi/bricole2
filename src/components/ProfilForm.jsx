import React, { useState, useContext, useEffect } from "react";

import Container from "@material-ui/core/Container";
import color from "../styles/color";
import { makeStyles } from "@material-ui/core/styles";
import InputField from "./InputField";
import Btn from "./Btn";
import Box from "@material-ui/core/Box";
import Snackbars from "./SnackBar";
import UserKit from "../data/UserKit";

import fire from "../config/fire";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";

const useStyles = makeStyles((theme) => ({
  spacer: {
    margin: "5%",
  },
  spacer2: {
    margin: "8%",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    minWidth: "50%",
    [theme.breakpoints.down("sm")]: {
      minWidth: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "100%",
    },
  },
  btn: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "5%",
  },
  snack: {
    display: "flex",
    flexDirection: "column",
    marginLeft: "auto",
  },
}));

const ProfilForm = ({ values }) => {
  const classes = useStyles();
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState(null);

  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const [company, setCompany] = useState(null);
  const [open, setOpen] = useState(false);

  const mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const userKit = new UserKit();
  const history = useHistory();
  const { check, profilData, getCollection } = useContext(UserContext);

  const formClickHandler = (e) => {
    e.preventDefault();
    if (values) {
      history.push("/profilpage");
    } else if (!mailformat.test(email)) {
      setOpen(true);
    } else if (city.length < 1) {
      setOpen(true);
    } else if (adress.length < 1) {
      setOpen(true);
    } else if (firstName.length < 1) {
      setOpen(true);
    } else if (lastName.length < 1) {
      setOpen(true);
    } else {
      collection();
    }
    setEmail("");
    setAdress("");
    setCity("");
    setFirstName("");
    setLastName("");
  };

  useEffect(() => {
    if (check) {
      values && getCollection("users", check.uid);
    }
  }, []);

  const collection = () => {
    let payload = {
      firstname: firstName,
      lastname: lastName,
      email: email,
      company: company,
      adress: adress,
      city: city,
      id: check.uid,
    };
    let uid = check.uid;
    userKit.CreateCollection("users", uid, payload);
    payload && history.push("/panelpage");
  };

  return (
    <>
      <form className={classes.form} onSubmit={formClickHandler}>
        <InputField
          value={
            values ? profilData && profilData.payload.firstname : firstName
          }
          placeholder={"First Name"}
          onChange={(e) => setFirstName(e.target.value)}
          type="text"
          name={"firstName"}
        />
        <InputField
          placeholder={"Last Name"}
          onChange={(e) => setLastName(e.target.value)}
          type="text"
          value={values ? profilData && profilData.payload.lastname : lastName}
        />
        <InputField
          placeholder={"Example@example.se"}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          value={values ? profilData && profilData.payload.email : email}
        />
        <InputField
          placeholder={"Company"}
          onChange={(e) => setCompany(e.target.value)}
          type="text"
          value={values ? profilData && profilData.payload.company : company}
        />
        <InputField
          placeholder={"Adress"}
          onChange={(e) => setAdress(e.target.value)}
          type="text"
          value={values ? profilData && profilData.payload.adress : adress}
        />
        <InputField
          placeholder={"City"}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          value={values ? profilData && profilData.payload.city : city}
        />
        <Container className={classes.btn}>
          <Btn
            text={values ? "update" : "Submit"}
            value="Submit"
            type="submit"
            clickHandler={() => null}
          />
        </Container>
      </form>

      <Snackbars
        openBar={open}
        closeBar={setOpen}
        severity={"error"}
        text={"Please check email format, all field are required"}
      />

      <Box className={classes.spacer2} />
    </>
  );
};

export default ProfilForm;
