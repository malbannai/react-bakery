import React from "react";
import NewItem from "./ProductItem";
import { SubTitle, CardList, ListWrapper } from "./styles";
import { useState } from "react";

import SearchBar from "./SearchBar";

// Add button
import AddButton from "./buttons/AddButton";

function ProductList({ list, createProduct, DeleteItem }) {
  // State
  const [query, setQuery] = useState("");

  //The search
  const filteredElements = list.filter((element) =>
    element.name.toLowerCase().includes(query.toLowerCase())
  );
  //The list of items
  const releases = filteredElements.map((element) => (
    <NewItem element={element} DeleteItem={DeleteItem} />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <AddButton createProduct={createProduct} />
      <ListWrapper>
        <SubTitle>New Releases</SubTitle>
        <CardList> {releases}</CardList>
      </ListWrapper>
    </>
  );
}
export default ProductList;
