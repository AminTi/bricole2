import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import color from "../styles/color";
import BtmBar from "./BtmBar";
import NavBar from "./NavBar";

const useStyles = makeStyles({
  root: {
    minWidth: "100vw",
    minHeight: "100vh",
  },
});

const Layout = ({ children }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <NavBar text={"CodeGen"} />
      {children}
      <BtmBar text={"React Firebase & Materail-UI by Amin Titi"} />
    </div>
  );
};

export default Layout;
