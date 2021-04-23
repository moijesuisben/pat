import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as variables from "../../variables";
import * as helpers from "../../helpers";
import MenuIcon from "../../icon/menu.svg";

const useStyles = StyleSheet.create({
  menu_container: {
    // borderColor: "red",
    // borderWidth: 1,
    display: "flex",
    alignItems: "center",
  },
  menu_button: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    marginBottom: helpers.m2,
    borderRadius: 15,
    paddingVertical: helpers.m1,
    paddingHorizontal: helpers.m3,
    backgroundColor: variables.athensGray,
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

export default function Menu() {
  const classes = useStyles;

  return (
    <TouchableOpacity style={classes.menu_container}>
      <View style={classes.menu_button}>
        <Text style={classes.menu_button_text}>Menu</Text>
        <MenuIcon />
      </View>
    </TouchableOpacity>
  );
}
