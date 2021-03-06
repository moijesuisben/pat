import React from "react";
import { View, StyleSheet } from "react-native";
import Grid3x3Line from "../Grid/3x3/Grid3x3Line";
import * as helpers from "../../helpers";
import TertiaryButton from "../Buttons/Tertiary/TertiaryButton";
import TestIcon from "../../icon/close.svg";

const useStyles = StyleSheet.create({
  menu_open_container: {
    backgroundColor: helpers.blockColor,
    borderRadius: helpers.borderRadius,
    shadowColor: helpers.shadowColor,
    shadowRadius: 6,
    shadowOpacity: 0.16,
    width: "100%",
    paddingHorizontal: helpers.m4,
    paddingVertical: helpers.m3,
  },
  menu_open_button: {
    color: helpers.primaryColor,
    marginTop: helpers.m2,
    marginBottom: helpers.m1,
  },
});

export default function MenuOpen({ onPress, navigation }) {
  const classes = useStyles;

  return (
    <View style={classes.menu_open_container}>
      <View>
        <Grid3x3Line
          border
          mediaLeft={<TestIcon height="20" width="20" />}
          mediaMiddle={<TestIcon height="20" width="20" />}
          mediaRight={<TestIcon height="20" width="20" />}
          labelLeft="écire un message"
          labelMiddle="mes conversations"
          labelRight="Mes contacts"
          onPressLeft={() => navigation.navigate("ÉcrireUnMessage")}
          onPressRight={() => navigation.navigate("Contact")}
        />
        <Grid3x3Line
          border
          mediaLeft={<TestIcon height="20" width="20" />}
          mediaMiddle={<TestIcon height="20" width="20" />}
          mediaRight={<TestIcon height="20" width="20" />}
          labelLeft="Mes invitations"
          labelMiddle="Mon espace"
          labelRight="Mes paramètres"
        />
        <TertiaryButton
          label="X Fermer"
          customStyle={classes.menu_open_button}
          onPress={onPress}
        />
      </View>
    </View>
  );
}
