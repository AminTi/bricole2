import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";

import color from "../styles/color";
import { Box } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: color.white,
  },

  copyright: {
    fontSize: "14px",
    color: color.black,
    fontWeight: "bold",
    [theme.breakpoints.down("xs")]: {
      margin: "0 auto",
      paddingBottom: "10px",
    },
  },

  tlbr: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    [theme.breakpoints.down("xs")]: {
      display: "flex",
      flexDirection: "column-reverse",
    },
  },
}));

const BtmBar = ({ text }) => {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.tlbr}>
          <Typography color="inherit" className={classes.copyright}>
            &copy; {text}
          </Typography>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default BtmBar;
