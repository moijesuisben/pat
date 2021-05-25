import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import * as helpers from "../../../helpers";
import * as variables from "../../../variables";
import MenuIcon from "../../../icon/menu.svg";

const useStyles = StyleSheet.create({
  buttonRounded_container: {
    display: "flex",
    alignItems: "center",
  },
  buttonRounded_button: {
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
    color: helpers.textColor,
  },
  buttonRounded_text: {
    fontFamily: variables.ff_light,
    fontSize: variables.fs_medium,
    paddingVertical: helpers.m1,
    paddingHorizontal: helpers.m3,
  },
  buttonRounded_disable: {
    opacity: 0.3,
  },
});

export default function ButtonRounded({
  onPress,
  active = true,
  bgColor = helpers.primaryColor,
  fontSize = variables.fs_medium,
  label = "ajouter un label",
  icon = <MenuIcon />,
}) {
  const classes = useStyles;

  return (
    <TouchableOpacity
      style={classes.buttonRounded_container}
      onPress={onPress}
      disabled={!active}
    >
      <View
        style={[classes.buttonRounded_button, { backgroundColor: bgColor }]}
      >
        <Text
          style={[
            classes.buttonRounded_text,
            !active && classes.buttonRounded_disable,
            { fontSize: fontSize },
          ]}
        >
          {label}
        </Text>
        {icon}
      </View>
    </TouchableOpacity>
  );
}
