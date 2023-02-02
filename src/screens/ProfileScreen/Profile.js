import { StatusBar } from "expo-status-bar";
import React from "react";

import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  TextInput,
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

const CARD_WIDTH = windowWidth * 0.05;
const CARD_HEIGHT = windowHeight * 0.23;
const curve_height = windowHeight * 0.3;
const IMAGE_SIZE = windowHeight * 0.13;
const IMAGE_SIZE1 = windowHeight * 0.025;
const IMAGE_SIZE2 = windowHeight * 0.090;
const IMAGE_SIZE3 = windowHeight * 0.120;
const IMAGE_SIZE4 = windowHeight * 0.135;

const PROFILECARD_WIDTH = windowWidth * 0.90;
const PROFILECARD_HEIGHT = windowHeight * 0.60;


const Profile = () => {
  const theme = useTheme();

  return (
    <View style={{ flex: 1 }}>
      {/* <StatusBar barStyle = "light-content" /> */}
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
                Player Profile
              </Text>
            </View>

            {/* <View style={styles.logo}>
              <Ionicons name="notifications" size={28} color="#fff" />
            </View> */}
          </View>

          <View style={styles.profile}>
            <View style={styles.logo}>
              <Avatar.Image size={IMAGE_SIZE} source={images.logo} />
            </View>

            <View style={styles.profile_user}>
              <Text style={styles.profile_text1}> Muhammad </Text>
              <Text style={styles.profile_text1}> Hashir</Text>

              <View style={{ flexDirection: "row", alignItems: "center" , padding:5, paddingLeft: 8}}>
              <TouchableOpacity
                style={{
                  width: IMAGE_SIZE1,
                  height: IMAGE_SIZE1,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  backgroundColor: "rgba(255,255,255,0.6)",
                }}
              >
                <Ionicons
                  name="ios-chevron-forward"
                  size={IMAGE_SIZE1}
                  color="#2BB789"
                  resizeMode="contain"
                />
              </TouchableOpacity>
                <Text style = {{fontSize: 13}}> My Cricket Profile</Text>
              </View>
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

      <View style={styles.profile_heading}>
     
          <Text style={styles.profile_heading1}> My Profile</Text>

          <View style={{ flexDirection: "row", alignItems: "center"}}>

          <TouchableOpacity
                style={{
                  width: IMAGE_SIZE1,
                  height: IMAGE_SIZE1,
                  marginRight: CARD_WIDTH,
                  alignItems: "center",
                  justifyContent: "center",
                  borderRadius: 20,
                  backgroundColor: "rgba(255,255,255,0.6)",
                }}
              >
                <Feather
                  name="edit-3"
                  size={IMAGE_SIZE1}
                  color="#2BB789"
                  resizeMode="contain"
                />
          </TouchableOpacity>
          </View>


        </View>

<View
      style={{
        width: PROFILECARD_WIDTH,
        height: PROFILECARD_HEIGHT,
        margin: sizes.m13,
        marginLeft: CARD_WIDTH,
        marginTop: 25,
        borderRadius: sizes.m15,
        borderColor: "#2bb789",
        backgroundColor: "#fff",
        borderWidth: 2,
      }}>

<View >
       

       <View style={styles.profile_stats}>
         <Text> Mobile Number</Text>
         <Text style={styles.profile_text3}> Gender</Text>
       </View>

       <View style={styles.profile_stats1}>
         <Text> Playing Role</Text>
         <Text style={styles.profile_text2}> Batting Style</Text>
       </View>

       <View style={styles.profile_stats1}>
         <Text> Bowling Style</Text>
         <Text style={styles.profile_text2}> Date of Birth</Text>
       </View>

       <View style={styles.profile_stats1}>
         <Text> Email</Text>
       </View>
     </View>


      
      
    </View>
      
    </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  logo: {
    marginLeft: CARD_WIDTH,
    // marginTop: sizes.m35,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // position: 'absolute',
  },

  profile: {
    paddingTop: 3,
    flexDirection: "row",
    // backgroundColor: "yellow",
  },

  profile_user: {
    paddingTop: 15,
  },

  profile_text: {
    fontSize: 15,
    fontWeight: "bold",
  },

  profile_heading: {
    paddingLeft: CARD_WIDTH,
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10
  },

  profile_text1: {
    fontSize: 14,
    fontWeight: "bold",
    marginLeft: sizes.m5,
  },

  profile_heading1: {
    fontSize: 20,
    fontWeight: "bold",
    // marginLeft: sizes.m5,
  },

  edit_text: {
    paddingRight: CARD_WIDTH,
  },

  profile_stats: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: IMAGE_SIZE1,
    paddingTop: IMAGE_SIZE1,
  },

  profile_stats1: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingLeft: IMAGE_SIZE1,
    paddingTop: IMAGE_SIZE3,
  },

  profile_text2: {
    paddingRight: IMAGE_SIZE2,
  },

  profile_text3: {
    paddingRight: IMAGE_SIZE4,
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
