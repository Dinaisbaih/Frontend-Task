import styled from "styled-components/native";

export const ButtonStyle = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;
  padding: 16px 30px;
  border-radius: 35px;
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
  color: black;
  font-family: "Montserrat-Regular";
  font-size: 23px;
`;
