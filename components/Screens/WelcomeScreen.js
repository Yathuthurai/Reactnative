import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Image,
} from "react-native";

import * as Animatable from "react-native-animatable";
import LinearGradient from "react-native-linear-gradient";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { useTheme } from "@react-navigation/native";

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Animatable.Image
          animation="bounceIn"
          source={require("../../assets/logo.png")}
          style={styles.logo}
          resizeMode="stretch"
        />
        <Text style={styles.text_header}>Vista</Text>
      </View>
      <Animatable.View style={styles.footer} animation="fadeInUpBig">
        <Text style={styles.title}>
          Share your knowledge with Everyone in Vista!
        </Text>
        <Text style={styles.text}>Sign In with account</Text>
        <View style={styles.button}>
          <TouchableOpacity style={styles.signIn}>
            <Text
              style={styles.textSign}
              onPress={() => navigation.navigate("SignIn")}
            >
              Get Started
            </Text>
            <MaterialIcons name="navigate-next" color="#fff" size={20} />
          </TouchableOpacity>
        </View>
        <Text style={styles.text}>Project by:</Text>
        <Text style={styles.textIntro}>T.Yathurshan</Text>
        <Text style={styles.textIntro}>17001986</Text>
      </Animatable.View>
    </View>
  );
};

export default WelcomeScreen;

const { height } = Dimensions.get("screen");
const height_logo = height * 0.28;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "dodgerblue",
  },
  header: {
    flex: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  footer: {
    flex: 1,
    backgroundColor: "#fff",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingVertical: 50,
    paddingHorizontal: 30,
  },
  logo: {
    width: height_logo,
    height: height_logo,
  },
  title: {
    color: "#05375a",
    fontSize: 26,
    fontWeight: "bold",
  },
  text: {
    color: "grey",
    marginTop: 5,
  },
  textIntro: {
    color: "black",
    marginTop: 5,
    fontSize: 16,
    fontWeight: "700",
  },
  button: {
    alignItems: "flex-end",
    marginTop: 10,
  },
  signIn: {
    width: 150,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    backgroundColor: "dodgerblue",
  },
  textSign: {
    color: "white",
    fontWeight: "bold",
  },
  text_header: {
    color: "powderblue",
    fontWeight: "bold",
    fontSize: 35,
  },
  text_des: {
    color: "powderblue",
    fontWeight: "bold",
    fontSize: 16,
    justifyContent: "flex-start",
  },
});
