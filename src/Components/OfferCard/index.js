//React
import React from "react";
import { View } from "react-native";
import CountDown from "react-native-countdown-component";

//Styles
import {
  ImageContainer,
  ImageView,
  LogoView,
  BackgroundImage,
  Footer,
  Title,
  SubTitle,
  CaptionOne,
  Background,
  CaptionTwo,
  Back,
  JustPlayText,
  MainContainer,
} from "./styles";

//Components
import Button from "../Buttons/Button/index";

const OfferCard = ({ card, onPress, isDetails }) => {
  return (
    <MainContainer isDetails={isDetails} disabled={isDetails} onPress={onPress}>
      <BackgroundImage
        isDetails={isDetails}
        source={{
          uri: card?.backgroundImage,
        }}
        imageStyle={{
          borderRadius: isDetails ? 0 : 15,
        }}
      >
        <ImageContainer card={card}>
          <View>
            {card?.type === "playNow" || card?.type === "offer" ? (
              <LogoView source={{ uri: card?.logo }} />
            ) : (
              <>
                {card?.type === "answerAndWin" ? (
                  <CaptionTwo card={card}>{card?.title}</CaptionTwo>
                ) : (
                  <JustPlayText>{card?.title}</JustPlayText>
                )}
              </>
            )}
            {card?.type === "offer" && (
              <Background>
                <Back>
                  <CaptionOne>{card?.subtitle}</CaptionOne>
                </Back>
                <CaptionTwo card={card}>{card?.title}</CaptionTwo>
              </Background>
            )}
          </View>
          {card?.type === "playNow" ||
          card?.type === "offer" ||
          card?.type === "answerAndWin" ? (
            <ImageView source={{ uri: card.imageView }} />
          ) : (
            <></>
          )}
        </ImageContainer>
        {!isDetails && (
          <Footer isDetails={isDetails} card={card}>
            <View>
              {card?.type === "playNow" ? (
                <Title>{card?.title}</Title>
              ) : card?.type === "answerAndWin" ? (
                <>
                  <Title>{card?.subtitle}</Title>
                </>
              ) : card?.type === "offer" ? (
                <>
                  <Title>{card?.afterPrice}</Title>
                </>
              ) : (
                <></>
              )}
              {card.type === "offer" ? (
                <SubTitle>{card?.beforePrice}</SubTitle>
              ) : (
                <></>
              )}
            </View>
            {card.type === "offer" ? (
              <CountDown
                showSeparator={true}
                digitStyle={{ color: "white" }}
                digitTxtStyle={{
                  color: "white",
                  fontWeight: "bold",
                  textAlign: "center",
                  paddingLeft: 7,
                }}
                separatorStyle={{
                  color: "white",
                  textAlign: "center",
                  marginBottom: 5,
                }}
                style={{ alignSelf: "center", width: 10 }}
                timeLabelStyle={{
                  color: "white",
                  fontWeight: "bold",
                }}
                until={40 * 60 * 60}
                size={15}
                timeToShow={["H", "M", "S"]}
                timeLabels={{ h: null, m: null }}
              />
            ) : (
              <></>
            )}

            <Button
              title={card.type === "offer" ? "Buy Now" : "Play Now"}
              card={card}
            />
          </Footer>
        )}
      </BackgroundImage>
    </MainContainer>
  );
};

export default OfferCard;
