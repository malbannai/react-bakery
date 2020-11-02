import React from "react";
import NewItem from "./ProductItem";
import newReleases from "../newReleases";
import { SubTitle, CardList, ListWrapper } from "./styles";

function NewReleases() {
  const releases = newReleases.map((element) => <NewItem element={element} />);

  return (
    <ListWrapper>
      <SubTitle>New Releases</SubTitle>
      <CardList> {releases}</CardList>
    </ListWrapper>
  );
}
export default NewReleases;
