import React from "react";
import SignUp from "./SignUp";
import { useState } from "react";
import { AuthButtonStyled } from "../styles";

const SignupButton = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeModal = () => setIsOpen(false);
  const openModal = () => setIsOpen(true);
  return (
    <>
      <AuthButtonStyled onClick={openModal}>Sign up</AuthButtonStyled>
      <SignUp isOpen={isOpen} closeModal={closeModal} />
    </>
  );
};

export default SignupButton;
