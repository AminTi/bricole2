import React from "react";
import { Link } from "react-router-dom";
import color from "../styles/color";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  link: {
    color: color.white,
    textDecoration: "none",
    fontWeight: "bold",
    padding: "0px 10px",
  },
}));

const Links = ({ text, to }) => {
  const classes = useStyles();
  return (
    <>
      <Link to={to} className={classes.link}>
        {text}
      </Link>
    </>
  );
};

export default Links;
