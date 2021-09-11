import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import color from "../styles/color";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  btn: {
    background: color.red,
    color: color.white,
    padding: "20px 60px",
    fontWeight: "bold",
    borderRadius: "10px",
  },

  admin: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },
}));

const Btn = ({ text, clickHandler, admin, type, value, path }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Button
        variant="contained"
        className={admin ? `${classes.admin}` : `${classes.btn}`}
        onClick={clickHandler}
        type={type}
        value={value}
      >
        {text}
      </Button>
    </>
  );
};

export default Btn;
