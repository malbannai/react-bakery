import React from "react";
import { Card, ListWrapper } from "./styles";
import DeleteButton from "../components/buttons/DeleteButton";
import { Link } from "react-router-dom";
import UpdateButton from "./buttons/UpdateButton";
import { observer } from "mobx-react";

const NewItem = ({ element }) => {
  return (
    <Card>
      <ListWrapper>
        <Link to={`/items/${element.slug}`}>
          <img src={element.image} />
        </Link>
      </ListWrapper>
      <h3>{element.name}</h3>
      <p>{element.price} KD</p>
      <UpdateButton element={element} />
      <DeleteButton itemID={element.id} />
    </Card>
  );
};

export default observer(NewItem);
