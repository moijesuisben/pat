import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { StyleSheet } from "react-native";
import * as variables from "../../variables";
import * as helpers from "../../helpers";
import SearchIcon from "../../icon/search.svg";
import CloseIcon from "../../icon/close.svg";

const useStyles = StyleSheet.create({
  searchbar_container: {
    backgroundColor: helpers.blockColor,
    borderRadius: helpers.borderRadius,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginVertical: helpers.m4,
    padding: helpers.m2,
  },
  searchbar_content: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  searchbar_content_text: {
    marginLeft: helpers.m2,
    fontFamily: variables.ff_light,
    fontSize: variables.fs_small,
    color: helpers.textColor,
    opacity: 0.3,
  },
});

export default function Searchbar() {
  const classes = useStyles;
  return (
    <View style={classes.searchbar_container}>
      <View style={classes.searchbar_content}>
        <SearchIcon />
        <Text style={classes.searchbar_content_text}>
          Je suis la barre de recherche
        </Text>
      </View>
      <View style={classes.searchbar_erase}>
        <CloseIcon height="14" />
      </View>
    </View>
  );
}
