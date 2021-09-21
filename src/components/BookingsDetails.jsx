import React, { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import { Container, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { useParams } from "react-router-dom";
import color from "../styles/color";

const useStyles = makeStyles({
  wrapper: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px 10px",
    height: 600,

    backgroundColor: color.white,
  },
  subWrapper: {
    display: "flex",
    justifyContent: "center",

    flexDirection: "column",
    height: "100%",
  },
  box: {
    padding: "10px 10px",
  },
  price: {
    color: "green",
    fontWeight: "bold",
  },
  titles: {
    color: "black",
    fontWeight: "bold",
  },
  reservation: {
    color: "green",
    fontWeight: "bold",
  },
});
function BookingsDetails() {
  const classes = useStyles();
  const params = useParams();
  let id = params.slug;

  const { getBookings, bookings, check } = useContext(UserContext);

  const currentReservations =
    bookings &&
    bookings.filter((elm) => {
      return elm.id == id;
    });

  console.log("details", bookings);

  useEffect(() => {
    getBookings();
  }, []);

  const display = () => {
    if (bookings.length > 0) {
      return (
        <Container className={classes.subWrapper}>
          <TableContainer component={Paper}>
            <Table aria-label="spanning table">
              {currentReservations &&
                currentReservations.map((row, index) => (
                  <TableBody>
                    <TableRow key={index}>
                      <TableCell className={classes.titles}> Name</TableCell>
                      <TableCell align="right">{row.name}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.titles}>
                        {" "}
                        Reservation
                      </TableCell>
                      <TableCell align="right" className={classes.reservation}>
                        {`${row.time} - ${row.date}`}
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.titles}> Mobile</TableCell>
                      <TableCell align="right">
                        <a href={`${row.mobile}`}>{row.mobile} </a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.titles}> Mail</TableCell>
                      <TableCell align="right">
                        <a href={`mailto:${row.email}`}>{row.email}</a>
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.titles}> Adress</TableCell>
                      <TableCell align="right">{row.adress}</TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell className={classes.titles}> City</TableCell>
                      <TableCell align="right">{row.city}</TableCell>
                    </TableRow>

                    <TableRow>
                      <TableCell className={classes.titles}>Tax</TableCell>
                      <TableCell align="right">25%</TableCell>
                      <TableCell align="right">
                        {" "}
                        {row.total * 0.25} :-
                      </TableCell>
                    </TableRow>
                    <TableRow>
                      <TableCell colSpan={2} className={classes.titles}>
                        Total
                      </TableCell>
                      <TableCell align="right" className={classes.price}>
                        {" "}
                        {row.total} -:
                      </TableCell>
                    </TableRow>
                  </TableBody>
                ))}
            </Table>
          </TableContainer>
        </Container>
      );
    }
  };

  return <Container className={classes.wrapper}>{display()}</Container>;
}

export default BookingsDetails;
