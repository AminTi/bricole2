import React, { useState, useContext, useEffect } from "react";
import Container from "@material-ui/core/Container";

import color from "../styles/color";
import { makeStyles } from "@material-ui/core/styles";
import InputField from "./InputField";
import Btn from "./Btn";
import Box from "@material-ui/core/Box";
import Snackbars from "./SnackBar";
import { useHistory } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";
import UserKit from "../data/UserKit";
import fire from "../config/fire";
import { useParams } from "react-router-dom";

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
      minWidth: "80%",
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

const Emails = (props) => {
  const classes = useStyles();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const userKit = new UserKit();
  const mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const { check, emails, getEmails } = useContext(UserContext);
  const params = useParams();
  let id = params.slug;

  const currentUserEmails = emails.filter((elm) => {
    return elm.emailId == id;
  });

  const formClickHandler = async (e) => {
    e.preventDefault();
  };

  console.log(currentUserEmails.length > 0 && currentUserEmails);

  useEffect(() => {
    getEmails();
  }, []);

  const SendEmails = () => {
    window.location = `mailto:${
      currentUserEmails.length > 0 && currentUserEmails[0].email
    }`;
  };

  return (
    <>
      <form className={classes.form} onSubmit={formClickHandler}>
        <InputField
          placeholder={"Epost"}
          type="email"
          value={currentUserEmails.length > 0 && currentUserEmails[0].email}
          disabled
        />
        <InputField
          placeholder={"Title"}
          type="text"
          value={currentUserEmails.length > 0 && currentUserEmails[0].title}
          disabled
        />
        <InputField
          placeholder={"Password"}
          type="text"
          value={currentUserEmails.length > 0 && currentUserEmails[0].message}
          disabled
          multiline
        />
        <Container className={classes.btn}>
          <Btn
            text={"Replay"}
            value="submit"
            type="submit"
            clickHandler={SendEmails}
          />
        </Container>
      </form>

      <Snackbars
        openBar={open}
        closeBar={setOpen}
        severity={"error"}
        text={"Please check email format, The password should 4 char long"}
      />

      <Box className={classes.spacer2} />
    </>
  );
};

export default Emails;
