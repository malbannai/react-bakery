import React from "react";
import "./App.css";
import ProductList from "./components/ProductList";
import { GlobalStayle, Title, SubTitle, MainImage } from "./components/styles";
import { ThemeProvider } from "styled-components";

const theme = {
  backgroundColor: "#fed8b1",
};

function App() {
  return (
    <div className="App">
      <GlobalStayle />
      <Title>Codeds Bakery</Title>
      <SubTitle>A place were your Brain can Refresh</SubTitle>
      <MainImage src="https://thumbs.dreamstime.com/b/bakery-shop-building-facade-signboard-baking-store-cafe-bread-pastry-dessert-shop-showcases-various-bread-cakes-159414926.jpg" />
      <ProductList />
    </div>
  );
}

export default App;
