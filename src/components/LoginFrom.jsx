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
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();
  const [open, setOpen] = useState(false);
  const userKit = new UserKit();
  const mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  const { check } = useContext(UserContext);

  const formClickHandler = async (e) => {
    e.preventDefault();
    if (!mailformat.test(email)) {
      setOpen(true);
    } else if (password.length < 5) {
      setOpen(true);
    } else {
      logincheck();
    }
  };

  const logincheck = () => {
    userKit.signIn(email, password);
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        history.push("/panelpage");
      }
    });
  };

  useEffect(() => {
    // logincheck();
  }, []);

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
        <Container className={classes.btn}>
          <Btn
            text={"Log in"}
            value="submit"
            type="submit"
            clickHandler={() => null}
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

export default LoginFrom;
