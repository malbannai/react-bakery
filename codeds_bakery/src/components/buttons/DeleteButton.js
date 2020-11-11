import React from "react";

const DeleteButton = (props) => {
  const handleDelete = () => {
    props.DeleteItem(props.itemID);
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
