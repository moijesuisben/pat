import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import * as helpers from "../../../helpers";
import * as variables from "../../../variables";
import TestIcon from "../../../icon/close.svg";

const useStyles = StyleSheet.create({
  grid_item_3x3_container: {
    width: 100,
    height: 100,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    borderRadius: helpers.borderRadius,
  },
  grid_item_3x3_containerWithBorder: {
    borderWidth: 2,
    borderColor: helpers.primaryColor,
  },
  grid_item_3x3_containerWithIcon: {
    justifyContent: "space-between",
  },
  grid_item_3x3_containerWithBgColor: {
    backgroundColor: helpers.blockColor,
  },
  grid_item_3x3_icon: {
    marginTop: helpers.m8,
    alignItems: "center",
  },
  grid_item_3x3_label: {
    marginBottom: helpers.m3,
    textAlign: "center",
    fontFamily: variables.ff_light,
    maxWidth: 90,
  },
});

export default function Grid3x3Item({
  onPress,
  media,
  label,
  border,
  bgColor,
}) {
  const classes = useStyles;

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          classes.grid_item_3x3_container,
          media && classes.grid_item_3x3_containerWithIcon,
          border && classes.grid_item_3x3_containerWithBorder,
          bgColor && classes.grid_item_3x3_containerWithBgColor,
        ]}
      >
        {media && <View style={classes.grid_item_3x3_icon}>{media}</View>}
        <Text style={classes.grid_item_3x3_label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
