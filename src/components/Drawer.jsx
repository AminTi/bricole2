import React from "react";
import { Drawer as MUIDrawer, List } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { BrowserRouter as Router, Link } from "react-router-dom";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import IconButton from "@material-ui/core/IconButton";
import { makeStyles } from "@material-ui/core/styles";
import color from "../styles/color";

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: "auto",
  },
  list: {
    background: color.white,
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
  },

  links: {
    display: "flex",
    justifyContent: "center",
    color: color.black,
    textDecoration: "none",
  },
  links1: {
    fontWeight: "bold",
  },
  closewrp: {
    marginLeft: "auto",
    color: color.red,
    padding: "0px 30px",
  },
  close: {
    fontSize: "40px",
  },
});

export default function Drawer({ openDrawer, setOpen }) {
  const classes = useStyles();
  const ItemList = [
    {
      text: (
        <Link href="/" className={classes.links}>
          <Typography variant="h6" className={classes.links1}>
            Startsida
          </Typography>
        </Link>
      ),
    },
    {
      text: (
        <Link href="/Idrott" className={classes.links}>
          <Typography variant="h6" className={classes.links1}>
            Idrott
          </Typography>
        </Link>
      ),
    },
    {
      text: (
        <Link href="/Politik" className={classes.links}>
          <Typography variant="h6" className={classes.links1}>
            Politik
          </Typography>
        </Link>
      ),
    },
    {
      text: (
        <Link href="/Samhälle" className={classes.links}>
          <Typography variant="h6" className={classes.links1}>
            Samhälle
          </Typography>
        </Link>
      ),
    },
  ];

  const closeModal = () => {
    setOpen(false);
  };

  return (
    <>
      <MUIDrawer open={openDrawer} anchor={"top"} className={classes.drawer}>
        <List className={classes.list}>
          <IconButton className={classes.closewrp} onClick={closeModal}>
            <HighlightOffIcon className={classes.close} />
          </IconButton>
          {ItemList.map((item, index) => {
            const { text } = item;
            return (
              <ListItem button key={index}>
                <ListItemText
                  primary={text}
                  className={classes.links1}
                  onClick={closeModal}
                />
              </ListItem>
            );
          })}
        </List>
      </MUIDrawer>
    </>
  );
}
