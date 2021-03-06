import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

const useStyles = StyleSheet.create({
  avatar_container: {
    borderRadius: 100,
  },
});

export default function Avatar({media, size}) {
  const classes = useStyles;
  return <Image style={classes.avatar_container, {height: size, width: size}} source={media}></Image>;
}
