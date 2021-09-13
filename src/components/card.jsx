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
import UserKit from "../data/UserKit";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    margin: "1%",
    borderRadius: "10px",
    "&:hover": {
      opacity: "0.4",
    },
    [theme.breakpoints.down("sm")]: {
      margin: "2%",
    },
  },
  media: {
    height: 200,
    width: "100%",
  },

  text: {
    display: "flex",
    justifyContent: "space-between",

    background: color.lightRed,
  },

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
}) {
  const classes = useStyles();
  const userKit = new UserKit();

  const DeleteHandler = async (e) => {
    const id = e.currentTarget.getAttribute("data-del");
    if (id) {
      userKit.deleteData(id, "advertising");
    }
    console.log("hej");
  };

  return (
    <>
      <Card className={classes.root} key={key}>
        <CardHeader
          title={""}
          subheader={profession}
          className={classes.cardHeader}
        />

        <a href={url} target="_blank" className={classes.atag}>
          <CardMedia className={classes.media} image={photo} title={text} />

          <CardContent className={classes.text}>
            <IconButton className={classes.details}>
              <DetailsIcon />
            </IconButton>
            <IconButton>
              <DeleteIcon
                className={hide ? classes.hide : classes.delete}
                data-del={id}
                onClick={DeleteHandler}
              />
            </IconButton>
            <IconButton className={show ? classes.show : classes.email}>
              <EmailIcon />
            </IconButton>
            <IconButton className={show ? classes.show : classes.null}>
              <Btn text={"Reservation"} size hide />
            </IconButton>
          </CardContent>
        </a>
      </Card>
    </>
  );
}
