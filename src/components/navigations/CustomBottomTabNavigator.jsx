import { StatusBar } from "expo-status-bar";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { StyleSheet, View, TouchableOpacity, Text } from "react-native";
import { Avatar } from "react-native-paper";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

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
import { windowHeight, windowWidth } from "../../config/dimensions";
import images from "../../config/images";
import { sizes } from "../../config/sizes";

// imports
import Marketplace from "../../screens/PlayerPanel/Marketplace";
import PlayerHome from "../../screens/PlayerPanel/PlayerHome"
import TeamsScreen from "../../screens/PlayerPanel/Teams";
import UserProfile from "../../screens/PlayerPanel/UserProfile";
import PlayersScreen from "../../screens/PlayerPanel/Players";
import Profile from "../../screens/ProfileScreen/Profile";
import CricketProfile from "../../screens/ProfileScreen/CricketProfile";
import EditProfile from "../../screens/ProfileScreen/EditProfile";

const upper_margin = windowWidth * 0.02;
const upper_margin1 = windowWidth * 0.04;
const LOGO_SIZE = windowHeight * 0.06;
const LOGO_SIZE1 = windowHeight * 0.15;
const logo_margin = windowWidth * 0.05;
const logo_size = windowHeight * 0.04;

const Tab = createBottomTabNavigator();
const StackPlayerHome = createNativeStackNavigator();
const StackTeams = createNativeStackNavigator();

function PlayerHomeNavigationContainer() {
  return (
    <StackPlayerHome.Navigator screenOptions={{ headerShown: false }}>
      <StackPlayerHome.Screen name="PlayerHome" component={PlayerHome} />
      <StackPlayerHome.Screen name="PlayersScreen" component={PlayersScreen} 
        options={{ headerShown: true ,
        title : '',
          headerRight: () => (
              <View style={{ marginRight: upper_margin1 }}>
                <Ionicons
                  name="notifications"
                  size={logo_size}
                  color="#2BB789"
                />
              </View>
            ),
            headerLeft: () => (
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
                      width: 33,
                      height: 33,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 20,
                      backgroundColor: "#2BB789",
                      opacity: 0.6,
                      marginLeft: upper_margin,
                    }}
                  >
                    <Ionicons
                      name="ios-chevron-back"
                      size={28}
                      color="#fff"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontSize: 24,
                      marginLeft: sizes.m10,
                      fontWeight: "bold",
                      color: "#2BB789",
                    }}
                  >
                    Players
                  </Text>
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#FAF9F6",
              elevation: 0,
            },
            }}
        
      />

    </StackPlayerHome.Navigator>
  )
}

function TeamsScreenNavigationContainer() {
  return (
    <StackTeams.Navigator screenOptions={{ headerShown: false }}>
      <StackTeams.Screen name="TeamsScreen" component={TeamsScreen} />
    </StackTeams.Navigator>
  )
}

function UserProfileNavigationContainer() {
  return (
    <StackTeams.Navigator screenOptions={{ headerShown: false }}>
      <StackTeams.Screen name="UserProfile" component={UserProfile}/>
      <StackTeams.Screen name="Profile" component={Profile} />
      <StackTeams.Screen name="CricketProfile" component={CricketProfile} />
      <StackTeams.Screen name="EditProfile" component={EditProfile} />
    </StackTeams.Navigator>
  )
}

