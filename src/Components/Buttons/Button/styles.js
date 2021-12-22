import styled from "styled-components/native";

export const ButtonStyle = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: ${(props) => (props?.card?.type === "justPlay" ? 10 : 7)}px
    ${(props) => (props?.card?.type === "justPlay" ? 25 : 15)}px;
  border-radius: 25px;
  background-color: ${(props) =>
    props?.card?.type === "justPlay"
      ? "rgb(243,194,94)"
      : props?.card?.type === "offer"
      ? "rgb(163,205,149)"
      : props?.card?.type === "answerAndWin"
      ? "rgb(243, 178,147)"
      : "#bfa2db"};
  align-self: flex-end;
`;

export const ButtonTitleStyle = styled.Text`
  font-size: ${(props) => (props?.card?.type === "justPlay" ? 20 : 13)};
  color: ${(props) => (props.card.type === "justPlay" ? "black" : "white")};
  font-family: "Montserrat";
`;
