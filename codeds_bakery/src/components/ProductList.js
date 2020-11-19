import NewItem from "./ProductItem";
// Styles
import { SubTitle, CardList, ListWrapper } from "./styles";

//Use State
import { useState } from "react";

//Search bar
import SearchBar from "./SearchBar";

// Add button
import AddButton from "./buttons/AddButton";

// Importing my store
import productStore from "../stores/productStore";

// Observer
import { observer } from "mobx-react";

function ProductList({ createProduct, DeleteItem }) {
  // State
  const [query, setQuery] = useState("");

  //The search
  const filteredElements = productStore.newReleases.filter((element) =>
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
export default observer(ProductList);
