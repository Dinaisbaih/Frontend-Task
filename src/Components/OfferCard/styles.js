import styled from "styled-components/native";

export const MainContainer = styled.TouchableOpacity`
  width: 100%;
  align-self: center;
  margin-top: ${(props) => (props.isDetails ? 0 : 25)}px;
`;

export const BackgroundImage = styled.ImageBackground`
  width: 100%;
  /* height: ${(props) => (props.isDetails ? 60 : 60)}%; */
`;

export const Footer = styled.View`
  align-items: center;
  flex-direction: row;
  justify-content: ${(props) =>
    props?.card?.type === "justPlay" ? "center" : "space-between"};
  padding: 20px;
  background-color: ${(props) =>
    props?.card?.type === "offer"
      ? "green"
      : props?.card?.type === "playNow"
      ? "rgb(123, 89, 172)"
      : props?.card?.type === "answerAndWin"
      ? "rgb(217,139,132)"
      : "transparent"};
  border-bottom-left-radius: 15px;
  border-bottom-right-radius: 15px;
`;

export const ImageContainer = styled.View`
  justify-content: ${(props) =>
    props?.card?.type === "justPlay" || props?.card?.type === "answerAndWin"
      ? "center"
      : "space-between"};
  flex-direction: row;
  padding: 20px;
  align-items: ${(props) =>
    props?.card?.type === "answerAndWin" ? "center" : "flex-start"};
`;
export const ImageView = styled.Image`
  width: 150px;
  height: 150px;
`;
export const LogoView = styled.Image`
  width: 70px;
  height: 85px;
  border-radius: 8px;
`;

export const Title = styled.Text`
  font-size: 20;
  color: white;
  font-family: "Montserrat";
  font-weight: bold;
`;
export const Background = styled.View`
  align-items: flex-start;
`;
export const Back = styled.View`
  margin-top: 10px;
  background-color: white;
  padding: 3px;
  border-radius: 5px;
`;
export const CaptionOne = styled.Text`
  font-family: "Montserrat";
  font-size: 10px;
  align-self: center;
`;
export const CaptionTwo = styled.Text`
  font-family: "Montserrat";
  font-weight: bold;
  font-size: ${(props) => (props?.card?.type === "answerAndWin" ? 50 : 25)}px;
  color: ${(props) =>
    props?.card?.type === "answerAndWin" ? "white" : "black"};
`;
export const JustPlayText = styled.Text`
  font-family: "Montserrat";
  color: white;
  font-size: 50px;
  text-align: center;
  margin-top: 70px;
`;
export const SubTitle = styled.Text`
  font-size: 15px;
  color: white;
  font-family: "Montserrat";
  text-decoration: line-through;
  text-decoration-color: white;
`;

export const OfferDuration = styled.Text`
  font-size: 15;
  color: white;
  font-family: "Montserrat";
`;
