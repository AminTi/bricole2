import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import color from "../styles/color";
import clsx from "clsx";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import Collapse from "@material-ui/core/Collapse";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import { red } from "@material-ui/core/colors";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import MoreVertIcon from "@material-ui/icons/MoreVert";

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
    justifyContent: "center",
    alignItems: "center",
    background: color.green,
    color: color.white,
  },

  Typography: {
    color: color.white,
  },
  atag: {
    textDecoration: "none",
    color: color.white,
    fontWeight: "bold",
  },
}));

export default function RecipeReviewCard({ photo, key, text, url }) {
  const classes = useStyles();
  return (
    <>
      <Card className={classes.root} key={key}>
        <a href={url} target="_blank" className={classes.atag}>
          <CardMedia className={classes.media} image={photo} title={text} />

          <CardContent className={classes.text}>
            <Typography
              variant="body2"
              color="textSecondary"
              component="p"
              className={classes.Typography}
            >
              <Typography className={classes.atag}>{text}</Typography>
            </Typography>
          </CardContent>
        </a>
      </Card>
    </>
  );
}
