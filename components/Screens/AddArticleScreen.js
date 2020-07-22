import React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  Platform,
  StyleSheet,
  StatusBar,
  Alert,
} from "react-native";

import { Avatar } from "react-native-paper";

import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Feather from "react-native-vector-icons/Feather";
import SearchbarElement from "../MainpageComponents/SearchbarElement";
import { Divider, TextInput } from "react-native-paper";
//import TextInputArticle from "../shared/TextInputArticle";

const AddArticleScreen = ({ navigation }) => {
  const [text1, setText1] = React.useState("");
  const [text2, setText2] = React.useState("");
  const [text3, setText3] = React.useState("");
  const [text4, setText4] = React.useState("");
  return (
    <View style={styles.container}>
      <Animatable.View animation="bounceIn" style={styles.btn_group_container}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesome name="user" color="dodgerblue" size={33} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <FontAwesome name="home" color="dodgerblue" size={33} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Favourites")}>
          <FontAwesome name="star" color="dodgerblue" size={33} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Add")}>
          <FontAwesome name="plus-circle" color="dodgerblue" size={33} />
        </TouchableOpacity>
      </Animatable.View>
      <View style={styles.add_article_container}>
        <View style={{ paddingTop: 50 }}>
          <Text style={styles.inputHeading}>Add your Article title here</Text>
          <View>
            <TextInput
              label="Title"
              value={text1}
              onChangeText={(text1) => setText1(text1)}
              underlineColor="dodgerblue"
              mode="outlined"
              dense="true"
              style={{ backgroundColor: "white" }}
            />
          </View>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.inputHeading}>Add your Image url here</Text>
          <View>
            <TextInput
              label="ImgUrl"
              value={text2}
              onChangeText={(text2) => setText2(text2)}
              underlineColor="dodgerblue"
              mode="outlined"
              dense="true"
              style={{ backgroundColor: "white" }}
            />
          </View>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.inputHeading}>Add your Article Content here</Text>
          <View>
            <TextInput
              label="Reference"
              value={text3}
              onChangeText={(text3) => setText3(text3)}
              mode="outlined"
              dense="true"
              numberOfLines={200}
              style={{ backgroundColor: "white" }}
            />
          </View>
        </View>
        <View style={{ paddingTop: 20 }}>
          <Text style={styles.inputHeading}>Add your Reference Links here</Text>
          <View>
            <TextInput
              label="Reference"
              value={text4}
              onChangeText={(text4) => setText4(text4)}
              mode="outlined"
              dense="true"
              style={{ backgroundColor: "white" }}
            />
          </View>
        </View>
        <View style={{ alignItems: "center", paddingVertical: 20 }}>
          <TouchableOpacity
            style={styles.button_go}
            onPress={() =>
              Alert.alert("Confirm", "Are you going to post this Article ?", [
                { text: "Post", onPress: () => navigation.navigate("Home") },
                { text: "Cancel" },
              ])
            }
          >
            <Text style={styles.goBtntxt}>POST</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default AddArticleScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "whitesmoke",
    justifyContent: "flex-start",
    paddingHorizontal: 20,
    paddingBottom: 50,
    paddingTop: 50,
  },
  btn_group_container: {
    paddingTop: 2,
    alignSelf: "center",
    flexDirection: "row",
    justifyContent: "space-between",
    width: "75%",
  },
  add_article_container: {
    paddingTop: 25,
  },
  textInput: {
    marginTop: Platform.OS === "ios" ? 0 : -12,
    paddingLeft: 5,
    paddingTop: 8,
    color: "#05375a",
  },
  inputHeading: {
    fontSize: 16,
    color: "grey",
    fontWeight: "700",
  },
  button_go: {
    width: 100,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 50,
    flexDirection: "row",
    borderColor: "dodgerblue",
    backgroundColor: "dodgerblue",
    borderWidth: 1,
    marginTop: 20,
  },
  goBtntxt: {
    color: "white",
    fontSize: 17,
    fontWeight: "bold",
  },
});
