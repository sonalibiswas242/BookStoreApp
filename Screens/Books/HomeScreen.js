import React, { useState } from "react";
import {
  Image,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Dimensions,
} from "react-native";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import SPACING from "../../config/SPACING";
import colors from "../../config/Books/colors";
import DATA from "../../config/Books/DATA";
import { useNavigation } from "@react-navigation/native";
import { FlatList } from "react-native-gesture-handler";
const { width } = Dimensions.get("window");

const ITEM_WIDTH = width / 2 - SPACING * 3;

const HomeScreen = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [searchText, setSearchText] = useState('');
  const navigation = useNavigation();

  const filteredBooks = DATA[activeCategory].books.filter((item) => {
    const lowerCaseSearchText = searchText.toLowerCase();
    const itemName = item.name ? item.name.toLowerCase() : '';
    const itemAuthor = item.author ? item.author.toLowerCase() : '';

    return (
      itemName.includes(lowerCaseSearchText) ||
      itemAuthor.includes(lowerCaseSearchText)
    );
  });

  return (
    <SafeAreaView>
      <ScrollView>
        <View style={{ padding: SPACING * 2, marginTop: 30 }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <View style={{ flexDirection: "row", alignItems: "center" }}>
              <TouchableOpacity>
                <Ionicons
                  name="menu"
                  size={SPACING * 3.5}
                  color={colors.dark}
                />
              </TouchableOpacity>
            </View>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Cart");
              }}
              style={{ marginRight: SPACING }}
            >
              <AntDesign
                name="shoppingcart"
                size={SPACING * 3.5}
                color={colors.dark}
              />
            </TouchableOpacity>
          </View>
          <View style={{ width: "100%", marginTop: SPACING * 2 }}>
            <Text style={{ fontSize: 25, fontWeight: "700", color: "#495057" }}>
              Welcome to Bookstore
            </Text>
          </View>
          <View
            style={{
              flexDirection: "row",
              backgroundColor: "#dee2e6",
              marginVertical: SPACING * 3,
              padding: SPACING * 1.5,
              borderRadius: SPACING,
            }}
          >
            <Ionicons name="search" color={colors.gray} size={SPACING * 2.7} />
            <TextInput
              placeholder="Search a Book"
              placeholderTextColor={colors.gray}
              style={{
                color: colors.gray,
                fontSize: SPACING * 2,
                marginLeft: SPACING,
              }}
              value={searchText}
              onChangeText={(text) => setSearchText(text)}
            />
          </View>

          <View
            style={{
              flexDirection: "row",
              flexWrap: "wrap",
              justifyContent: "space-between",
              marginVertical: SPACING * 2,
            }}
          >
            {filteredBooks.map((item) => (
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate("BookDetail", { id: item.id });
                }}
                style={{ width: ITEM_WIDTH, marginBottom: SPACING * 2 }}
                key={item.id}
              >
                <Image
                  style={{
                    width: "100%",
                    height: ITEM_WIDTH + SPACING * 3,
                    borderRadius: SPACING * 2,
                  }}
                  source={item.image}
                />
                <Text
                  style={{
                    fontSize: SPACING * 2,
                    fontWeight: "700",
                    marginTop: SPACING,
                  }}
                >
                  {item.name}
                </Text>
                <Text
                  style={{
                    fontSize: SPACING * 1.5,
                    color: colors.gray,
                    marginVertical: SPACING / 2,
                  }}
                >
                  Author: {item.author}
                </Text>
                <Text style={{ fontSize: SPACING * 2, fontWeight: "700" }}>
                  Rs. {item.price}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({});
