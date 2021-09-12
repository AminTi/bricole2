import React, { useState, useContext } from "react";
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
import { UserContext } from "../context/UserContextProvider";
import UserKit from "../data/UserKit";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  tlbr: {
    background: color.green,
  },
  // menuButton: {
  //   [theme.breakpoints.up("sm")]: {
  //     display: "none",
  //   },
  // },

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
  // box: {
  //   display: "none",
  //   [theme.breakpoints.up("sm")]: {
  //     display: "block",
  //     margin: "0 auto",
  //   },
  // },
}));

const NavBar = ({ text }) => {
  const classes = useStyles();
  const [openDrawer, setOpen] = React.useState(false);
  const userKit = new UserKit();
  const history = useHistory();
  const [btnText, setBtnText] = useState("Log in");
  const { check, amin } = useContext(UserContext);

  const MenuHandler = () => {
    setOpen(true);
  };

  const singInSingOut = () => {
    if (check) {
      return (
        <Btn
          clickHandler={clickHandler}
          text={"Log out"}
          className={classes.btn}
          admin
        />
      );
    } else {
      return (
        <Btn
          clickHandler={clickHandler}
          text={"Log in"}
          className={classes.btn}
          admin
        />
      );
    }
  };

  const clickHandler = (e) => {
    if (check) {
      userKit.LogOut();
      history.push("/");
    } else {
      history.push("/login");
    }
  };

  const UserCheck = () => {
    if (check) {
      return <Drawer openDrawer={openDrawer} setOpen={setOpen} />;
    }
  };

  return (
    <>
      <AppBar position="static" className={classes.appBar}>
        <Toolbar variant="dense" className={classes.tlbr2}>
          <Logo />
          {singInSingOut()}
        </Toolbar>
        <Toolbar variant="dense" className={classes.tlbr}>
          {check ? (
            <IconButton
              edge="start"
              className={classes.menuButton}
              color="inherit"
              aria-label="menu"
              onClick={MenuHandler}
            >
              <MenuIcon />
            </IconButton>
          ) : null}
          {UserCheck()}
        </Toolbar>
      </AppBar>
    </>
  );
};

export default NavBar;
