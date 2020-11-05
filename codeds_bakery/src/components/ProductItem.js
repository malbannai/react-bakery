import React from "react";
import { Card, ListWrapper } from "./styles";
import Button from "@material-ui/core";

const NewItem = (props) => {
  const element = props.element;
  return (
    <Card>
      <ListWrapper>
        <img src={element.image} />
      </ListWrapper>
      <h3>{element.name}</h3>
      <p>{element.price} KD</p>
      <Button>Click Here</Button>
    </Card>
  );
};

export default NewItem;
