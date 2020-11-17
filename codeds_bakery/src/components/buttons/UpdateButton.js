import React, { useState } from "react";

// Styling
import { UpdateButtonStyled } from "../styles";

// Modal
import ProductModal from "./ProductModal";

const UpdateButton = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <UpdateButtonStyled onClick={openModal}>Update</UpdateButtonStyled>
      <ProductModal closeModal={closeModal} openModal={openModal} />
    </>
  );
};

export default UpdateButton;
