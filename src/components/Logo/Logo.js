import React from "react";
import { Image, TouchableOpacity } from "react-native";

export default function Logo({ navigation }) {
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Home")}>
      <Image
        style={{ width: 100, height: 40 }}
        source={require("../../../assets/logo/logoFull/logoFull.png")}
      />
    </TouchableOpacity>
  );
}
