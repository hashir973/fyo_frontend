import React from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  StatusBar,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

//import icons
import {
  Ionicons,
  AntDesign,
  Feather,
  FontAwesome,
  Entypo,
  Fontisto,
  MaterialIcons,
} from "react-native-vector-icons";

//import
import { windowHeight, windowWidth } from "../../config/dimensions";
import images from "../../config/images";
import { sizes } from "../../config/sizes";
import { useTheme } from "@react-navigation/native";

import CustomButton1 from "../../components/CustomButton1";
import colors from "../../config/colors";

const CARD_WIDTH = windowWidth * 0.93;
const CARD_HEIGHT = windowHeight * 0.11;
const INPUT_WIDTH = windowWidth - 25;

const PlayerTeam = () => {
  const theme = useTheme();

  return (
    <ScrollView style={styles.root}>
      <View>
        <StatusBar barStyle = "light-content" />
        <TouchableOpacity>
          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require("../../../assets/Images/ronaldo.jpg")}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>

              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Falcon FC</Text>

                <View style={{ alignSelf: "center", alignItems: "flex-start" }}>
                  <CustomButton1 textColor="white" btnLabel="Request to Join" />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require("../../../assets/Images/ronaldo.jpg")}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>

              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Falcon FC</Text>

                <View style={{ alignSelf: "center", alignItems: "flex-start" }}>
                  <CustomButton1 textColor="white" btnLabel="Request to Join" />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require("../../../assets/Images/ronaldo.jpg")}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>

              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Falcon FC</Text>

                <View style={{ alignSelf: "center", alignItems: "flex-start" }}>
                  <CustomButton1 textColor="white" btnLabel="Request to Join" />
                </View>
              </View>
            </View>
          </View>

          <View style={styles.cardsWrapper}>
            <View style={styles.card}>
              <View style={styles.cardImgWrapper}>
                <Image
                  source={require("../../../assets/Images/ronaldo.jpg")}
                  resizeMode="cover"
                  style={styles.cardImg}
                />
              </View>

              <View style={styles.cardInfo}>
                <Text style={styles.cardTitle}>Falcon FC</Text>

                <View style={{ alignSelf: "center", alignItems: "flex-start" }}>
                  <CustomButton1 textColor="white" btnLabel="Request to Join" />
                </View>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default PlayerTeam;

const styles = StyleSheet.create({
  // root: {
  //   flex: 1,
  // },

  logo: {
    // marginLeft: sizes.m10,
    // marginTop: sizes.m35,
    flexDirection: "row",
    justifyContent: "flex-end",
    // paddingRight: sizes.m10,
    // position: 'absolute',
  },

  text_input: {
    // flex: 1,
    // position: "absolute",
    marginTop: 130,
    flexDirection: "row",
    borderWidth: 2,
    borderRadius: sizes.m12,
    padding: sizes.m10,
    borderColor: "#C6C6C6",
    width: INPUT_WIDTH,
    alignSelf: "center",
  },

  cardsWrapper: {
    // marginTop: 20,
    width: CARD_WIDTH,
    alignSelf: "center",
  },

  card: {
    height: CARD_HEIGHT,
    marginTop: 10,
    flexDirection: "row",
    shadowColor: "#999",
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.25,
    shadowRadius: 2,
    elevation: 5,
  },

  cardImgWrapper: {
    flex: 1,
  },

  cardImg: {
    height: "100%",
    width: "100%",
    alignSelf: "center",
    borderRadius: 10,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },

  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: "#2BB789",
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: "#fff",
    flexDirection: "row",
  },

  cardTitle: {
    fontWeight: "bold",
  },

  cardDetails: {
    fontSize: 12,
    color: "#444",
  },
});
