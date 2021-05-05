import { StyleSheet } from "react-native";
import * as variables from "./variables";
import * as helpers from "./helpers";

const commonStyle = StyleSheet.create({
  title: {
    fontSize: variables.fs_giant,
    fontWeight: variables.fw_bold,
  },
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: helpers.bgColor,
    width: "100%",
  },
  top_container_block: {
    marginTop: helpers.mTop,
  },
  top_container_title: {
    marginTop: helpers.m2,
    marginBottom: helpers.m1,
  },
  content_container_block: {
    marginTop: helpers.m2,
    alignItems: "baseline",
    width: helpers.s_80,
  },
});

export default commonStyle;
