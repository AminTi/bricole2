import React from "react";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import color from "../styles/color";

const useStyles = makeStyles((theme) => ({
  root: {
    color: color.black,
    fontWeight: "bolder",
    fontSize: "23px",
  },
  note: { color: color.red },

  newroot: {
    color: color.black,
    fontWeight: "bolder",
    fontSize: "50px",
    padding: "100px 0px",
  },

  log: {
    color: color.black,
    fontWeight: "bolder",
    fontSize: "23px",
    marginBottom: "5%",
    margin: "0 auto",
  },
}));

const Logo = ({ large, log }) => {
  const classes = useStyles();

  let chng = large ? "newroot" : "root";
  return (
    <>
      <Typography
        className={large ? classes.newroot : log ? classes.log : classes.root}
      >
        <span className={classes.note}>Quick</span>Fix
      </Typography>
    </>
  );
};

export default Logo;
