import React, { useContext, useEffect } from "react";
import LoginFrom from "../components/LoginFrom";
import Wrapper from "../components/Wrapper";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Logo from "../components/Logo";
import { Box } from "@material-ui/core";
import { Link } from "react-router-dom";
import Modal from "../components/Modal";
import { Container, Fab } from "@material-ui/core";
import AddCircleIcon from "@material-ui/icons/AddCircle";
import color from "../styles/color";
import { UserContext } from "../context/UserContextProvider";
import Card from "../components/card";

const useStyles = makeStyles((theme) => ({
  container: {
    minWidth: "100vw",
    minHeight: "100vh",
    // display: "flex",
    // flexDirection: "column",
    // justifyContent: "center",
    background: color.white,
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
  wrp: {
    margin: "0 auto",
  },
  fab: {
    background: color.red,
  },
  cirkelIcon: {
    color: color.white,
  },

  containerFab: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 10px",
  },
  cardWrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "5%",
    background: color.white,
  },
}));
const PanelPage = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const { check, adsData, GetAds, arr } = useContext(UserContext);

  const clickHandler = () => {
    setOpen(true);
  };

  useEffect(() => {
    GetAds();
  }, []);

  const filterData = adsData.filter((item) => {
    return item.id == check.uid;
  });

  console.log(filterData);
  return (
    <div className={classes.container}>
      <Container className={classes.containerFab}>
        <Fab type="button" onClick={clickHandler} className={classes.fab}>
          <AddCircleIcon className={classes.cirkelIcon}></AddCircleIcon>
        </Fab>
      </Container>
      <div className={classes.cardWrapper}>
        {filterData &&
          filterData.map((item, index) => {
            return (
              <Card
                key={index}
                photo={item.image}
                profession={item.profession}
                id={item.docID}
                show
              />
            );
          })}
      </div>
      <Modal open={open} setOpen={setOpen} />
    </div>
  );
};

export default PanelPage;
