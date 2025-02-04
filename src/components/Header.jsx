import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { colors } from "../global/colors";

const Header = ({ title = "Hola!" }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.texto}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.forth,
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    width: "100%",
  },
  texto: {
    color: "#fff",
  },
});
