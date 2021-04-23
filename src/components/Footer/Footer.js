import React from "react";
import { View, Text, StyleSheet } from "react-native";
import SOSButton from "../Buttons/SOS/SOSButton";
import Menu from "../Menu/Menu";
import MenuOpen from "../Menu/MenuOpen";

const useStyles = StyleSheet.create({
  footer_container: {
    position: "absolute",
    bottom: 0,
    width: "100%",
  },
});

export default function Footer() {
  const classes = useStyles;
  const [open, setOpen] = React.useState(false);

  const openMenu = () => {
    setOpen(true);
  };

  const closeMenu = () => {
    setOpen(false);
  };

  return (
    <View style={classes.footer_container}>
      {!open ? (
        <>
          <Menu onPress={openMenu} />
          <SOSButton />
        </>
      ) : (
        <MenuOpen onPress={closeMenu} />
      )}
    </View>
  );
}
