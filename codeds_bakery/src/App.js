// import React, { Component } from "react";
// import { useState } from "react";
// import "./App.css";
// import ProductList from "./components/ProductList";
// import { GlobalStayle, Title, SubTitle, MainImage } from "./components/styles";
// import { ThemeProvider } from "styled-components";
// import Radio from "@material-ui/core/Radio";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import CardList from "./MaterialUI-components/CardList";
import CardElement from "./MaterialUI-components/CardElement";

export default function App() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid item xs={12}>
        <Paper
          className={classes.paper}
          style={{
            backgroundColor: "#FCA311",
            height: "100vh",
          }}
        >
          <CardList />
        </Paper>
      </Grid>
    </div>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
  },
}));

// const theme = {
//   Light: {
//     backgroundColor: "#FFB4A2",
//     subTitleColor: "#197278",
//     mainColor: "#197278",
//     mainTextColor: "#197278",
//     cardsBackground: "white",
//   },
//   Dark: {
//     backgroundColor: "#14213D",
//     subTitleColor: "#FCA311",
//     mainColor: "#FCA311",
//     mainTextColor: "#E5E5E5",
//     cardsBackground: "#FFCDB2",
//   },
//   Hasan: {
//     backgroundColor: "#FFB703",
//     subTitleColor: "#660708",
//     mainColor: "#660708",
//     mainTextColor: "#0b090a",
//     cardsBackground: "#8ECAE6",
//   },

//   Tester: {
//     backgroundColor: "#FFB703",
//     subTitleColor: "#660708",
//     mainColor: "#660708",
//     mainTextColor: "#0b090a",
//     cardsBackground: "#8ECAE6",
//   },
// };

// function App() {
//   const [currentTheme, setCurrentTheme] = useState("Light");
//   const toggleTheme = (choice) => {
//     setCurrentTheme(choice.target.value);
//   };
//   // setCurrentTheme(currentTheme === "Light" ? "Dark" : "Light");
//   return (
//     <ThemeProvider theme={theme[currentTheme]}>
//       <GlobalStayle />
//       <span>Theme:: </span>
//       <span>Light :</span>
//       <Radio
//         value="Light"
//         checked={currentTheme === "Light"}
//         onChange={toggleTheme}
//       />
//       <span>Dark :</span>
//       <Radio
//         value="Dark"
//         checked={currentTheme === "Dark"}
//         onChange={toggleTheme}
//       />
//       <span>Hasan :</span>
//       <Radio
//         value="Hasan"
//         checked={currentTheme === "Hasan"}
//         onChange={toggleTheme}
//       />
//       <Title>Codeds Bakery</Title>
//       <SubTitle>A place were your Brain can Refresh</SubTitle>
//       <MainImage src="https://thumbs.dreamstime.com/b/bakery-shop-building-facade-signboard-baking-store-cafe-bread-pastry-dessert-shop-showcases-various-bread-cakes-159414926.jpg" />
//       <ProductList />
//     </ThemeProvider>
//   );
// }

// export default App;
