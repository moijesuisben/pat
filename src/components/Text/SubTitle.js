import React from "react";
import { Text } from "react-native";
import * as variables from "../../variables";
import * as helpers from "../../helpers";

export default function SubTitle({ content }) {
  return (
    <Text
      style={{
        fontFamily: variables.ff_extra_bold,
        fontSize: variables.fs_extra_small,
        textTransform: "uppercase",
        color: helpers.textColor,
        marginBottom: helpers.m3,
      }}
    >
      {content}
    </Text>
  );
}
