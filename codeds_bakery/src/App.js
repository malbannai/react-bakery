import { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import ProductDetail from "./components/ProductDetail";
import { GlobalStayle } from "./components/styles";
import { ThemeProvider } from "styled-components";
import Home from "./components/Home";
import { Route, Switch } from "react-router";
import NavBar from "./components/NavBar";

const theme = {
  Light: {
    backgroundColor: "#FFB4A2",
    subTitleColor: "#197278",
    mainColor: "#197278",
    mainTextColor: "#197278",
    cardsBackground: "white",
  },
  Dark: {
    backgroundColor: "#14213D",
    subTitleColor: "#FCA311",
    mainColor: "#FCA311",
    mainTextColor: "#E5E5E5",
    cardsBackground: "#FFCDB2",
  },
  Hasan: {
    backgroundColor: "#FFB703",
    subTitleColor: "#660708",
    mainColor: "#660708",
    mainTextColor: "#0b090a",
    cardsBackground: "#8ECAE6",
  },
};

function App() {
  //Theme
  const [currentTheme, setCurrentTheme] = useState("Light");

  return (
    <ThemeProvider theme={theme[currentTheme]}>
      <GlobalStayle />
      <NavBar currentTheme={currentTheme} setCurrentTheme={setCurrentTheme} />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/items/:itemId">
          <ProductDetail />
        </Route>
        <Route path="/items">
          <ProductList />
        </Route>
      </Switch>
    </ThemeProvider>
  );
}

export default App;

// Selecting the view
// const myView = () => {
//   if (product)
//     return (
// <ProductDetail
//   product={product}
//   setProduct={setProduct}
//   DeleteItem={DeleteItem}
// />
//     );
//   return (
//     <ProductList
//       list={_elements}
//       setProduct={setProduct}
//       DeleteItem={DeleteItem}
//     />
//   );
// };
