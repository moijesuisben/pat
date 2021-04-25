import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as helpers from "../../helpers";
import * as variables from "../../variables";
import MenuIcon from "../../icon/menu.svg";

const useStyles = StyleSheet.create({
  menu_container: {
    display: "flex",
    alignItems: "center",
  },
  menu_button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: helpers.m2,
    borderRadius: helpers.borderRadius,
    paddingVertical: helpers.m1,
    paddingHorizontal: helpers.m3,
    backgroundColor: helpers.blockColor,
    shadowColor: helpers.shadowColor,
    shadowRadius: 6,
    shadowOpacity: 0.16,
  },
  menu_button_text: {
    fontFamily: variables.ff_light,
    marginRight: helpers.m4,
    fontSize: variables.fs_medium,
  },
});

export default function Menu({ onPress }) {
  const classes = useStyles;

  return (
    <TouchableOpacity style={classes.menu_container} onPress={onPress}>
      <View style={classes.menu_button}>
        <Text style={classes.menu_button_text}>Menu</Text>
        <MenuIcon />
      </View>
    </TouchableOpacity>
  );
}
