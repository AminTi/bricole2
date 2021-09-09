import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import BtmBar from "./BtmBar";
import NavBar from "./NavBar";
import Container from "@material-ui/core/Container";
import color from "../styles/color";

const useStyles = makeStyles({
  root: {
    minWidth: "100vw",
    minheiHeight: "100vh",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar text={"CodeGen"} />
      {children}
      <BtmBar text={"React & Contentful Headless CMS"} />
    </div>
  );
};

export default Layout;
