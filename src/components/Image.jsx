import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Height } from "@material-ui/icons";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    height: "100%",
    minWidth: "100%",
    minHeight: "100%",
  },
  img: {
    width: "100%",
    height: "100%",
    minWidth: "100%",
    minHeight: "100%",
  },
}));
const Image = ({ img }) => {
  const classes = useStyles();
  return (
    <div>
      <div className={classes.root}>
        <img src={img} alt="text" className={classes.img} />
      </div>
    </div>
  );
};

export default Image;
