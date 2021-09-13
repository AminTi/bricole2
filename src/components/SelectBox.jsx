import React, { useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import AppBar from "@material-ui/core/AppBar";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import color from "../styles/color";
import { UserContext } from "../context/UserContextProvider";

const useStyles = makeStyles((theme) => ({
  formControl: {
    minWidth: "50%",
    margin: theme.spacing(1),
    background: color.white,
    [theme.breakpoints.down("sm")]: {
      minWidth: "100%",
    },
    borderStyle: "none",
    outline: "none",
  },

  //   selectEmpty: {
  //     marginTop: theme.spacing(2),
  //   },

  serachbars: {
    minWidth: "100%",
    background: color.white,
    borderStyle: "none",
  },
  style: {
    borderStyle: "none",
    outline: "none",
    borderStyle: "none",
    borderColor: "red",
    outlineWidth: 0,
    outline: "none",
  },
}));

export default function SelectBox({ data }) {
  const classes = useStyles();
  const [age, setAge] = React.useState("");
  const { setGetLocalStorage } = useContext(UserContext);

  const handleChange = async (e) => {
    setGetLocalStorage("");
    localStorage.clear();
    await localStorage.setItem("search", e.target.value);
    await setGetLocalStorage(localStorage.getItem("search"));
  };

  return (
    <>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel
          id="demo-simple-select-outlined-label"
          className={classes.style}
        >
          City
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={null}
          className={classes.serachbars}
          onChange={handleChange}
          label="City"
        >
          <MenuItem className={classes.style} value={null}>
            ------
          </MenuItem>
          {data &&
            data.map((item, index) => {
              return (
                <MenuItem
                  value={item.city}
                  key={index}
                  className={classes.style}
                >
                  {item.city}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">
          Profession
        </InputLabel>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          value={null}
          className={classes.serachbars}
          onChange={handleChange}
          label="City"
        >
          <MenuItem value={null}>------</MenuItem>
          {data &&
            data.map((item, index) => {
              return (
                <MenuItem value={item.profession} key={index}>
                  {item.profession}
                </MenuItem>
              );
            })}
        </Select>
      </FormControl>
    </>
  );
}
