import React from "react";
import { Button, Text, TouchableOpacity, View } from "react-native";
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

export default function TertiaryButton({ label }) {
  const classes = useStyles;
  return (
    <TouchableOpacity>
      <View>
        <Text style={classes.tertiary_button_label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
