import React from "react";
import { Text, View, StyleSheet } from "react-native";
import GridLine from "../Grid/GridLine";
import * as helpers from "../../helpers";
import * as variables from "../../variables";
import TertiaryButton from "../Buttons/Tertiary/TertiaryButton";

const useStyles = StyleSheet.create({
  menu_open_container: {
    backgroundColor: variables.athensGray,
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

export default function MenuOpen({ onPress }) {
  const classes = useStyles;

  return (
    <View style={classes.menu_open_container}>
      <View style={classes.menu_open_grid}>
        <GridLine
          border
          labelLeft="écire un message"
          labelMiddle="mes conversations"
          labelRight="Mes contacts"
        />
        <GridLine
          border
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
