import { StatusBar } from "expo-status-bar";
import { FC } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import LoginPage from "./components/LoginPage";
import SignupPage from "./components/SignupPage";
import UserDetailsPage from "./components/UserDetailsPage";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

const UserDetailsHeaderTitle: FC = () => {

  return(
    <TouchableOpacity>
      <Text>User Details</Text>
    </TouchableOpacity>
  )
}

const App: FC = () => {
  const clickHandler = () => {
    alert("Clicked");
  };
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ title: "Apply to all" }}>
        <Stack.Screen
          name="LoginPage"
          component={LoginPage}
          options={{ title: "Login" }}
        ></Stack.Screen>
        <Stack.Screen
          name="SignupPage"
          component={SignupPage}
          options={{ title: "Signup" }}
        ></Stack.Screen>
        <Stack.Screen
          name="UserDetailsPage"
          component={UserDetailsPage}
          options={{ headerTitle: () => <UserDetailsHeaderTitle />,
          headerRight: () => (
            <Button
              onPress={() => alert('clicked')}
              title="Edit"
              color="gray"
            />
          ) }}
        ></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  textStyle: {
    color: "green",
    fontWeight: "bold",
    fontSize: 50,
  },
});

export default App;