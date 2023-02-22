import { StatusBar } from "expo-status-bar";
import { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from "react-native";


const LoginPage: FC<{navigation: any}> = ({navigation}) => {

  const [username, onText1Change] = useState<string>();
  const [password, onText2Change] = useState<string>();
  
  const pressHandlerLogin = () => {
    navigation.replace("UserDetailsPage");
  };
  ;
  const pressHandlerSignUp = () => {
    navigation.navigate("SignupPage")
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.userPictureStyle}
        source={require("../assets/avatar-icon-images-4.jpg")}
      ></Image>

      <TextInput
        style={styles.input}
        onChangeText={onText1Change}
        placeholder="username"
        value={username}
      />
      <TextInput
        style={styles.input}
        onChangeText={onText2Change}
        placeholder="password"
        value={password}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={pressHandlerLogin}>
          <Text style={styles.buttonText}>Log In</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={pressHandlerSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
      <View>
        <Text style={styles.text}>or</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  userPictureStyle: {
    marginTop: 10,
    height: 200,
    resizeMode: "contain",
    alignSelf: "center",
    marginBottom: 20,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderRadius: 10,
    marginTop: 20,
  },
  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "baseline",
  },
  button: {
    flex: 1,
    margin: 10,
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
  },
  text: {
    alignSelf: "center",
    marginTop: 15,
  },
});
export default LoginPage;
