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
  note: { color: color.green },
}));

const Logo = () => {
  const classes = useStyles();
  return (
    <>
      <Typography className={classes.root}>
        Br <span className={classes.note}>I</span>cole
      </Typography>
    </>
  );
};

export default Logo;
