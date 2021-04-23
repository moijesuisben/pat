import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import * as variables from "../../../variables";

const useStyles = StyleSheet.create({
  tertiary_button_label: {
    fontSize: variables.fs_small,
    fontFamily: variables.ff_medium,
    color: variables.silverSand,
    textAlign: "center",
  },
});

export default function TertiaryButton({ customStyle, label, onPress }) {
  const classes = useStyles;
  return (
    <TouchableOpacity onPress={onPress}>
      <View>
        <Text
          style={[classes.tertiary_button_label, customStyle && customStyle]}
        >
          {label}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
