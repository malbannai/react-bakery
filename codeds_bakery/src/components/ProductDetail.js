import React from "react";
import { DetailWrapper } from "./styles";

const ProductDetail = (props) => {
  const element = props.product;
  return (
    <DetailWrapper>
      <h1>{element.name}</h1>
      <img src={element.image} />
      <p>{element.description}</p>
      <p>{element.price} KD</p>
      <button onClick={() => props.setProduct()}>Go Back</button>
    </DetailWrapper>
  );
};

export default ProductDetail;
