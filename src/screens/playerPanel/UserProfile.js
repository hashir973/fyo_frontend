import { StatusBar } from "expo-status-bar";
import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer } from "@react-navigation/native";
import { useState , useEffect , useContext } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
  SafeAreaView,
} from "react-native";

//icons import
import {
  Ionicons,
  AntDesign,
  Feather,
  FontAwesome,
  Entypo,
} from "react-native-vector-icons";

// imports
import { LinearGradient } from "expo-linear-gradient";
import { Avatar } from "react-native-paper";
import { useTheme } from "@react-navigation/native";
import { ScrollView } from "react-native-gesture-handler";
import CustomButton1 from "../../components/CustomButton1";
import {AsyncStorage} from 'react-native';
import { profileContext } from "../../components/context/context";


//import
import { windowHeight, windowWidth } from "../../config/dimensions";
import images from "../../config/images";
import { sizes } from "../../config/sizes";

import { useDispatch } from "react-redux";
import { UnSetUser } from "../../store/actions/authAction";

const curve_height = windowHeight * 0.17;
const LOGO_SIZE = windowHeight * 0.15;
const IMAGE_SIZE1 = windowHeight * 0.04;
const CARD_WIDTH = windowWidth * 0.95;
const CARD_HEIGHT = windowHeight * 0.07;
const button_margin = windowWidth * 0.26;

const UserProfile = (props) => {
  const dispatch = useDispatch();
  const { colors } = useTheme();

  //   const [text, onChangeText] = React.useState("Useless Text");
  //   const [number, onChangeNumber] = React.useState(null);
  const handleLogout = async () => {
    await AsyncStorage.removeItem("Profile");
    alert("Logout Sucessfully.")
    props.navigation.navigate("LoginScreen")
  }

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={["rgba(255,255,255,0.6)", "#2BB789"]}>
        <View style={{ height: curve_height }}></View>
      </LinearGradient>

      <View
        style={{
          marginTop: sizes.m35 * -1,
          backgroundColor: colors.white,
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          flex: 1,
        }}
      >
        <View style={styles.profile}>
          <Avatar.Image
            size={LOGO_SIZE}
            source={images.logo}
            style={{
              marginTop: LOGO_SIZE * 0.5 * -1,
              // borderColor: colors.primary,
              // borderWidth: 5
            }}
          />
          <Text
            style={{
              alignSelf: "center",
              fontSize: sizes.h4,
              fontWeight: "bold",
              margin: sizes.m8,
              color: "#2BB789",
            }}
          >
            Email ranaldo@agmail.com{" "}
          </Text>
          <View style={{ marginTop: sizes.m3 }}>
            <CustomButton1
              textColor="white"
              btnLabel="View Profile"
              Press={() => props.navigation.navigate("Profile")}
              myStyle={{
                alignSelf: "flex-end",
              }}
            />
          </View>
        </View>

        <TouchableOpacity
        onPress={() => handleLogout()}
        >
          <View style={styles.card}>
            <View style={{ flexDirection: "row", margin: sizes.m10 }}>
              <View>
                <AntDesign
                  name="logout"
                  size={IMAGE_SIZE1}
                  color="#2BB789"
                  resizeMode="contain"
                />
              </View>
              <View style={{ alignSelf: "center", marginLeft: button_margin }}>
                <Text
                  style={{
                    fontSize: sizes.h1,
                    fontWeight: "bold",
                    color: "#2BB789",
                  }}
                >
                  {" "}
                  Logout
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
  logo: {
    // marginLeft: CARD_WIDTH,
    // marginTop: sizes.m5,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // paddingRight: sizes.m10,
    // position: 'absolute',
  },

  profile: {
    // flexDirection: "row",
    // backgroundColor: "yellow",
    // alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
    // paddingTop: 3,
    // flex: 1,
  },

  image_text: {
    alignSelf: "center",
    paddingTop: sizes.m8,
    fontSize: 15,
    fontWeight: "bold",
    color: "#2BB789",
  },

  card: {
    width: CARD_WIDTH,
    height: CARD_HEIGHT,
    marginTop: sizes.m35,
    borderRadius: sizes.m15,
    borderColor: "#2bb789",
    backgroundColor: "#fff",
    borderWidth: 0.5,
    alignSelf: "center",
  },
});
