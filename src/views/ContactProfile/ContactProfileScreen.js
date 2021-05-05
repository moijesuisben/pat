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
import ContactProfileStyles from "./ContactProfileStyles";
import * as helpers from "../../helpers";
import { Text, View } from "react-native";
import SubTitle from "../../components/Text/SubTitle";
import Footer from "../../components/Footer/Footer";
import Avatar from "../../components/Avatar/Avatar";
import AvatarMedia from "../../media/Avatar.png";
import TertiaryButton from "../../components/Buttons/Tertiary/TertiaryButton";
import Notification from "../../components/Notifications/Notification";
import PrimaryButton from "../../components/Buttons/Primary/PrimaryButton";
import LookIcon from "../../icon/look.svg";

export default function ContactProfileScreen({ navigation }) {
  const classes = ContactProfileStyles;
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
            <TertiaryButton label="Afficher la bibliothèque" />
            <PrimaryButton
              label="Envoyer un message"
              customStyle={{ marginTop: helpers.m2 }}
            />
          </View>
          <View style={classes.content_container_block}>
            <SubTitle content="mes derniers messages" />
            <Notification
              message="Un éclat"
              date="il y a 2 jours"
              icon={<LookIcon height={17} width={26} />}
            />
            <Notification
              message="Une esquisse"
              date="il y a 3 jours"
              icon={<LookIcon height={17} width={26} />}
            />
            <Notification
              message="Une pensée"
              date="il y a 3 jours"
              icon={<LookIcon height={17} width={26} />}
            />
          </View>
          <Footer navigation={navigation} />
        </View>
      </View>
    );
  }
}
