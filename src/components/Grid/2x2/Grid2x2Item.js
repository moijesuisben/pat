import React from "react";
import { StyleSheet, Text, View } from "react-native";
import * as helpers from "../../../helpers";
import * as variables from "../../../variables";
import Avatar from "../../Avatar/Avatar";
import AvatarContact from "../../../media/avatar-contact.png";

const useStyles = StyleSheet.create({
  grid_item_2x2_container: {
    height: 120,
    width: '48%',
    justifyContent: "space-between",
    alignItems: "center",
    paddingTop: helpers.m3,
    paddingBottom: helpers.m2,
    backgroundColor: helpers.blockColor,
    borderRadius: helpers.borderRadius,
  },
  grid_item_2x2_label: {
    fontFamily: variables.ff_light,
    fontSize: variables.fs_small,
  },
});

export default function Grid2x2Item({ label = "Alix" }) {
  const classes = useStyles;

  return (
    <View style={classes.grid_item_2x2_container}>
      <Avatar media={AvatarContact} size={40} />
      <Text style={classes.grid_item_2x2_label}>{label}</Text>
    </View>
  );
}
