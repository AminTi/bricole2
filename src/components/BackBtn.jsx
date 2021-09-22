import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import color from "../styles/color";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    background: color.green,
    margin: "2%",
  },
  icon: {
    color: color.white,
    fontWeight: "bold",
  },
}));

const BackBtn = () => {
  const classes = useStyles();
  const history = useHistory();

  const clickHandelr = (e) => {
    history.goBack();
  };
  return (
    <>
      <IconButton className={classes.root}>
        <ArrowBackIcon className={classes.icon} onClick={clickHandelr} />
      </IconButton>
    </>
  );
};

export default BackBtn;
