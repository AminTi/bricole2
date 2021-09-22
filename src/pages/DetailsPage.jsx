import React, { useContext, useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import SingUpForm from "../components/SingUpForm";
import Wrapper from "../components/Wrapper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Logo from "../components/Logo";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";

import DetailPageCpmnt from "../components/DetailPageCpmnt";
import BookingsModal from "../components/BookingsModal";
import ModalEmail from "../components/ModalEmail";
import { useParams } from "react-router-dom";
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
const DetailsPage = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [ID, setID] = useState("");
  const { check, adsData, GetAds } = useContext(UserContext);

  const params = useParams();
  let id = params.slug;

  const data = adsData.filter((item) => {
    return item.docID == id;
  });

  useEffect(() => {
    GetAds();
  }, []);

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
          <Box className={classes.spacer1} />
          <Logo large />
          <Box className={classes.spacer2} />

          {data &&
            data.map((item) => {
              return (
                <DetailPageCpmnt
                  title={item.title}
                  profession={item.profession}
                  img={item.image}
                  description={item.description}
                  price={item.price}
                  setopen={setOpen}
                  setid={setID}
                  userId={item.id}
                  price={item.price}
                />
              );
            })}
          <ModalEmail open={open} setOpen={setOpen} id={ID} />
          <BookingsModal open={open} setOpen={setOpen} id={ID} />
        </Grid>
      </div>
    </>
  );
};

export default DetailsPage;
