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
import SelectMessageTypeStyles from "./SelectMessageTypeStyles";
import * as helpers from "../../helpers";
import { Text, View } from "react-native";
// import SubTitle from "../../components/Text/SubTitle";
import Footer from "../../components/Footer/Footer";
import Avatar from "../../components/Avatar/Avatar";
import AvatarMedia from "../../media/Avatar.png";
import TertiaryButton from "../../components/Buttons/Tertiary/TertiaryButton";
// import Notification from "../../components/Notifications/Notification";
import PrimaryButton from "../../components/Buttons/Primary/PrimaryButton";
import Grid3x3Line from "../../components/Grid/3x3/Grid3x3Line";
// import LookIcon from "../../icon/look.svg";

export default function SelectMessageTypeScreen({ navigation }) {
  const classes = SelectMessageTypeStyles;
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
            <Avatar media={AvatarMedia} size={100} />
            <Text style={classes.profil_name}>Alix</Text>
          </View>
          <View style={classes.block_content} />
          <View style={classes.message_type_block}>
            <Grid3x3Line
              bgColor
              labelLeft="Faire une pensée"
              labelMiddle="Faire une esquisse"
              labelRight="Faire une étincelle"
            />
            <Grid3x3Line
              bgColor
              labelLeft="Faire un battement"
              labelMiddle="Faire une résonance"
              labelRight="Faire un    éclat"
            />
          </View>
        </View>
      </View>
    );
  }
}
