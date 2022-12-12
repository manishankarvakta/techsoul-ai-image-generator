import { StyleSheet, Text, View } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import { Button, Icon, Image } from "@rneui/themed";

const OBScreen1 = ({ navigation }) => {
  // const getStart =
  return (
    <View style={styles.container}>
      <StatusBar hidden={true} />
      {/* <Image
        source={require("../assets/icon.png")}
        style={{ height: 100, width: 100 }}
      /> */}
      <Text style={styles.title}>OBScreen1</Text>
      <Text style={styles.details}>OBScreen1</Text>

      <View style={styles.buttonGroup}>
        <Button
          title="Get Start"
          type="outline"
          buttonStyle={{
            borderColor: "#ffffff",
            borderWidth: 1,
            marginRight: 5,
          }}
          titleStyle={{
            color: "white",
          }}
          onPress={() => navigation.replace("Home")}
        />
        <Button
          title="Next"
          color="grye4"
          buttonStyle={{
            borderColor: "rgba(255, 193, 7, 1)",
            borderWidth: 1,
            backgroundColor: "rgba(255, 193, 7, 1)",
          }}
          titleStyle={{
            color: "#1766c2",
          }}
          onPress={() => navigation.navigate("OBScreen2")}
        >
          Next <Icon name="user" type="ant-design" color="#1766c2" />
        </Button>
      </View>
    </View>
  );
};

export default OBScreen1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#1766c2",
  },
  title: {
    color: "#fff",
    fontSize: 30,
  },
  details: {
    color: "#fff",
    fontSize: 16,
  },
  buttonGroup: { flexDirection: "row", position: "absolute", bottom: 100 },
});
