import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import logo from "../../src/bakery.png";
import Radio from "@material-ui/core/Radio";
import { Link } from "react-router-dom";
import { NavItem } from "./styles";
import SignupButton from "./buttons/SignupButton";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    background: "white",
  },
  title: {
    flexGrow: 1,
  },
}));

export default function NavBar({ currentTheme, setCurrentTheme }) {
  const classes = useStyles();

  const toggleTheme = (choice) => {
    setCurrentTheme(choice.target.value);
  };

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <Typography variant="h6">
              <Link to="/">
                <img src={logo} width="60" pagging="5" />
              </Link>
            </Typography>

            <Button color="inherit" className={classes.title}>
              <NavItem to="/">Home</NavItem>
            </Button>
            <Button color="inherit" className={classes.title}>
              <NavItem to="/items">Items</NavItem>
            </Button>
          </Typography>
          <SignupButton />
          <Button color="inherit">
            <span>Light Theme:</span>
            <Radio
              value="Light"
              checked={currentTheme === "Light"}
              onChange={toggleTheme}
            />
            <span>Dark Theme:</span>
            <Radio
              value="Dark"
              checked={currentTheme === "Dark"}
              onChange={toggleTheme}
            />
            <span>Hasan Theme:</span>
            <Radio
              value="Hasan"
              checked={currentTheme === "Hasan"}
              onChange={toggleTheme}
            />
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
