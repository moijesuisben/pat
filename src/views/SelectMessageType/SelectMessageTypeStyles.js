import { StyleSheet } from "react-native";
import * as helpers from "../../helpers";
import * as variables from "../../variables";

export default ContactStyles = StyleSheet.create({
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
  block_content: {
    marginTop: helpers.m2,
    width: "80%",
    height: "35%",
    // borderWidth: 2,
    borderRadius: helpers.borderRadius,
    backgroundColor: helpers.blockColor,
  },
  message_type_block: {
    width: "80%",
    marginTop: helpers.m3,
  },
});
