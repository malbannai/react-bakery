import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardElement from "./CardElement";
import newReleases from "../newReleases";
import "./styles.css";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
  },
}));

export default function CardList() {
  const classes = useStyles();

  // Tester List
  const releases = newReleases.map((element) => (
    <CardElement element={element} />
  ));
  return (
    <div className={classes.root}>
      <Grid container spacing={3}>
        <Grid item xs={4} md={6} sm={12}>
          <Paper className={classes.paper}>{releases}</Paper>
        </Grid>
      </Grid>
    </div>
  );
}
