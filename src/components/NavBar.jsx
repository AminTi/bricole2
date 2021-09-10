import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import color from "../styles/color";
import { Box } from "@material-ui/core";
import Btn from "./Btn";
import Logo from "./Logo";
import Drawer from "./Drawer";
import MenuIcon from "@material-ui/icons/Menu";
import IconButton from "@material-ui/core/IconButton";
import Links from "./Links";

const useStyles = makeStyles((theme) => ({
  tlbr: {
    background: color.green,
  },
  menuButton: {
    [theme.breakpoints.up("sm")]: {
      display: "none",
    },
  },

  tlbr2: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    background: color.white,
    [theme.breakpoints.up("sm")]: {
      display: "flex",
      justifyContent: "space-between",
      flexDirection: "row",
      background: color.white,
      padinng: "5px 10px",
    },
  },
  box: {
    display: "none",
    [theme.breakpoints.up("sm")]: {
      display: "block",
      margin: "0 auto",
    },
  },
}));

const BtmBar = ({ text }) => {
  const classes = useStyles();
  const [openDrawer, setOpen] = React.useState(false);

  const MenuHandler = () => {
    setOpen(true);
  };
  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.tlbr2}>
          <Logo />
          <Btn text={"Administratör"} className={classes.btn} admin />
        </Toolbar>
        <Toolbar variant="dense" className={classes.tlbr}>
          <Box className={classes.box}>
            <Links text={"Senaste-Nytt"} />
            <Links text={"Politik"} />
            <Links text={"idrott"} />
            <Links text={"Samhälle"} />
          </Box>

          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={MenuHandler}
          >
            <MenuIcon />
          </IconButton>
          <Drawer openDrawer={openDrawer} setOpen={setOpen} />
        </Toolbar>
      </AppBar>
    </>
  );
};

export default BtmBar;
