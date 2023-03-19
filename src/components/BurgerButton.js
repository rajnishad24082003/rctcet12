import React from "react";
import { BiMenu } from "react-icons/bi";
import "../assets/css/BurgerButton.css";

const BurgerButton = () => {
  return (
    <div className="MenuButton">
      <BiMenu className="BurgerButton" />
    </div>
  );
};

export default BurgerButton;
