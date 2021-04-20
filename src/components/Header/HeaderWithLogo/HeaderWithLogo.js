import React from "react";
import { Image } from "react-native";

export default function Logo() {
  return (
    <Image
      style={{ width: 100, height: 40 }}
      source={require("../../../assets/logo/logoFull/logoFull.png")}
    />
  );
}
