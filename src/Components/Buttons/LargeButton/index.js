//React
import React from "react";
//Styles
import { ButtonStyle, ButtonTitleStyle, Container } from "./styles";

const LargeButton = ({ card, title }) => {
  return (
    <ButtonStyle card={card}>
      <ButtonTitleStyle card={card}>{title}</ButtonTitleStyle>
    </ButtonStyle>
  );
};
export default LargeButton;
