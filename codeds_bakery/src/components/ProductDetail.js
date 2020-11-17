import React from "react";
import { DetailWrapper } from "./styles";
import DeleteButton from "../components/buttons/DeleteButton";
import { useParams, Redirect } from "react-router-dom";
// Observer
import { observer } from "mobx-react";

// Store
import productStore from "../stores/productStore";
const ProductDetail = (props) => {
  const selected = useParams().itemId;
  const element = productStore.newReleases.find(
    (item) => selected === item.slug
  );

  if (!element) return <Redirect to="/items" />;
  return (
    <DetailWrapper>
      <h1>{element.name}</h1>
      <img src={element.image} />
      <p>{element.description}</p>
      <p>{element.price} KD</p>
      <DeleteButton itemID={element.name} />
    </DetailWrapper>
  );
};

export default observer(ProductDetail);
