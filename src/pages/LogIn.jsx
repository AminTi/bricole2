import React from "react";
import Container from "@material-ui/core/Container";
import LoginFrom from "../components/LoginFrom";
import Wrapper from "../components/Wrapper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Logo from "../components/Logo";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import BackBtn from "../components/BackBtn";

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
  spacer1: {
    marginTop: "10%",
  },
  spacer2: {
    marginTop: "5%",
  },
  Link: {
    padding: "5px 5px",
    textDecoration: "none",
    outline: "none",
  },
}));
const LogIn = () => {
  const classes = useStyles();
  return (
    <>
      <BackBtn />
      <div className={classes.container}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box className={classes.spacer1} />
          <Logo large />
          <Box className={classes.spacer2} />
          <Link to="/signuppage" className={classes.Link}>
            Create your Account
          </Link>
          <LoginFrom />
        </Grid>
      </div>
    </>
  );
};

export default LogIn;
