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

const UserDetailsPage: FC = () => {
  const [fullName, setFullName] = useState<string>("John Doe");
  const [profilePicture, setProfilePicture] = useState<string>(
    "https://randomuser.me/api/portraits/men/1.jpg"
  );

  const handleEditName = () => {
    // Handle edit name functionality
    Alert.alert("Edit Name");
  };

  const handleEditPicture = () => {
    // Handle edit picture functionality
    Alert.alert("Edit Picture");
  };

  return (
    <View style={styles.container}>
      <View style={styles.profilePictureContainer}>
        <TouchableOpacity onPress={handleEditPicture}>
          <Image
            style={styles.profilePicture}
            source={{ uri: profilePicture }}
          />
        </TouchableOpacity>
      </View>
      <View style={styles.nameContainer}>
        <Text style={styles.fullName}>{fullName}</Text>
        <TouchableOpacity onPress={handleEditName}>
          <Text style={styles.editText}>Edit</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonsContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('button works')}>
          <Text style={styles.buttonText}>Create Post</Text>
        </TouchableOpacity>
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
  profilePictureContainer: {
    marginVertical: 20,
  },
  profilePicture: {
    width: 150,
    height: 150,
    borderRadius: 75,
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
  editText: {
    fontSize: 18,
    color: "blue",
  },
  buttonsContainer: {
    flexDirection: "row",
    alignSelf: "baseline",
    marginTop: 80,
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
});

export default UserDetailsPage;
