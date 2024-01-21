import {
  ImageBackground,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import React from "react";
import colors from "../../config/Books/colors";
import SPACING from "../../config/SPACING";
import { useNavigation } from "@react-navigation/native";

const WelcomeScreen = () => {
  const navigation = useNavigation();
  return (
    
    <ImageBackground
      style={{ flex: 1 }}
      source={require("../../assets/1.jpg")}
    >
      <View style={{ flex: 1, backgroundColor: colors.black, opacity: 0.2 }} />
      <View
        style={{
          position: "absolute",
          height: "100%",
          zIndex: 2,
          width: "100%",
          justifyContent: "flex-end",
          paddingHorizontal: SPACING * 2,
          paddingBottom: SPACING * 5,
        }}
      >
        <View>
          <Text
            style={{
              color: colors.white,
              fontWeight: "800",
              fontSize: 45,
              textTransform: "capitalize",
            }}
          >
            Let your favorite Book find you
          </Text>
          <Text
            style={{
              color: colors.white,
              fontWeight: "600",
              fontSize: SPACING * 1.7,
            }}
          >
            Explore the world of Books!
          </Text>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate('Home')
            }}
            style={{
              padding: SPACING * 2,
              backgroundColor: colors.white,
              borderRadius: SPACING * 2,
              alignItems: "center",
              marginTop: SPACING * 3,
            }}
          >
            <Text
              style={{
                color: colors.black,
                fontSize: SPACING * 2,
                fontWeight: "700",
              }}
            >
              Explorer Now
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ImageBackground>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({});
