import React, { useContext, useEffect } from "react";
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
  const { adsData, GetAds, getLocalStorg } = useContext(UserContext);

  useEffect(() => {
    GetAds();
  }, []);

  const filterData = adsData.filter((item) => {
    return item.city === getLocalStorg || item.profession === getLocalStorg;
  });

  console.log(filterData);

  const DatCheck = () => {
    if (filterData.length == 0) {
      return adsData;
    } else {
      return filterData;
    }
  };

  return (
    <Container className={classes.container}>
      <Container className={classes.logoWrp}>
        <Logo large />
      </Container>
      <SelectBoxBar data={adsData} />
      <div className={classes.cardWrapper}>
        {adsData &&
          DatCheck().map((item, index) => {
            return (
              <Card
                key={index}
                photo={item.image}
                profession={item.profession}
                hide
              />
            );
          })}
      </div>
    </Container>
  );
};

export default HomePage;
