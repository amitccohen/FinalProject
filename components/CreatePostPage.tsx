import React, { useEffect, useState } from "react";
import { FC } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from "react-native";
import * as ImagePicker from 'expo-image-picker';
import UserModel from "../model/UserModel";



const CreatePostPage: FC<{navigation: any}> = ({navigation}) => {
  
  const [description, setDescription] = useState("");
  const [avatarUri, setAvatrUri] = useState("")

  const askPermission = async() =>{
    try{
      const ress = await ImagePicker.getCameraPermissionsAsync()
      if(!ress.granted){
        alert("camera permission required")
      }
    }catch(err){
      console.log('ask permission failed ' + err)
    }
  }

  useEffect(()=>{
    askPermission()
  },[])


  const handleChoosePhoto = async () => {
    try{
      const res = await ImagePicker.launchImageLibraryAsync()
      if(!res.canceled && res.assets.length > 0){
        const uri = res.assets[0].uri;
        setAvatrUri(uri)
      }
    }catch(err){
      console.log("open camera error" + err)
    }
  };

  const handleTakePhoto = async () => {
    try{
      const res = await ImagePicker.launchCameraAsync()
      if(!res.canceled && res.assets.length > 0){
        const uri = res.assets[0].uri;
        setAvatrUri(uri)
      }
    }catch(err){
      console.log("open camera error" + err)
    }
  };

  const handlePost = async () => {
    if (avatarUri != "") {
      const url = await UserModel.uploadImage(avatarUri)
    }
    Alert.alert("Your Post is Live!\n", `Description: ${description}`);
    navigation.goBack()
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={handleChoosePhoto}>
        <View style={styles.imageContainer}>
          {avatarUri && <Image source={{uri:avatarUri}} style={styles.image} />}
          {!avatarUri && <Text style={styles.choosePhotoText}>Choose Photo</Text>}
        </View>
      </TouchableOpacity>
      <TouchableOpacity onPress={handleTakePhoto}>
        <Text style={styles.takePhotoText}>Take Photo</Text>
      </TouchableOpacity>
      <TextInput
        style={styles.descriptionInput}
        placeholder="Describe the picture"
        value={description}
        onChangeText={setDescription}
      />
      <TouchableOpacity style={styles.postButton} onPress={handlePost}>
        <Text style={styles.postButtonText}>POST</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  imageContainer: {
    backgroundColor: "#f0f0f0",
    width: 300,
    height: 300,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  choosePhotoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#999",
  },
  takePhotoText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007aff",
    marginBottom: 20,
  },
  descriptionInput: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 5,
    padding: 10,
    width: "80%",
    marginBottom: 20,
  },
  postButton: {
    backgroundColor: "#007aff",
    padding: 10,
    borderRadius: 5,
  },
  postButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default CreatePostPage;