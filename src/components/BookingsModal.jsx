import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import InputField from "./InputField";
import Container from "@material-ui/core/Container";
import Snackbars from "./SnackBar";
import Btn from "./Btn";
import color from "../styles/color";
import Logo from "./Logo";
import IconButton from "@material-ui/core/IconButton";
import HighlightOffIcon from "@material-ui/icons/HighlightOff";
import { UserContext } from "../context/UserContextProvider";
import UserKit from "../data/UserKit";

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: "10%",
    margin: "0 auto",
    width: "50%",
    backgroundColor: theme.palette.background.paper,
    border: `1px solid ${color.green}`,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
    [theme.breakpoints.down("sm")]: {
      minWidth: "70%",
    },
    [theme.breakpoints.down("xs")]: {
      minWidth: "70%",
    },
  },

  form: {
    display: "flex",
    flexDirection: "column",
    // minWidth: "100%",
    margin: "0 auto",
    // [theme.breakpoints.down("sm")]: {
    //   minWidth: "70%",
    // },
    // [theme.breakpoints.down("xs")]: {
    //   minWidth: "100%",
    // },
  },
  btn: {
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    marginTop: "1%",
  },
  closewrp: {
    marginLeft: "auto",
    color: color.red,
    padding: "0px 5px",
  },
  close: {
    fontSize: "40px",
  },
}));

export default function BookingsModal({ open, setOpen, data }) {
  const classes = useStyles();
  const [err, setErr] = React.useState(false);
  const [name, setName] = useState("");
  const [Email, setEmail] = useState("");
  const [mobile, setMobile] = useState("");
  const [adress, setAdress] = useState("");
  const [city, setCity] = useState("");
  const mailformat = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

  const { check } = useContext(UserContext);
  const userKit = new UserKit();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formClickHandler = (e) => {
    e.preventDefault();
    if (adress.length < 2) {
      setErr(true);
    } else if (mobile.length < 2) {
      setErr(true);
    } else if (name.length < 2) {
      setErr(true);
    } else if (city.length < 2) {
      setErr(true);
    } else if (!mailformat.test(Email)) {
      setErr(true);
    } else {
      collection();
      setOpen(false);
    }

    setName("");
    setMobile("");
    setEmail("");
    setAdress("");
    setCity("");
  };

  const collection = async () => {
    let payload = {
      name: name,
      email: Email,
      total: data.total,
      id: data.id,
      mobile: mobile,
      adress: adress,
      time: data.hour,
      date: data.date,
      city: city,
    };

    (await payload) && (await userKit.createAds(payload, "bookings"));
  };

  useEffect(() => {}, []);

  const body = (
    <div className={classes.paper}>
      <form className={classes.form} onSubmit={formClickHandler}>
        <IconButton
          className={classes.closewrp}
          onClick={(e) => setOpen(false)}
        >
          <HighlightOffIcon className={classes.close} />
        </IconButton>
        <Logo log />
        <InputField
          placeholder={"Full-name"}
          onChange={(e) => setName(e.target.value)}
          type="text"
          value={name}
        />
        <InputField
          placeholder={"Email"}
          onChange={(e) => setEmail(e.target.value)}
          type="text"
          value={Email}
        />
        <InputField
          placeholder={"Mobile"}
          onChange={(e) => setMobile(e.target.value)}
          type="number"
          value={mobile}
        />
        <InputField
          placeholder={"Adress"}
          onChange={(e) => setAdress(e.target.value)}
          type="text"
          value={adress}
        />

        <InputField
          placeholder={"City"}
          onChange={(e) => setCity(e.target.value)}
          type="text"
          value={city}
        />

        <Container className={classes.btn}>
          <Btn
            text={"Submit"}
            value="submit"
            type="submit"
            clickHandler={() => null}
          />
        </Container>
      </form>
    </div>
  );

  return (
    <>
      <Modal
        className={classes.modal}
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
      <Snackbars
        openBar={err}
        closeBar={setErr}
        severity={"error"}
        text={" All fields are required, Please check email format"}
      />
    </>
  );
}
