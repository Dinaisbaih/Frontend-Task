//React
import React, { useEffect, useState } from "react";
import { TextInput, SafeAreaView, FlatList } from "react-native";

//Styles
import { MainContainer } from "./styles";

//Components
import OfferCard from "../../Components/OfferCard/index";

//axios
import axios from "axios";

const Home = ({ navigation }) => {
  const { navigate } = navigation;
  const [data, setData] = useState([]);

  const navigateToDetails = (item) => {
    navigate("CardDetails", { card: item, isDetails: true });
  };

  const getData = async () => {
    try {
      const res = await axios.get("http://localhost:8080/ads");
      setData(res.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  const renderItem = ({ item }) => {
    return <OfferCard onPress={() => navigateToDetails(item)} card={item} />;
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <MainContainer>
      <SafeAreaView />
      <TextInput />
      <FlatList
        showsVerticalScrollIndicator={false}
        data={data?.sort((a, b) => a.id - b.id)}
        renderItem={renderItem}
        contentContainerStyle={{ paddingBottom: 10 }}
      />
    </MainContainer>
  );
};
export default Home;
