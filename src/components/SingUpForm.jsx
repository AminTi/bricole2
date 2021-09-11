import React, { useState, useContext } from "react";

import Container from "@material-ui/core/Container";
import color from "../styles/color";
import { makeStyles } from "@material-ui/core/styles";
import InputField from "./InputField";
import Btn from "./Btn";
import Box from "@material-ui/core/Box";
import Snackbars from "./SnackBar";
import UserKit from "../data/UserKit";
import { useHistory } from "react-router-dom";
import fire from "../config/fire";
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

const LoginFrom = () => {
  const classes = useStyles();
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState("");
  const [passwordConfim, setpasswordConfim] = useState("");

  const [open, setOpen] = useState(false);
  const [passwordCheck, setPasswordCheck] = useState(false);
  const mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const userKit = new UserKit();
  const history = useHistory();
  const { check } = useContext(UserContext);

  const formClickHandler = (e) => {
    e.preventDefault();
    if (!mailformat.test(email)) {
      setOpen(true);
    } else if (password != passwordConfim) {
      setPasswordCheck(true);
    } else {
      authListner();
    }
    setEmail("");
    setPassword("");
    setpasswordConfim("");
  };

  const authListner = () => {
    userKit.signUp(email, password);
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push("/profilpage");
      }
    });
  };

  return (
    <>
      <form className={classes.form} onSubmit={formClickHandler}>
        <InputField
          placeholder={"Epost"}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          value={email}
        />
        <InputField
          placeholder={"Password"}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          value={password}
        />
        <InputField
          placeholder={"Password"}
          onChange={(e) => setpasswordConfim(e.target.value)}
          type="password"
          value={passwordConfim}
        />
        <Container className={classes.btn}>
          <Btn
            text={"Sign up"}
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
        text={
          "Please check email format, The password should contain 4 char long"
        }
      />
      <Snackbars
        openBar={passwordCheck}
        closeBar={setPasswordCheck}
        severity={"error"}
        text={"The Passwords do not match"}
      />

      <Box className={classes.spacer2} />
    </>
  );
};

export default LoginFrom;
