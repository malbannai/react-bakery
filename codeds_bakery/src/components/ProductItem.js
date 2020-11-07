import React from "react";
import { Card, ListWrapper } from "./styles";

const NewItem = (props) => {
  const element = props.element;
  return (
    <Card>
      <ListWrapper>
        <img src={element.image} onClick={() => props.setProduct(element)} />
      </ListWrapper>
      <h3>{element.name}</h3>
      <p>{element.price} KD</p>
      <p
        style={{
          textAlign: "center",
          color: "red",
        }}
      >
        Delete
      </p>
    </Card>
  );
};

export default NewItem;
