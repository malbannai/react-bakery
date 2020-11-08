import React from "react";
import { Card, ListWrapper } from "./styles";
import DeleteButton from "../components/buttons/DeleteButton";

const NewItem = (props) => {
  const element = props.element;
  return (
    <Card>
      <ListWrapper>
        <img src={element.image} onClick={() => props.setProduct(element)} />
      </ListWrapper>
      <h3>{element.name}</h3>
      <p>{element.price} KD</p>
      <DeleteButton itemID={element.name} DeleteItem={props.DeleteItem} />
    </Card>
  );
};

export default NewItem;
