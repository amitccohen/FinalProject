import React, { useEffect } from "react";
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
import AuthModel, { User } from "../model/AuthModel";
import { AsyncStorage } from 'react-native';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

//web : 730646438674-patutekf6s1aj89r1f2lojd3qpmbs9bq.apps.googleusercontent.com
// android : 730646438674-qjq8jf548sp6aiv192i79o2rh1db8710.apps.googleusercontent.com
WebBrowser.maybeCompleteAuthSession();


const LoginPage: FC<{ navigation: any }> = ({ navigation }) => {

  const [accessToken,setAccessToken] = useState(null)
  const [user,setUser] = useState(null)
  const [request,response,promptAsync] = Google.useIdTokenAuthRequest({
    clientId: "730646438674-patutekf6s1aj89r1f2lojd3qpmbs9bq.apps.googleusercontent.com",
    androidClientId: "730646438674-patutekf6s1aj89r1f2lojd3qpmbs9bq.apps.googleusercontent.com"
  })



  const [username, onText1Change] = useState<string>("");
  const [name, onText4Change] = useState<string>("");
  const [password, onText2Change] = useState<string>("");
  const [avatarUri, setAvatrUri] = useState("")
  useEffect(() => {

    if(response?.type === "success" ) {
      setAccessToken(response.authentication.accessToken);
    }
    accessToken && fetchUserInfo();


    AsyncStorage.getItem('refreshToken').then(async token => {
      if (token) {
        navigation.replace("UserDetailsPage");
      }
    });
  }, [navigation,response,accessToken]);

  const fetchUserInfo = async () => {
    let response = await fetch("https://www.googleapis.com/userinfo/v2/me",{
      headers: { Authorization: `Bearer ${accessToken}`}
    });
    const userInfo = await response.json();
    setUser(userInfo);
    console.log(user.picture)
  }

  const pressHandlerLogin = async () => {
    const user: User = {
      email: username,
      name: name,
      password: password,
      avatarUrl: avatarUri
    };
    const d = await AuthModel.login(user)
    .then(async (data) => {
      if (typeof(data) === 'undefined') {
        console.log('login failed:', data);
        Alert.alert("Wrong username or password")
      } else {
        console.log('login successful:', data);
        await AsyncStorage.setItem('accessToken', data[0]);
        await AsyncStorage.setItem('id', data[1]);
        await AsyncStorage.setItem('refreshToken', data[2]);
        navigation.replace("UserDetailsPage");
      }
    })
    .catch((err) => {
      console.log('login failed:', err);
      });
  };

  const pressHandlerSignUp = () => {
    navigation.navigate("SignupPage");
  };

  return (
    <View style={styles.container}>
      <Image
        style={styles.userPictureStyle}
        source={require("../assets/logoNew.png")}
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
        secureTextEntry={true}
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
      <TouchableOpacity>
        <Text style={styles.text} onPress={()=>{promptAsync();}}>Login with Google</Text>
      </TouchableOpacity>
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