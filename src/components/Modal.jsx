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
import fire from "../config/fire";

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
    marginTop: "2%",
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

export default function SimpleModal({ open, setOpen }) {
  const classes = useStyles();
  const [err, setErr] = React.useState(false);
  const [title, setTitle] = useState("");
  const [profession, setProfesstion] = useState("");
  const [image, setImage] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const { check, tester, GetAds, getCollection, profilData } =
    useContext(UserContext);
  const userKit = new UserKit();

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const formClickHandler = (e) => {
    e.preventDefault();
    if (title.length < 2) {
      setErr(true);
    } else if (profession.length < 2) {
      setErr(true);
    } else if (!image) {
      setErr(true);
    } else if (description.length < 2) {
      setErr(true);
    } else if (price.length < 2) {
      setErr(true);
    } else {
      collection();

      setOpen(false);
    }

    setTitle("");
    setProfesstion("");
    setImage("");
    setDescription("");
    setPrice("");
  };

  const onFileChange = async (e) => {
    const file = e.target.files[0];
    const storagRef = fire.storage().ref();
    const fileRef = storagRef.child(file.name);
    await fileRef.put(file);
    const fileUrl = await fileRef.getDownloadURL();
    setImage(fileUrl);
  };

  const collection = async () => {
    let data = {
      title: title,
      profession: profession,
      image: image,
      description: description,
      price: price,
      id: check.uid,
      city: profilData.payload.city,
    };
    if (check) {
      data && (await userKit.createAds(data, "advertising"));
    }
    GetAds();
  };

  useEffect(() => {
    getCollection("users", check.uid);
    GetAds();
  }, []);

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
          placeholder={"Title"}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          value={title}
        />
        <InputField
          placeholder={"Profession"}
          onChange={(e) => setProfesstion(e.target.value)}
          type="text"
          value={profession}
        />
        <InputField
          placeholder={"Price"}
          onChange={(e) => setPrice(e.target.value)}
          type="text"
          value={price}
        />
        <InputField
          name="Upload-photo"
          placeholder={"Image"}
          onChange={onFileChange}
          type={"file"}
        />
        <InputField
          multiline
          placeholder={"description"}
          onChange={(e) => setDescription(e.target.value)}
          type="text"
          value={description}
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
        text={" All fields are required"}
      />
    </>
  );
}
