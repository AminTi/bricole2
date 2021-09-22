import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import color from "../styles/color";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EmailIcon from "@material-ui/icons/Email";
import DetailsIcon from "@material-ui/icons/Details";
import Btn from "./Btn";
import Box from "@material-ui/core/Box";
import UserKit from "../data/UserKit";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    margin: "1%",
    borderRadius: "10px",
    // "&:hover": {
    //   opacity: "0.4",
    // },
    // [theme.breakpoints.down("sm")]: {
    //   margin: "2%",
    // },
  },
  media: {
    height: 200,
    width: "100%",
  },

  text: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    background: color.lightRed,
    [theme.breakpoints.down("xs")]: {},
  },
  // box: {
  //   display: "flex",
  //   flexDirection: "row",
  //   justifyContent: "space-between",
  //   width: "100%",
  // },

  Typography: {
    color: color.white,
  },
  atag: {
    textDecoration: "none",
    color: color.white,
    fontWeight: "bold",
  },
  cardHeader: {
    background: color.lightRed,
  },
  delete: {
    color: "red",
  },
  details: {
    color: color.green,
  },
  hide: {
    display: "none",
  },
  Reservation: {
    background: color.red,
    color: color.white,
  },
  show: {
    display: "none",
  },
  email: {
    color: "blue",
  },
}));

export default function RecipeReviewCard({
  photo,
  key,
  text,
  url,
  profession,
  hide,
  show,
  id,
  emailClickHandler,
  setid,
  userId,
  price,
  docId,
}) {
  const classes = useStyles();
  const userKit = new UserKit();
  const history = useHistory();

  const detailsClickHandel = (e) => {
    const id = e.currentTarget.getAttribute("data-det");
    if (id) {
      history.push(`/detailspage/${id}`);
    }
  };

  const DeleteHandler = async (e) => {
    const id = e.currentTarget.getAttribute("data-del");
    if (id) {
      userKit.deleteData(id, "advertising");
    }
  };

  const clickHandler = () => {
    userId && history.push(`/reservationpage/${userId}/${price}`);
  };

  userId && setid(userId);
  return (
    <>
      <Card className={classes.root} key={key}>
        <CardHeader
          title={profession}
          subheader={`${price} Kr/tim`}
          className={classes.cardHeader}
        />

        <a href={url} target="_blank" className={classes.atag}>
          <CardMedia className={classes.media} image={photo} title={text} />

          <CardContent className={classes.text}>
            <IconButton className={classes.details}>
              <DetailsIcon data-det={docId} onClick={detailsClickHandel} />
            </IconButton>
            <IconButton>
              <DeleteIcon
                className={hide ? classes.hide : classes.delete}
                data-del={id}
                onClick={DeleteHandler}
              />
            </IconButton>
            <IconButton
              className={show ? classes.show : classes.email}
              onClick={emailClickHandler}
            >
              <EmailIcon />
            </IconButton>

            <IconButton className={show ? classes.show : classes.null}>
              <Btn text={"Reserve"} size hide clickHandler={clickHandler} />
            </IconButton>
          </CardContent>
        </a>
      </Card>
    </>
  );
}
