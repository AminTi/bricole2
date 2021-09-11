import React from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Logo from "../components/Logo";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";

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
const HomePage = () => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Grid
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
      >
        test
      </Grid>
    </div>
  );
};

export default HomePage;
