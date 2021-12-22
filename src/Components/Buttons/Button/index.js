//React
import React from "react";
//Styles
import { ButtonStyle, ButtonTitleStyle, Container } from "./styles";

const Button = ({ card, title }) => {
  return (
    <ButtonStyle card={card}>
      <ButtonTitleStyle card={card}>{title}</ButtonTitleStyle>
    </ButtonStyle>
  );
};
export default Button;
