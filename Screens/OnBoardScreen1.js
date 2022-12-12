import { Button, SafeAreaView, StyleSheet, Text, View } from "react-native";
import React, { useLayoutEffect } from "react";
import { StatusBar } from "expo-status-bar";

const OnBoardScreen1 = () => {
  //   const headerOptions = {
  //     title: "TechSoul Ai",
  //     headerStyle: {
  //       backgroundColor: "#1766c2",
  //     },
  //     headerTintColor: "#fff",
  //     headerTitleStyle: {
  //       fontWeight: "bold",
  //     },
  //   };

  useLayoutEffect(() => {});
  return (
    <View style={styles.container}>
      <StatusBar style="light" hidden={true} />
      <Text style={styles.title}>OnBoardScreen1</Text>
      <Text style={styles.details}>OnBoardScreen1</Text>
      {/* <View style={styles.}>
        <Button title="Get Start" />
        <Button title="Next" />
      </View> */}
    </View>
  );
};

export default OnBoardScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#1766c2",
  },
  title: { color: "#ffffff", fontSize: 30, fontWeight: "600" },
  details: { color: "#ffffff" },

  //   height: "100%",
});
