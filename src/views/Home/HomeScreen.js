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
import HomeStyles from "./HomeStyles";
import { ScrollView, View } from "react-native";
import Title from "../../components/Text/Title";
import Avatar from "../../components/Avatar/Avatar";
import AvatarMedia from "../../icon/Avatar.png";
import TertiaryButton from "../../components/Buttons/Tertiary/TertiaryButton";
import SubTitle from "../../components/Text/SubTitle";
import Notification from "../../components/Notifications/Notification";
import Footer from "../../components/Footer/Footer";

export default function HomeScreen({ navigation }) {
  const classes = HomeStyles;
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
            <Avatar media={AvatarMedia} />
            <View style={classes.top_container_title}>
              <Title content="Benjamin" />
            </View>
            <TertiaryButton label="Modifier mon profil" />
          </View>
          <View style={classes.content_container_block}>
            <SubTitle content="mes dernières notifications" />
            <Notification
              message="Lu vous a envoyé un message"
              date="il y a 2 jours"
            />
            <Notification
              message="Lu a ouvert votre message"
              date="il y a 3 jours"
            />
          </View>
          <Footer />
        </View>
      </View>
    );
  }
}
