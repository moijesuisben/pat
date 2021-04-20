import React from "react";
import { Image } from "react-native";
import { StyleSheet } from "react-native";

const useStyles = StyleSheet.create({
  avatar_container: {
    height: 174,
    width: 174,
    borderRadius: 100,
  },
});

export default function Avatar({media}) {
  const classes = useStyles;
  return <Image style={classes.avatar_container} source={media}></Image>;
}
