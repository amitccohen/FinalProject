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

const SignupPage: FC = () => {
  const [username, onText1Change] = useState<string>("");
  const [password, onText2Change] = useState<string>("");
  const [confirmPassword, onText3Change] = useState<string>("");
  const [passwordsMatch, setPasswordsMatch] = useState<boolean>(true);

  const pressHandlerSignUp = () => {
    alert("Clicked " + username + " " + password + " " + confirmPassword);
  };

  const onConfirmPasswordChange = (text: string) => {
    onText3Change(text);
    setPasswordsMatch(text === password);
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
        secureTextEntry={true}
      />
      <TextInput
        style={[styles.input, !passwordsMatch ? styles.inputError : null]}
        onChangeText={onConfirmPasswordChange}
        placeholder="confirm password"
        value={confirmPassword}
        secureTextEntry={true}
      />

      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={pressHandlerSignUp}>
          <Text style={styles.buttonText}>Sign Up</Text>
        </TouchableOpacity>
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
  inputError: {
    borderColor: "red",
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
    padding: 5,
    borderRadius: 10,
  },
  buttonText: {
    padding: 10,
  },
});

export default SignupPage;
