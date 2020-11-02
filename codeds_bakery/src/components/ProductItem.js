import React from "react";
import { Card, ListWrapper } from "./styles";

const NewItem = (props) => {
  const element = props.element;
  return (
    <Card>
      <ListWrapper>
        <img src={element.image} />
      </ListWrapper>
      <h3>{element.name}</h3>
      <p>{element.price} KD</p>
    </Card>
  );
};

export default NewItem;
