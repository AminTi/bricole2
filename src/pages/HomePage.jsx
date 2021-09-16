import React, { useContext, useEffect, useState } from "react";
import Container from "@material-ui/core/Container";
import { makeStyles } from "@material-ui/core/styles";
import color from "../styles/color";
import Grid from "@material-ui/core/Grid";
import Logo from "../components/Logo";
import Card from "../components/card";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import { UserContext } from "../context/UserContextProvider";
import SelectBoxBar from "../components/SelectBoxBar";
import ModalEmail from "../components/ModalEmail";
const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: "100vw",
    minHeight: "100vh",
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
  logoWrp: {
    display: "flex",
    justifyContent: "center",

    padding: "20px 0px",
    margin: "2%",
  },
  cardWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "5%",
    background: color.white,
  },
  wrp: {
    display: "flex",
    justifyContent: "center",
  },
}));
const HomePage = () => {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [ID, setID] = useState("");
  const { adsData, GetAds, getLocalStorg } = useContext(UserContext);

  useEffect(() => {
    GetAds();
  }, []);

  const filterData = adsData.filter((item) => {
    return item.city === getLocalStorg || item.profession === getLocalStorg;
  });

  const DataCheck = () => {
    if (filterData.length == 0) {
      return adsData;
    } else {
      return filterData;
    }
  };
  const clickHandler = (e) => {
    const id = e.currentTarget.getAttribute("data-del");
    setOpen(true);
    setID(ID);
  };

  return (
    <Container className={classes.container}>
      <Container className={classes.logoWrp}>
        <Logo large />
      </Container>
      <SelectBoxBar data={adsData} />
      <div className={classes.cardWrapper}>
        {adsData &&
          DataCheck().map((item, index) => {
            return (
              <Card
                key={index}
                photo={item.image}
                cuurentId={item.id}
                profession={item.profession}
                emailClickHandler={clickHandler}
                setOpen={setOpen}
                hide
              />
            );
          })}
      </div>
      <ModalEmail open={open} setOpen={setOpen} id={ID} />
    </Container>
  );
};

export default HomePage;
