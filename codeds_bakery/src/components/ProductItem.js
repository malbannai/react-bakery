import React from "react";
import { Card, ListWrapper } from "./styles";
import DeleteButton from "../components/buttons/DeleteButton";
import { Link } from "react-router-dom";
import UpdateButton from "./buttons/UpdateButton";

const NewItem = (props) => {
  const element = props.element;
  return (
    <Card>
      <ListWrapper>
        <Link to={`/items/${element.slug}`}>
          <img src={element.image} />
        </Link>
      </ListWrapper>
      <h3>{element.name}</h3>
      <p>{element.price} KD</p>
      <UpdateButton />
      <DeleteButton itemID={element.name} />
    </Card>
  );
};

export default NewItem;
