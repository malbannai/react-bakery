import { useState } from "react";
import ProductModal from "./ProductModal";
import { BsPlusCircle } from "react-icons/bs";

const AddButton = () => {
  // Modal useState
  const [isOpen, setIsOpen] = useState(false);

  // open and close
  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);

  return (
    <>
      <ProductModal isOpen={isOpen} closeModal={closeModal} />
      <BsPlusCircle size="2em" onClick={openModal} />
    </>
  );
};

export default AddButton;
