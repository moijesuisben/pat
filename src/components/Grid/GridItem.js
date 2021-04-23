import React from "react";
import { Text, TouchableOpacity, View, StyleSheet } from "react-native";
import * as helpers from "../../helpers";
import * as variables from "../../variables";
import TestIcon from "../../icon/close.svg";

const useStyles = StyleSheet.create({
  gridItem_container: {
    borderWidth: 2,
    width: 100,
    height: 100,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-end",
    borderWidth: 2,
    borderRadius: helpers.borderRadius,
  },
  gridItem_containerWithBorder: {
    borderColor: helpers.primaryColor,
  },
  gridItem_containerWithIcon: {
    justifyContent: "space-between",
  },
  gridItem_icon: {
    marginTop: helpers.m8,
    alignItems: "center",
  },
  gridItem_label: {
    marginBottom: helpers.m3,
    textAlign: "center",
    fontFamily: variables.ff_light,
    maxWidth: 90,
  },
});

export default function GridItem({
  media = <TestIcon height="20" width="20" />,
  label,
  border,
}) {
  const classes = useStyles;

  return (
    <TouchableOpacity>
      <View
        style={[
          classes.gridItem_container,
          media && classes.gridItem_containerWithIcon,
          border && classes.gridItem_containerWithBorder,
        ]}
      >
        {media && <View style={classes.gridItem_icon}>{media}</View>}
        <Text style={classes.gridItem_label}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}
