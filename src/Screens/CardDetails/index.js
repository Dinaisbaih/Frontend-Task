//React
import React from "react";
import { View, SafeAreaView } from "react-native";
import CountDown from "react-native-countdown-component";

//Styles
import {
  BottomWrapper,
  FooterWrapper,
  MainContainer,
  SubtitleOne,
  Title,
  OfferText,
  CountWrapper,
  Wrapper,
  Subhead,
  TitleTwo,
} from "./styles";

//Components
import LargeButton from "../../Components/Buttons/LargeButton";
import OfferCard from "../../Components/OfferCard/index";

const CardDetails = ({ route }) => {
  const { card, isDetails } = route.params;
  return (
    <MainContainer>
      <SafeAreaView />
      <OfferCard card={card} isDetails={isDetails} />
      <BottomWrapper>
        <Title>
          {card.type === "offer"
            ? card?.titleTwo
            : card.type === "justPlay"
            ? card?.title
            : card.type === "playNow"
            ? card?.title
            : card?.subtitle}
        </Title>
        {card.type === "offer" && (
          <>
            <SubtitleOne>{card?.caption}</SubtitleOne>
            <Wrapper>
              <TitleTwo>{card?.captionTwo} </TitleTwo>
              <Subhead> {card?.captionThree}</Subhead>
            </Wrapper>
          </>
        )}
      </BottomWrapper>
      {card.type === "offer" && (
        <CountWrapper>
          <TitleTwo>{card?.subhead}</TitleTwo>
          <CountDown
            showSeparator={true}
            digitStyle={{
              color: "white",

              height: 30,
              marginTop: 5,
            }}
            digitTxtStyle={{
              color: "white",
              fontWeight: "normal",
              textAlign: "center",
            }}
            separatorStyle={{
              color: "white",
              textAlign: "center",
              marginBottom: 20,
            }}
            style={{ alignItems: "center", width: 30, marginRight: 50 }}
            timeLabelStyle={{
              color: "white",
              fontWeight: "bold",
              fontSize: 10,
              marginRight: 2,
            }}
            until={40 * 60 * 60}
            size={20}
            timeLabels={{ d: "DAYS", h: "HOURS", m: "MIN", s: "SEC" }}
          />
        </CountWrapper>
      )}
      <FooterWrapper card={card}>
        {card.type === "offer" && (
          <View>
            <Title>{card?.afterPrice}</Title>
            <OfferText>{card?.beforePrice}</OfferText>
          </View>
        )}
        <LargeButton
          card={card}
          title={card.type === "offer" ? "Buy Now" : "Play Now"}
        />
      </FooterWrapper>
    </MainContainer>
  );
};

export default CardDetails;
