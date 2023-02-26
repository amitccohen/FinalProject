import React, { FC, useState } from "react";
import {
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  View,
  TextInput,
  Alert,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";
import AuthModel, { Token } from "../model/AuthModel";
import { AsyncStorage } from 'react-native';

const UserDetailsPage: FC<{navigation: any}> = ({navigation}) => {
  const [fullName, setFullName] = useState<string>("John Doe");
  const [profilePicture, setProfilePicture] = useState<string>(
    "https://randomuser.me/api/portraits/men/1.jpg"
  );
  const [isEditingName, setIsEditingName] = useState(false);
  const [tempFullName, setTempFullName] = useState(fullName);

  const handleEditName = () => {
    setIsEditingName(true);
  };

  const handleSaveName = () => {
    setFullName(tempFullName);
    setIsEditingName(false);
  };

  const handleCancelEditName = () => {
    setTempFullName(fullName);
    setIsEditingName(false);
  };

  const handleEditPicture = () => {
    // Handle edit picture functionality
    Alert.alert("Edit Picture");
  };

  const renderName = () => {
    if (isEditingName) {
      return (
        <View style={styles.nameContainer}>
          <TextInput
            style={styles.fullNameInput}
            value={tempFullName}
            onChangeText={(text) => setTempFullName(text)}
          />
          <TouchableOpacity onPress={handleSaveName}>
            <Text style={styles.saveText}>Save</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={handleCancelEditName}>
            <Text style={styles.cancelText}>Cancel</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.nameContainer}>
          <Text style={styles.fullName}>{fullName}</Text>
          <TouchableOpacity onPress={handleEditName}>
            <Text style={styles.editText}>Edit</Text>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.profilePictureContainer}>
        <Image style={styles.profilePicture} source={{ uri: profilePicture }} />
        <View style={styles.editButtonContainer}>
          <TouchableOpacity onPress={handleEditPicture}>
            <AntDesign name="edit" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
      {renderName()}
      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.seeAllPostsButton}
          onPress={() => navigation.navigate("AllPostsPage")}
        >
          <AntDesign name="book" size={24} color="white" />
          <Text style={styles.createPostButtonText}>See All Posts</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.createPostButton}
          onPress={() => navigation.navigate("CreatePostPage")}
        >
          <AntDesign name="plus" size={24} color="white" />
          <Text style={styles.createPostButtonText}>Create Post</Text>
        </TouchableOpacity>
        {/* <TouchableOpacity
          style={styles.logoutButton}
          onPress={async () => {
            const t =  await AsyncStorage.getItem('refreshToken')
            const token: Token = {
              token: t
            }
            await AuthModel.logout(token)
            
            navigation.replace("LoginPage")
          }
        }
        >
          <Text style={styles.logoutButtonText}>Logout</Text>
        </TouchableOpacity> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 20,
    marginTop: 20,
  },
  createPostButton: {
    position: "absolute",
    bottom: 50,
    alignSelf: "center",
    backgroundColor: "blue",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  logoutButton: {
    backgroundColor: '#FF5733',
    borderRadius: 10,
    padding: 10,
    alignSelf: 'center',
    marginTop: 20,
  },
  seeAllPostsButton: {
    backgroundColor: "green",
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
  },
  logoutButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  createPostButtonText: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
    marginLeft: 10,
  },
  profilePictureContainer: {
    marginVertical: 20,
  },
  editButtonContainer: {
    position: "absolute",
    width: 40,
    height: 40,
    borderRadius: 25,
    backgroundColor: "#f5f5f5",
    justifyContent: "center",
    alignItems: "center",
    right: 10,
    bottom: 10,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  cancelText: {
    fontSize: 18,
    color: "blue",
    padding: 5,
    fontWeight: "bold",
    backgroundColor: "#DDDDDD",
    borderRadius: 6,
    margin: 5,
  },
  saveText: {
    fontSize: 18,
    color: "blue",
    padding: 5,
    fontWeight: "bold",
    backgroundColor: "#DDDDDD",
    borderRadius: 6,
  },
  nameContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  fullName: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
  },
  fullNameInput: {
    fontSize: 24,
    fontWeight: "bold",
    marginRight: 10,
    borderBottomWidth: 1,
    borderColor: "black",
    padding: 5,
  },
  editText: {
    fontSize: 18,
    color: "blue",
    padding: 5,
    fontWeight: "bold",
    backgroundColor: "#DDDDDD",
    borderRadius: 6,
    margin: 5,
  },
  buttonsContainer: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#DDDDDD",
    padding: 10,
    borderRadius: 10,
  },
  buttonText: {
    fontSize: 16,
    marginLeft: 5,
  },
  plusIcon: {
    fontSize: 24,
    color: "#000",
  },
  editProfilePictureButton: {
    position: "absolute",
    bottom: 0,
    right: 75,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  editProfilePictureIcon: {
    fontSize: 20,
    color: "black",
  },
});

export default UserDetailsPage;
