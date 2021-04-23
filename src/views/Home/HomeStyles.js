import { StyleSheet } from "react-native";
import * as helpers from "../../helpers";

export default HomeStyles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: helpers.bgColor,
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
