import React from "react";
import NewItem from "./ProductItem";
import { SubTitle, CardList, ListWrapper } from "./styles";
import { useState } from "react";

import SearchBar from "./SearchBar";

function ProductList(props) {
  // State
  const [query, setQuery] = useState("");

  //The search
  const filteredElements = props.list.filter((element) =>
    element.name.toLowerCase().includes(query.toLowerCase())
  );
  //The list of items
  const releases = filteredElements.map((element) => (
    <NewItem
      element={element}
      setProduct={props.setProduct}
      DeleteItem={props.DeleteItem}
    />
  ));

  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ListWrapper>
        <SubTitle>New Releases</SubTitle>
        <CardList> {releases}</CardList>
      </ListWrapper>
    </>
  );
}
export default ProductList;