export default function CustomBottomTabNavigator() {
  return (
    <>
      <StatusBar style="dark-content" />
      <Tab.Navigator
        screenOptions={{
          tabBarShowLabel: false,
          headerShown: true,
          tabBarStyle: {
            backgroundColor: "#fff",
            position: "absolute",
            // bottom: 8,
            // left: 8,
            // right: 8,
            borderRadius: sizes.m35,
            height: sizes.bottomTabHeight,
          },
          tabBarHideOnKeyboard: true,
          // ...styles.shadow,
        }}
      >
        <Tab.Screen
          name="PlayerHomeRoot"
          component={PlayerHomeNavigationContainer}
          options={{
            title: "",
            tabBarIcon: ({ focused }) => (
              <View style={styles.icon}>
                <Ionicons
                  name="home-outline"
                  size={23}
                  color={focused ? "#2BB789" : "grey"}
                />
              </View>
            ),

            headerRight: () => (
              <View style={{ marginRight: upper_margin1 }}>
                <Ionicons
                  name="notifications"
                  size={logo_size}
                  color="#2BB789"
                />
              </View>
            ),

            headerLeft: () => {
              return (
                <View style={styles.profile}>
                  <Avatar.Image size={LOGO_SIZE} source={images.logo} />
                </View>
              );
            },

            headerStyle: {
              backgroundColor: "#FAF9F6",
              elevation: 0,
              // height: LOGO_SIZE1,
            },
          }}
        />

        <Tab.Screen
          name="TeamsScreenRoot"
          component={TeamsScreenNavigationContainer}
          options={{
            title: "",
            tabBarIcon: ({ focused }) => (
              <View style={styles.icon}>
                <AntDesign
                  name="team"
                  size={23}
                  color={focused ? "#2BB789" : "grey"}
                />
              </View>
            ),

            // headerTitle : () => <Header name = 'Teams'/>,
            headerRight: () => (
              <View style={{ marginRight: upper_margin1 }}>
                <Ionicons
                  name="notifications"
                  size={logo_size}
                  color="#2BB789"
                />
              </View>
            ),
            headerLeft: () => (
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
                      width: 33,
                      height: 33,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 20,
                      backgroundColor: "#2BB789",
                      opacity: 0.6,
                      marginLeft: upper_margin,
                    }}
                  >
                    <Ionicons
                      name="ios-chevron-back"
                      size={28}
                      color="#fff"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontSize: 24,
                      marginLeft: sizes.m10,
                      fontWeight: "bold",
                      color: "#2BB789",
                    }}
                  >
                    Teams
                  </Text>
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#FAF9F6",
              elevation: 0,
            },
          }}
        />
        {/* <Tab.Screen name="MarketPlace" component={Marketplace} options={{
    tabBarIcon:({focused})=>(
        <View style = {styles.icon}>
        <Feather name = "plus-circle" size = {23} color = {focused ? 'red' : 'grey'}/>
        </View>
      ),
      }}/> */}

        <Tab.Screen
          name="MarketPlace"
          component={Marketplace}
          options={{
            title: "",
            tabBarIcon: ({ focused }) => (
              <View style={styles.icon}>
                <Feather
                  name="shopping-bag"
                  size={23}
                  color={focused ? "#2BB789" : "grey"}
                />
              </View>
            ),
            headerRight: () => (
              <View style={{ marginRight: upper_margin1 }}>
                <Ionicons
                  name="notifications"
                  size={logo_size}
                  color="#2BB789"
                />
              </View>
            ),
            headerLeft: () => (
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
                      width: 33,
                      height: 33,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 20,
                      backgroundColor: "#2BB789",
                      opacity: 0.6,
                      marginLeft: upper_margin,
                    }}
                  >
                    <Ionicons
                      name="ios-chevron-back"
                      size={28}
                      color="#fff"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontSize: 24,
                      marginLeft: sizes.m10,
                      fontWeight: "bold",
                      color: "#2BB789",
                    }}
                  >
                    MarketPlace
                  </Text>
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#FAF9F6",
              elevation: 0,
            },
          }}
        />
        <Tab.Screen
          name="UserProfileRoot"
          component={UserProfileNavigationContainer}
          options={{
            title: "",
            tabBarIcon: ({ focused }) => (
              <View style={styles.icon}>
                <FontAwesome
                  name="user-circle"
                  size={23}
                  color={focused ? "#2BB789" : "grey"}
                />
              </View>
            ),

            headerRight: () => (
              <View style={{ marginRight: upper_margin1 }}>
                <Ionicons
                  name="notifications"
                  size={logo_size}
                  color="#2BB789"
                />
              </View>
            ),
            headerLeft: () => (
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
                      width: 33,
                      height: 33,
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 20,
                      backgroundColor: "#2BB789",
                      opacity: 0.6,
                      marginLeft: upper_margin,
                    }}
                  >
                    <Ionicons
                      name="ios-chevron-back"
                      size={28}
                      color="#fff"
                      resizeMode="contain"
                    />
                  </TouchableOpacity>

                  <Text
                    style={{
                      fontSize: 24,
                      marginLeft: sizes.m10,
                      fontWeight: "bold",
                      color: "#2BB789",
                    }}
                  >
                    User Profile
                  </Text>
                </View>
              </View>
            ),
            headerStyle: {
              backgroundColor: "#FAF9F6",
              elevation: 0,
            },
          }}
        />
      </Tab.Navigator>
    </>
  );
}

const styles = StyleSheet.create({
  // shadow: {
  //   shadowColor: "#000",
  //   shadowOpacity: 0.25,
  //   shadowRadius: 3.5,
  //   shadowOffset: {
  //     width: 0,
  //     height: 10,
  //   },
  //   elevation: 5,
  // },

  icon: {
    position: "absolute",
    paddingLeft: 10,
  },

  header: {
    paddingVertical: 20,
    flexDirection: "row",
    alignItems: "center",
    // marginHorizontal: 20,
    paddingHorizontal: 10,
    justifyContent: "space-between",
  },

  profile: {
    flexDirection: "row",
    justifyContent: "center",
    marginLeft: logo_margin,
    // paddingTop: 3,
    // flex: 1,
  },
});