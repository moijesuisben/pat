import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import * as helpers from "../../../helpers";
import Grid2x2Item from "./Grid2x2Item";

const useStyles = StyleSheet.create({
  grid_line_2x2_container: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "125%",
    marginBottom: helpers.m2,
  },
});

export default function Grid2x2Line({ onPressLeft, onPressRight }) {
  const classes = useStyles;

  return (
    <View style={classes.grid_line_2x2_container}>
      <Grid2x2Item onPress={onPressLeft} />
      <Grid2x2Item onPress={onPressRight} />
    </View>
  );
}
