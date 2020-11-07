import React from "react";
import NewItem from "./ProductItem";
import newReleases from "../newReleases";
import { SubTitle, CardList, ListWrapper } from "./styles";
import { useState } from "react";

import SearchBar from "./SearchBar";

function ProductList(props) {
  const [query, setQuery] = useState("");
  const filteredElements = newReleases.filter((element) =>
    element.name.toLowerCase().includes(query.toLowerCase())
  );
  const releases = filteredElements.map((element) => (
    <NewItem element={element} setProduct={props.setProduct} />
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
