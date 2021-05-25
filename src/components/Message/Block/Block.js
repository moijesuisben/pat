import React from "react";
import { View, StyleSheet } from "react-native";
import * as helpers from "../../../helpers";
import * as variables from "../../../variables";
import ButtonRounded from "../../Buttons/ButtonRounded/ButtonRounded";

const useStyles = StyleSheet.create({
  block_content: {
    marginTop: helpers.m2,
    marginBottom: helpers.m3,
    borderRadius: helpers.borderRadius,
    backgroundColor: helpers.blockColor,
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "flex-end",
  },
});

export default function Block({
  height,
  width,
  label1,
  label2,
  active1,
  active2,
}) {
  const classes = useStyles;
  return (
    <View style={[classes.block_content, { height: height, width: width }]}>
      {label1 && !label2 && (
        <ButtonRounded
          active={active1}
          bgColor={helpers.blockColor}
          fontSize={variables.fs_extra_small}
          label={label1}
        />
      )}
      {label1 && label2 && (
        <>
          <ButtonRounded
            active={active1}
            bgColor={helpers.blockColor}
            fontSize={variables.fs_extra_small}
            label={label1}
          />
          <ButtonRounded
            active={active2}
            bgColor={helpers.blockColor}
            fontSize={variables.fs_extra_small}
            label={label2}
          />
        </>
      )}
    </View>
  );
}
