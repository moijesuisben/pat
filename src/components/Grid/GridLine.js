import React from "react";
import { View, StyleSheet } from "react-native";
import GridItem from "./GridItem";
import * as helpers from "../../helpers";

const useStyles = StyleSheet.create({
  grid_line_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: helpers.m1,
  },
});

export default function GridLine({
  border,
  labelLeft,
  labelMiddle,
  labelRight,
}) {
  const classes = useStyles;

  return (
    <View style={classes.grid_line_container}>
      <GridItem border={border} label={labelLeft} />
      <GridItem border={border} label={labelMiddle} />
      <GridItem border={border} label={labelRight} />
    </View>
  );
}
