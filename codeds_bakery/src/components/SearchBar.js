import React from "react";
import { SearchBarStyled } from "./styles";

const SearchBar = (props) => {
  return (
    <SearchBarStyled
      placeholder="What do you want?"
      onChange={(event) => props.setQuery(event.target.value)}
    />
  );
};

export default SearchBar;
