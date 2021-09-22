import React, { useContext } from "react";
import Container from "@material-ui/core/Container";
import SingUpForm from "../components/SingUpForm";
import Wrapper from "../components/Wrapper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Logo from "../components/Logo";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Reserve from "../components/Resrve";
import { UserContext } from "../context/UserContextProvider";
import BookingsModal from "../components/BookingsModal";
import BackBtn from "../components/BackBtn";

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: "100vw",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
  },
  spacer1: {
    marginTop: "10%",
  },
  spacer2: {
    marginTop: "5%",
  },
  Link: {
    padding: "5px 5px",
    textDecoration: "none",
    outline: "none",
  },
}));
const ReservationPage = () => {
  const classes = useStyles();
  const { check } = useContext(UserContext);
  const [open, setOpen] = React.useState(false);
  const [data, setData] = React.useState();

  console.log("NEW", data);
  return (
    <>
      <BackBtn />
      <div className={classes.container}>
        <Grid
          container
          direction="column"
          justifyContent="center"
          alignItems="center"
        >
          <Box className={classes.spacer2} />
          <Logo large />
          <Box className={classes.spacer2} />
          <Reserve open={open} setOpen={setOpen} setData={setData} />
          <Box className={classes.spacer2} />

          <BookingsModal open={open} setOpen={setOpen} data={data} />
        </Grid>
      </div>
    </>
  );
};

export default ReservationPage;
