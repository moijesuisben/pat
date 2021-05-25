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
import ThoughtStyles from "./ThoughtStyles";
import { Text, View } from "react-native";
import Avatar from "../../../components/Avatar/Avatar";
import AvatarMedia from "../../../media/Avatar.png";
import Block from "../../../components/Message/Block/Block";
import PrimaryButton from "../../../components/Buttons/Primary/PrimaryButton";

export default function SelectMessageTypeScreen() {
  const classes = ThoughtStyles;
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
          <Block height="35%" width="80%" label1="envoyer" active1={false} />
          <PrimaryButton label="Accéder à la bibliothèque" />
        </View>
      </View>
    );
  }
}
