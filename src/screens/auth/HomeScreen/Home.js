import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useTheme } from "@react-navigation/native";
import { windowHeight, windowWidth } from "../../../config/dimensions"
import CustomButton from "../../../components/formComponents/CustomButton";
import { profileContext } from "../../../components/context/context";
import { useState , useEffect , useContext } from "react";

const button_width = windowWidth * 0.96;

const HomeScreen = (props) => {
  const { colors } = useTheme();
  const {profile} = useContext(profileContext)

  useEffect(() => {
    if(profile) {
      props.navigation.navigate("PlayerHome")
    }
    
  }, [])
  
  return (
    <View style={styles.root}>
      <Text style= {[styles.text1, {color : colors.heading}]}>Let's Get</Text>
      <Text style= {[styles.text1, {color : colors.heading}]}>Started</Text>


      <CustomButton style = {styles.button}
        textColor = {colors.white}
        btnLabel="Login"
        bgColor= {colors.primary }
        Press={() => props.navigation.navigate("LoginCredentials")}
      />
      <CustomButton style = {styles.button} 
        bgColor = {colors.white}
        textColor = {colors.primary}
        btnLabel="Signup"
        Press={() => props.navigation.navigate("SignupScreen")}
      />
      </View>
  );
};

const styles = StyleSheet.create({
  root: {
    marginTop: 180,
    alignItems: "center",
    justifyContent: "center",
  },

  text1: {
    color: "black",
    fontSize: 50,
  },
  button: {
    borderRadius: 100,
    alignItems: "center",
    alignSelf: "center",
    width: button_width,
    paddingVertical: 5,
    marginVertical: 10,
  },
});
export default HomeScreen;
