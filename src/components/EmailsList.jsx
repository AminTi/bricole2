import React, { useContext, useEffect } from "react";
import { useHistory, Link } from "react-router-dom";

import { UserContext } from "../context/UserContextProvider";
import { makeStyles } from "@material-ui/core/styles";
import { Container } from "@material-ui/core";

import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  table: {
    minWidth: "90%",
  },
  wrapper: {
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    padding: "20px 10px",
    // justifyContent: "center",
    backgroundColor: "rgb(240, 245, 251)",
    minHeight: 800,
  },
  delete: {
    color: "red",
  },
});

function createData(index, email, Delete) {
  return { index, email, Delete };
}
function EmailsList() {
  const classes = useStyles();
  const history = useHistory();

  const { getemails, readEmails, user, deleteData } = useContext(UserContext);

  const id = user && user.uid;
  const currentUser = readEmails.filter((elm) => {
    return elm.userid == id;
  });
  useEffect(() => {
    getemails();
  }, []);

  const DeleteHandler = async (e) => {
    const id = e.currentTarget.getAttribute("data-del");
    if (id) {
      await deleteData(id, "emails");
      await getemails();
    }
  };

  return (
    <Container className={classes.wrapper}>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Index</TableCell>
              <TableCell align="left">email</TableCell>
              <TableCell align="right">Delete</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {currentUser.map((row, index) => (
              <TableRow key={index}>
                <TableCell component="th" scope="row">
                  {index}
                </TableCell>
                <TableCell component="th" scope="row" align="left">
                  <Link
                    to={`/displayemails/${row.emailId}`}
                    data-id={row.emailId}
                  >
                    {row.email}
                  </Link>
                </TableCell>
                <TableCell component="th" scope="row" align="right">
                  <IconButton>
                    <DeleteIcon
                      className={classes.delete}
                      onClick={DeleteHandler}
                      data-del={row.emailId}
                    />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
}

export default EmailsList;
