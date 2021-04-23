import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SOSButton from "../Buttons/SOS/SOSButton";
import Menu from "../Menu/Menu";

const useStyles = StyleSheet.create({
  footer_container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default function Footer() {
  const classes = useStyles;
  return (
    <View style={classes.footer_container}>
      <Menu />
      <SOSButton />
    </View>
  );
}
