import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import OnBoardScreen1 from "./Screens/OnBoardScreen1";

export default function App() {
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
          name="On Board Screen"
          options={{ headerShown: false }}
          component={OnBoardScreen1}
        />
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
