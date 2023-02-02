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

//import
import Dateinput from "../../components/formComponents/Dateinput";
import CustomButton from "../../components/formComponents/CustomButton";
import CustomFormInput from "../../components/formComponents/CustomFormInput";
import { windowHeight, windowWidth } from "../../config/dimensions";
import images from "../../config/images";
import { sizes } from "../../config/sizes";
import FloatingLabelInput from "../../components/formComponents/FloatingLabelInput";
import CustomDropDown from "../../components/formComponents/CustomDropDown";

const CARD_WIDTH = windowWidth * 0.05;
const CARD_HEIGHT = windowHeight * 0.23;
const curve_height = windowHeight * 0.15;
const IMAGE_SIZE = windowHeight * 0.13;
const IMAGE_SIZE1 = windowHeight * 0.025;
const LOGO_SIZE = windowHeight * 0.15;

const EditProfile = () => {
  //   const [text, onChangeText] = React.useState("Useless Text");
  //   const [number, onChangeNumber] = React.useState(null);
  

  const data_playingRole = [
    { label: "Top-Order Batsman", value: "1" },
    { label: "Middle-Order Batsman", value: "2" },
    { label: "Wicket-Keeper Batsman", value: "3" },
    { label: "Wicket-Keeper", value: "4" },
    { label: "Bowler", value: "5" },
    { label: "All-Rounder", value: "6" },
    { label: "Lower-Order Batsman", value: "7" },
    { label: "None", value: "8" },
  ];

  const data_battingStyle = [
    { label: "Right-Hand Batsman", value: "1" },
    { label: "Left-Hand Batsman", value: "1" },
  ];

  const data_bowlingStyle = [
    { label: "Right-arm fast", value: "1" },
    { label: "Right-arm Medium", value: "2" },
    { label: "Left-arm Fast", value: "3" },
    { label: "Left-arm Medium", value: "4" },
    { label: "Slow Left-arm Orthodox", value: "5" },
    { label: "Right-arm Off Break", value: "6" },
    { label: "Right-arm Leg Break", value: "7" },
    { label: "None", value: "8" },
  ];

  const data_gender = [
    { label: "Male", value: "1" },
    { label: "Female", value: "1" },
  ];

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ flex: 1, marginBottom: sizes.bottomTabHeight + 1 }}>
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
                  Edit Profile
                </Text>
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
          <View style={styles.profile}>
            <View style={styles.logo}>
              <Avatar.Image size={LOGO_SIZE} source={images.logo} />
              <Text style={styles.image_text}> Change Photo</Text>
            </View>
          </View>

          <View style={{ flex: 1, padding: sizes.m10 }}>
            <CustomFormInput
              autoComplete="name"
              // onChangeText={onChangeText}
              // value={text}
              placeholderText="Player Name"
            />

            <CustomFormInput
              autoComplete="name"
              // onChangeText={onChangeText}
              // value={text}
              placeholderText="Date of Birth"
            />

            <CustomFormInput
              autoComplete="name"
              // onChangeText={onChangeText}
              // value={text}
              placeholderText="Email Address"
            />

            <View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  color: "#2BB789",
                  fontSize: sizes.h3,
                }}
              >
                Playing Role
              </Text>
              <CustomDropDown data={data_playingRole} />
            </View>

            <View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  color: "#2BB789",
                  fontSize: sizes.h3,
                }}
              >
                Batting Style
              </Text>
              <CustomDropDown data={data_battingStyle} />
            </View>

            <View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  color: "#2BB789",
                  fontSize: sizes.h3,
                }}
              >
                Bowling Style
              </Text>
              <CustomDropDown data={data_bowlingStyle} />
            </View>

            <View>
              <Text
                style={{
                  paddingHorizontal: 10,
                  color: "#2BB789",
                  fontSize: sizes.h3,
                }}
              >
                Gender
              </Text>
              <CustomDropDown data={data_gender} />
            </View>

            

            {/* <FloatingLabelInput
            iconFamily={"AntDesign"}
            iconName="user"
            label="Date of Birth"
          />

          <FloatingLabelInput label="Email Address" />

          <FloatingLabelInput label="Playing Role" />

          <FloatingLabelInput label="Batting Style" />

          <FloatingLabelInput label="Bowling Style" /> */}
            <TouchableOpacity>
              <CustomButton
                textColor="white"
                btnLabel="Update"
                // Press={() => handleSubmit()}
              />
            </TouchableOpacity>
            <Dateinput/>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  logo: {
    // marginLeft: CARD_WIDTH,
    marginTop: sizes.m5,
    // flexDirection: "row",
    // justifyContent: "space-between",
    // paddingRight: sizes.m10,
    // position: 'absolute',
  },

  profile: {
    flexDirection: "row",
    // backgroundColor: "yellow",
    // alignSelf: "center",
    justifyContent: "center",
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

  input: {
    margin: 12,
    borderBottomWidth: 1,
    padding: 10,
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
