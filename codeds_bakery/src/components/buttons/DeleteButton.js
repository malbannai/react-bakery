import React from "react";
import productStore from "../../stores/productStore";

const DeleteButton = (props) => {
  const handleDelete = () => {
    productStore.DeleteItem(props.itemID);
  };

  return (
    <p
      style={{
        textAlign: "center",
        color: "red",
      }}
      onClick={handleDelete}
    >
      Delete
    </p>
  );
};

export default DeleteButton;
