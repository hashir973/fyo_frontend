import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  TextInput,
  TouchableOpacity,
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
import { Avatar } from "react-native-paper";
import { windowHeight, windowWidth } from "../../config/dimensions";
import images from "../../config/images";
import { sizes } from "../../config/sizes";
import { useTheme } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

//import
import CustomSwitch from "../../components/CustomSwitch";
import PlayerTeam from "../../components/PlayerProfile/PlayerTeam";
import PlayerStatsCard from "../../components/PlayerProfile/PlayerStatsCard";
import PlayerGallery from "../../components/PlayerProfile/PlayerGallery";

const CARD_WIDTH = windowWidth * 0.05;
const CARD_HEIGHT = windowHeight * 0.23;
const curve_height = windowHeight * 0.3;
const IMAGE_SIZE = windowHeight * 0.13;

const CricketProfile = () => {
  const [gamesTab, setGamesTab] = useState(1);

  const onSelectSwitch = (value) => {
    setGamesTab(value);
  };

  return (
    <View style={{ flex: 1 }}>
      <LinearGradient colors={["rgba(255,255,255,0.6)", "#2BB789"]}>
        <View style={{ height: curve_height }}>
          <View style={styles.header}>
            <View
              style={{
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity
                style={{
                  width: 30,
                  height: 30,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  backgroundColor: "rgba(255,255,255,0.6)",
                }}
              >
                <Ionicons
                  name="ios-chevron-back"
                  size={28}
                  color="#2BB789"
                  resizeMode="contain"
                />
              </TouchableOpacity>

              <Text
                style={{
                  fontSize: 22,
                  marginLeft: sizes.m5,
                  color: "#2BB789",
                }}
              >
                Cricket Profile
              </Text>
            </View>

            {/* <View style={styles.logo}>
              <Ionicons name="notifications" size={28} color="#fff" />
            </View> */}
          </View>

          <View style={styles.profile}>
            <View style={styles.logo}>
              <Avatar.Image size={IMAGE_SIZE} source={images.logo} />
              <Text style={styles.profile_text}> Muhammad </Text>
            </View>

            <View style={styles.profile_user}>
              <Text style={styles.profile_text1}> Muhammad </Text>
              <Text style={styles.profile_text1}> Hashir</Text>
            </View>
          </View>
        </View>
      </LinearGradient>

      <View
        style={{
          marginTop: -25,
          backgroundColor: "white",
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
        }}
      >
        <View style={{ marginTop: 20 }}>
          <View>
            <CustomSwitch
              selectionMode={1}
              option1="My Stats"
              option2="My Teams"
              option3="Gallery"
              onSelectSwitch={onSelectSwitch}
            />
          </View>

          {gamesTab == 1 && <PlayerStatsCard />}
          {gamesTab == 2 && <PlayerTeam />}
          {gamesTab == 3 && <PlayerGallery />}
        </View>
      </View>
    </View>
  );
};

export default CricketProfile;

const styles = StyleSheet.create({
  logo: {
    marginLeft: CARD_WIDTH,
    // marginTop: sizes.m35,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // paddingRight: sizes.m10,
    // position: 'absolute',
  },

  profile: {
    paddingTop: 3,
    flexDirection: "row",
    // backgroundColor: "yellow",
  },

  profile_user: {
    // paddingLeft: 15,
    paddingTop: 15,
  },

  profile_text: {
    fontSize: 13,
    marginLeft: sizes.m8,
  },

  profile_text1: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: sizes.m5,
  },

  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    // marginHorizontal: 20,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },
});
