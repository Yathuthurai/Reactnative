import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";
import { Avatar } from "react-native-paper";
import { useDispatch, useSelector } from "react-redux";
import * as Animatable from "react-native-animatable";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import { addToFavorite } from "../Store/Actions/articles";

const ArticleCard = ({ id, navigation }) => {
  const [data, setData] = React.useState({
    isFavorite: false,
  });

  const dispatch = useDispatch();

  const fav = useSelector((state) =>
    state.article.favPosts.some((post) => post.id === id)
  );

  const favoriteAdd = async () => {
    await dispatch(addToFavorite(id));
    // setData({
    //   ...data,
    //   isFavorite: !data.isFavorite,

    // });
  };

  // const commentHandler = (id) => {
  //   navigation.navigate("ArticleCardFullView", { id });
  // };

  return (
    <View style={styles.bottomRow}>
      <View style={styles.sourceContainer}>
        <FontAwesome name="comments" style={styles.comment_icon} size={30} />
        <TouchableOpacity>
          <Text style={styles.comment_text}>Comment</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={favoriteAdd}>
          {fav ? (
            <FontAwesome style={styles.starFav_icon} name="star" size={25} />
          ) : (
            <FontAwesome style={styles.star_icon} name="star" size={25} />
          )}
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ArticleCard;

const styles = StyleSheet.create({
  sourceContainer: {
    width: "50%",
    flexDirection: "row",
  },
  bottomRow: {
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  comment_icon: {
    color: "grey",
    paddingTop: 5,
  },
  star_icon: {
    color: "grey",
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  starFav_icon: {
    color: "dodgerblue",
    paddingTop: 10,
    paddingHorizontal: 15,
  },
  comment_text: {
    color: "grey",
    paddingTop: 10,
    fontSize: 16,
    paddingHorizontal: 5,
  },
});
