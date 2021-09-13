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
    display: "block",
    [theme.breakpoints.up("sm")]: {
      display: "block",
    },
  },

  size: {
    color: color.white,
    background: color.green,
  },
}));

const Btn = ({ text, clickHandler, admin, type, value, path, size }) => {
  const classes = useStyles();
  const history = useHistory();

  return (
    <>
      <Button
        variant="contained"
        className={
          admin
            ? `${classes.admin}`
            : size
            ? `${classes.size}`
            : `${classes.btn}`
        }
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
