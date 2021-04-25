import React from "react";
import AppLoading from "expo-app-loading";
import {
  useFonts,
  Nunito_300Light,
  Nunito_400Regular,
  Nunito_600SemiBold,
  Nunito_700Bold,
  Nunito_800ExtraBold,
} from "@expo-google-fonts/nunito";
import ContactStyles from "./ContactStyles";
import { View } from "react-native";
import Title from "../../components/Text/Title";
import SubTitle from "../../components/Text/SubTitle";
import Footer from "../../components/Footer/Footer";
import Searchbar from "../../components/SearchBar/Searchbar";
import Grid2x2Line from "../../components/Grid/2x2/Grid2x2Line";

export default function ContactScreen({ navigation }) {
  const classes = ContactStyles;
  let [fontsLoaded] = useFonts({
    Nunito_300Light,
    Nunito_400Regular,
    Nunito_600SemiBold,
    Nunito_700Bold,
    Nunito_800ExtraBold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  } else {
    return (
      <View style={{ flex: 1 }}>
        <View style={classes.container}>
          <View style={classes.top_container_block}>
            <View style={classes.top_container_title}>
              <Title content="Mes contacts" />
            </View>
            <Searchbar />
          </View>
          <View style={classes.content_container_block}>
            <SubTitle content="contacts récents" />
            <Grid2x2Line />
            <Grid2x2Line />
          </View>
          <Footer navigation={navigation} />
        </View>
      </View>
    );
  }
}
