import React from "react";
import { Image, Text, View } from "react-native";
import { StyleSheet } from "react-native";
import * as variables from "../../variables";
import * as helpers from "../../helpers";
import CloseIcon from "../../icon/close.svg";
import { SvgUri } from "react-native-svg";

const useStyles = StyleSheet.create({
  notification_container: {
    width: "100%",
    minHeight: 10,
    backgroundColor: variables.athensGray,
    borderRadius: helpers.borderRadius,
    paddingHorizontal: helpers.m2,
    paddingTop: helpers.m3,
    paddingBottom: helpers.m2,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "baseline",
    marginBottom: helpers.m2,
  },
  notification_message: {
    fontFamily: variables.ff_light,
    fontSize: variables.fs_small,
    marginBottom: helpers.m3,
  },
  notification_date: {
    fontFamily: variables.ff_light,
    fontSize: variables.fs_extra_small,
  },
  notification_close: {
    height: 50,
    width: 50,
  },
});

export default function Notification({ message, date }) {
  const classes = useStyles;
  return (
    <View style={classes.notification_container}>
      <View>
        <Text style={classes.notification_message}>{message}</Text>
        <Text style={classes.notification_date}>{date}</Text>
      </View>
      <CloseIcon height={14} width={14} />
    </View>
  );
}
