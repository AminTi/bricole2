import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Height } from "@material-ui/icons";
import Image from "./Image";
import Container from "@material-ui/core/Container";
import color from "../styles/color";
import Paper from "@material-ui/core/Paper";
import { Box } from "@material-ui/core";
import Btn from "./Btn";
import { useHistory } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    background: color.white,
    marginBottom: "5%",
  },
  headerBox: {
    display: "flex",
    flexDirection: "row",
    // gap: "1%",

    padding: "5px 5px",
  },
  btn: {
    display: "flex",
    flexDirection: "row",
    gap: "1%",
    padding: "10px 5px",
  },
  papper: {
    padding: "10px 10px",
    margin: "1%",
  },
}));

const DetailPageCpmnt = ({ img, setopen, setid, userId, price }) => {
  const classes = useStyles();
  const history = useHistory();

  const emailClickHandler = (e) => {
    setopen(true);
  };

  const bookingClickHandler = (e) => {
    userId && setid(userId);
    console.log(userId);
    history.push(`/reservationpage/${userId}/${price}`);
  };

  userId && setid(userId);
  return (
    <Container maxWidth="sm" className={classes.root}>
      <Image img={img} />
      <Box className={classes.headerBox}>
        <Paper elevation={3} className={classes.papper}>
          Amin
        </Paper>
        <Paper elevation={3} className={classes.papper}>
          {" "}
          Titi
        </Paper>
      </Box>
      <Paper elevation={3} className={classes.papper}>
        Nawal
      </Paper>
      <Paper elevation={3} className={classes.papper}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolorem,
        praesentium! Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        Dolorem, praesentium! Lorem ipsum dolor sit amet consectetur,
        adipisicing elit. Dolorem, praesentium!
      </Paper>
      <Box className={classes.btn}>
        <div>
          <Btn text={"Reserve"} hide size clickHandler={bookingClickHandler} />{" "}
          <Btn text={"Contact"} size clickHandler={emailClickHandler} />
        </div>
      </Box>
    </Container>
  );
};

export default DetailPageCpmnt;
