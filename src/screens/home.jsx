import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import categories from "../data/categories.json";
import { colors } from "../global/colors";

const Home = () => {
  return (
    <View style={styles.flatListContainer}>
      <FlatList
        keyExtractor={(element) => element}
        data={categories}
        renderItem={({ item }) => <Text>{item}</Text>}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  flatListContainer: {
    backgroundColor: colors.fifth,
    flexDirection: "column",
    height: "100%",
    width: "100%",
    alignItems: "center",
  },
});
