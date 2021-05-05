import React from "react";
import { Text } from "react-native";
import * as variables from "../../variables";
import * as helpers from "../../helpers";

export default function Title({ content }) {
  return (
    <Text
      style={{
        fontFamily: variables.ff_bold,
        fontSize: variables.fs_giant,
        textAlign: "center",
        color: helpers.textColor,
      }}
    >
      {content}
    </Text>
  );
}
