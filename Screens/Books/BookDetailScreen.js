import React from "react";
import {
  Dimensions,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import SPACING from "../../config/SPACING";
import { Ionicons, FontAwesome5, FontAwesome } from "@expo/vector-icons";
import colors from "../../config/Books/colors";
import { useNavigation } from "@react-navigation/native";
import { useCart } from "./CardContext";
import { addDoc, collection } from "firebase/firestore";
import books from "../../config/Books/books";

const BookDetailScreen = ({ route }) => {
  const navigation = useNavigation();
  const { addToCart } = useCart();
  const { id } = route.params;
  const book = books.find((item) => item.id === id);

  if (!book) {
    // Handle case when book with given id is not found
    return null;
  }

  const { name, rating, author, price, description, image } = book;

  const handleAddToCart = () => {
    const { name, price } = book;
    addToCart({ name, price });
  };

  return (
    <>
      <ScrollView>
        <View>
          <ImageBackground
            style={{
              padding: SPACING * 2,
              height: Dimensions.get("window").height / 2.5,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
            source={image}
          >
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{
                height: SPACING * 4.5,
                width: SPACING * 4.5,
                backgroundColor: colors.white,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: SPACING * 2.5,
                marginTop: 18
              }}
            >
              <Ionicons
                name="arrow-back"
                size={SPACING * 2.5}
                color={colors.gray}
              />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => navigation.navigate('Cart')}
              style={{
                height: SPACING * 4.5,
                width: SPACING * 4.5,
                backgroundColor: colors.white,
                justifyContent: "center",
                alignItems: "center",
                borderRadius: SPACING * 2.5,
                marginTop: 18
              }}
            >
              <Ionicons name="cart" size={SPACING * 2.5} color={colors.gray} />
            </TouchableOpacity>
          </ImageBackground>
          <View
            style={{
              padding: SPACING * 2,
              paddingTop: SPACING * 3,
              marginTop: -SPACING * 3,
              borderTopLeftRadius: SPACING * 3,
              borderTopRightRadius: SPACING * 3,
              backgroundColor: colors.white,
              height: 420,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                marginBottom: SPACING * 3,
                alignItems: "center",
              }}
            >
              <View style={{ width: "70%" }}>
                <Text
                  style={{
                    fontSize: SPACING * 3,
                    color: colors.black,
                    fontWeight: "700",
                  }}
                >
                  {name}
                </Text>
              </View>
              <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 3,
                  backgroundColor: colors.yellow,
                  flexDirection: "row",
                  borderRadius: SPACING,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Ionicons
                  name="star"
                  color={colors.black}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.6,
                    fontWeight: "600",
                    marginLeft: SPACING / 2,
                    color: colors.black,
                  }}
                >
                  {rating}
                </Text>
              </View>
            </View>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                paddingHorizontal: 5,
              }}
            >
              <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 2,
                  backgroundColor: colors.light,
                  flexDirection: "row",
                  borderRadius: SPACING,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome5 
                  name="pen-fancy" 
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.6,
                    fontWeight: "600",
                    marginLeft: SPACING / 2,
                    color: colors.gray,
                  }}
                >
                   {author}
                </Text>
              </View>
              <View
                style={{
                  padding: SPACING,
                  paddingHorizontal: SPACING * 2,
                  backgroundColor: colors.light,
                  flexDirection: "row",
                  borderRadius: SPACING,
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <FontAwesome
                  name="rupee"
                  color={colors.gray}
                  size={SPACING * 1.7}
                />
                <Text
                  style={{
                    fontSize: SPACING * 1.6,
                    fontWeight: "600",
                    marginLeft: SPACING / 2,
                    color: colors.gray,
                  }}
                >
                  Price: {price}
                </Text>
              </View>
            </View>

            <View style={{ marginVertical: SPACING * 3 }}>
              <Text
                style={{
                  fontSize: SPACING * 2,
                  fontWeight: "700",
                  color: colors.dark,
                  marginBottom: SPACING,
                }}
              >
                Description
              </Text>
              <Text
                style={{
                  fontSize: SPACING * 1.7,
                  fontWeight: "500",
                  color: colors.gray,
                }}
              >
                {description}
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
      <SafeAreaView>
        <View style={{ padding: SPACING * 2, backgroundColor: "white" }}>
          <TouchableOpacity
            onPress={() => {
              handleAddToCart();
              navigation.navigate('Cart'); 
            }}
            style={{
              width: "100%",
              padding: SPACING * 2,
              backgroundColor: colors.black,
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              borderRadius: SPACING * 2,
            }}
          >
            <Text
              style={{
                fontSize: SPACING * 2,
                color: colors.white,
                fontWeight: "700",
              }}
            >
              Add to Cart
            </Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </>
  );
};

export default BookDetailScreen;

const styles = StyleSheet.create({});
