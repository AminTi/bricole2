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
    fontSize: "34px",
  },
}));

const Logo = ({ large }) => {
  const classes = useStyles();

  let chng = large ? "newroot" : "root";
  return (
    <>
      <Typography className={large ? classes.newroot : classes.root}>
        <span className={classes.note}>Notre</span>Quotidien
      </Typography>
    </>
  );
};

export default Logo;
