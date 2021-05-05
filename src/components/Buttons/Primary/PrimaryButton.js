import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import * as variables from "../../../variables";
import * as helpers from "../../../helpers";

const useStyles = StyleSheet.create({
  primary_button_container: {
    width: 318,
    backgroundColor: helpers.blockColor,
    borderRadius: helpers.borderRadius,
  },
  primary_button_label: {
    paddingHorizontal: helpers.m4,
    paddingVertical: helpers.m2,
    fontFamily: variables.ff_medium,
    fontSize: variables.fs_large,
    color: helpers.textColor,
    textAlign: "center",
  },
});

export default function PrimaryButton({ customStyle, label, onPress }) {
  const classes = useStyles;
  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[classes.primary_button_container, customStyle && customStyle]}
      >
        <Text style={classes.primary_button_label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
