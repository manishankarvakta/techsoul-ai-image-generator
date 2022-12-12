import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OBScreen1 from "./Screens/OBScreen1";
import OBScreen2 from "./Screens/OBScreen2";
import OBScreen3 from "./Screens/OBScreen3";
import HomeScreen from "./Screens/HomeScreen";

export default function App({ navigation }) {
  const Stack = createNativeStackNavigator();

  const globalOptions = {
    title: "TechSoul Ai",
    headerStyle: {
      backgroundColor: "#1766c2",
    },
    headerTintColor: "#fff",
    headerTitleStyle: {
      fontWeight: "bold",
    },
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={globalOptions}>
        {/* initialRouteName="Home" */}
        <Stack.Screen
          name="OBScreen1"
          options={{ headerShown: false }}
          component={OBScreen1}
          // options={{ title: "" }}
        />
        <Stack.Screen
          name="OBScreen2"
          options={{ headerShown: false }}
          component={OBScreen2}
        />
        <Stack.Screen
          name="OBScreen3"
          options={{ headerShown: false }}
          component={OBScreen3}
        />
        <Stack.Screen name="Home" component={HomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
