import React from "react";
import { Text, TouchableOpacity } from "react-native";
import { StyleSheet } from "react-native";
import * as variables from "../../../variables";
import * as helpers from "../../../helpers";
import SOSBlock from "../../../icon/sos_close.svg";

const useStyles = StyleSheet.create({
  sos_button_container: {
    width: "100%",
    backgroundColor: "red",
  },
  sos_button_label: {
    position: "absolute",
    textAlign: "center",
    width: "100%",
    marginTop: helpers.m1,
    fontFamily: variables.ff_bold,
    fontSize: variables.fs_medium,
    color: helpers.blockColor,
  },
});

export default function SOSButton() {
  const classes = useStyles;
  return (
    <TouchableOpacity>
      <SOSBlock classes={classes.sos_button_container} />
      <Text style={classes.sos_button_label}>SOS</Text>
    </TouchableOpacity>
  );
}
