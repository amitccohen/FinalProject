import React from "react";
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

const AllPostsPage: FC<{ navigation: any }> = ({ navigation }) => {
  

  return (
    <View style={styles.container}>
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  
});

export default AllPostsPage;
