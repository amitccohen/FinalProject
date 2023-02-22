import { StatusBar } from 'expo-status-bar';
import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import LoginPage from './components/LoginPage';
import SignupPage from './components/SignupPage';
import UserDetailsPage from './components/UserDetailsPage';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const Stack = createNativeStackNavigator();

const App: FC = () => {
  const clickHandler = () =>{
    alert('Clicked')
  }
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ title: "Apply to all" }}>
        <Stack.Screen name="LoginPage" component={LoginPage}></Stack.Screen>
        <Stack.Screen name="SignupPage" component={SignupPage}></Stack.Screen>
        <Stack.Screen name="UserDetailsPage" component={UserDetailsPage}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  textStyle: {
    color: 'green',
    fontWeight: 'bold',
    fontSize: 50
  }
});


export default App;