import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import color from "../styles/color";
import { UserContext } from "../context/UserContextProvider";
import SelectBox from "./SelectBox";
import UserKit from "../data/UserKit";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  appBar: {
    // display: "flex",
    // alignItems: "center",
    // background: color.white,
    // flexDirection: "row",
    // justifyContent: "space-around",
    width: "70%",
    margin: "0 auto",
  },

  tlbr: {
    display: "flex",
    justifyContent: "center",

    // alignItems: "center",
    background: color.white,
    flexDirection: "row",
    [theme.breakpoints.down("sm")]: {
      display: "flex",
      flexDirection: "column",
    },

    // padding: "0px 30px",
  },
}));

const SelectBoxBar = ({ data }) => {
  const classes = useStyles();
  const { check } = useContext(UserContext);

  return (
    <AppBar position="static" className={classes.appBar}>
      <Toolbar className={classes.tlbr}>
        <SelectBox data={data} />
      </Toolbar>
    </AppBar>
  );
};

export default SelectBoxBar;
