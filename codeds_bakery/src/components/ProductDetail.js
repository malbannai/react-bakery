import React from "react";
import { DetailWrapper } from "./styles";
import DeleteButton from "../components/buttons/DeleteButton";
import { useParams, Redirect } from "react-router-dom";

const ProductDetail = (props) => {
  const selected = useParams().itemId;
  const element = props.product.find((item) => selected === item.slug);

  if (!element) return <Redirect to="/items" />;
  return (
    <DetailWrapper>
      <h1>{element.name}</h1>
      <img src={element.image} />
      <p>{element.description}</p>
      <p>{element.price} KD</p>
      {/* <button onClick={() => props.setProduct()}>Go Back</button> */}
      <DeleteButton itemID={element.name} DeleteItem={props.DeleteItem} />
    </DetailWrapper>
  );
};

export default ProductDetail;
