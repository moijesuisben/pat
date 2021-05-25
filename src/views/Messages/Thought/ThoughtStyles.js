import { StyleSheet } from "react-native";
import * as helpers from "../../../helpers";
import * as variables from "../../../variables";

export default ThoughtStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: helpers.bgColor,
  },
  top_container_block: {
    marginTop: helpers.mTop,
    alignItems: "center",
  },
  profil_name: {
    fontFamily: variables.ff_light,
    fontSize: variables.fs_small,
    marginVertical: helpers.m1,
  },
});
