import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import * as helpers from "../../../helpers";
import * as variables from "../../../variables";
import TestIcon from "../../../icon/close.svg";

const useStyles = StyleSheet.create({
  grid_item_3x3_container: {
    borderWidth: 2,
    width: 100,
    height: 100,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    borderWidth: 2,
    borderRadius: helpers.borderRadius,
  },
  grid_item_3x3_containerWithBorder: {
    borderColor: helpers.primaryColor,
  },
  grid_item_3x3_containerWithIcon: {
    justifyContent: "space-between",
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
  media = <TestIcon height="20" width="20" />,
  label,
  border,
}) {
  const classes = useStyles;

  return (
    <TouchableOpacity onPress={onPress}>
      <View
        style={[
          classes.grid_item_3x3_container,
          media && classes.grid_item_3x3_containerWithIcon,
          border && classes.grid_item_3x3_containerWithBorder,
        ]}
      >
        {media && <View style={classes.grid_item_3x3_icon}>{media}</View>}
        <Text style={classes.grid_item_3x3_label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
