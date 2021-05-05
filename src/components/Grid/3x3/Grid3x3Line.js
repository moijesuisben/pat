import React from "react";
import { View, StyleSheet } from "react-native";
import Grid3x3Item from "./Grid3x3Item";
import * as helpers from "../../../helpers";

const useStyles = StyleSheet.create({
  grid_item_3x3_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: helpers.m1,
  },
});

export default function Grid3x3Line({
  border,
  labelLeft,
  labelMiddle,
  labelRight,
  onPressLeft,
  onPressMiddle,
  onPressRight,
  bgColor,
  mediaLeft,
  mediaMiddle,
  mediaRight,
}) {
  const classes = useStyles;

  return (
    <View style={classes.grid_item_3x3_container}>
      <Grid3x3Item
        bgColor={bgColor}
        border={border}
        media={mediaLeft}
        label={labelLeft}
        onPress={onPressLeft}
      />
      <Grid3x3Item
        bgColor={bgColor}
        border={border}
        media={mediaMiddle}
        label={labelMiddle}
        onPress={onPressMiddle}
      />
      <Grid3x3Item
        bgColor={bgColor}
        border={border}
        media={mediaRight}
        label={labelRight}
        onPress={onPressRight}
      />
    </View>
  );
}
