import React from "react";
import Container from "@material-ui/core/Container";
import LoginFrom from "../components/LoginFrom";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100vw",
    minheight: "100vh",
  },
}));
const Wrapper = () => {
  const classes = useStyles();
  return <Container maxWidth="xl" className={classes.root}></Container>;
};

export default Wrapper;
