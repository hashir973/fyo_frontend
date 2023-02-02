import * as React from "react";
import { StatusBar } from "expo-status-bar";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { RootSiblingParent } from "react-native-root-siblings";
import { Provider } from "react-redux";


import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from "react-native";

// imports
import HomeScreen from "./src/screens/auth/HomeScreen/Home";
import SignupScreen from "./src/screens/auth/Signup";
import LoginScreen from "./src/screens/auth/Login";
import ForgotPassword from "./src/screens/auth/ForgotPassword";
import PlayerHome from "./src/screens/playerPanel/PlayerHome";
import TeamsScreen from "./src/screens/playerPanel/TeamsScreen";
import Profile from "./src/screens/ProfileScreen/Profile";
import MyNavigationContainer from "./src/components/navigations";
import EditProfile from "./src/screens/ProfileScreen/EditProfile";
import CricketProfile from "./src/screens/ProfileScreen/CricketProfile";
import Login from "./src/screens/auth/Login";
import PlayersScreen from "./src/screens/playerPanel/PlayersScreen";
import Gallery from "./src/components/Gallery";
import LoginCredentials from "./src/screens/auth/HomeScreen/LoginCredentials";


//import
import { CustomBottomTabNavigator } from "./src/components/navigations/CustomBottomTabNavigator";
import { windowHeight, windowWidth } from "./src/config/dimensions";
import { store } from "./src/store";
import UserProfile from "./src/screens/playerPanel/UserProfile";
import ProfileContextProvider from "./src/components/context/context";


const Stack = createNativeStackNavigator();

const MyTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: "#2BB789",
    heading: "#006A42",
    text: "#eee",
    black: "#000",
    white: "#fff",
    white1: "#F9EBEB",
    gray: "#ccc"
  },
};

const AuthNavigationContainer = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="HomeScreen" component={HomeScreen} />
        <Stack.Screen name="LoginScreen" component={LoginScreen} />
        <Stack.Screen name="SignupScreen" component={SignupScreen} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const HomeNavigationContainer = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="PlayerHome" component={PlayerHome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


// const defaultNavigationOptions = {
//   headerStyle: {
//       backgroundColor: 'yellow',
//       // <LinearGradient colors={[ "rgba(255,255,255,0.6)", "#2BB789" ]}>
//       height : windowHeight,
//   }
// }

const TeamNavigationContainer = () => {
  return (
    <NavigationContainer theme={MyTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TeamScreen" component={TeamsScreen}
        //  options={{

        //   ...defaultNavigationOptions,

        //   headerTitle : () => <Header name = 'Teams'/>,
        //   headerRight : () =>(
        //     <View>
        //       <Ionicons name="notifications" size={35} color="#000" />
        //     </View>
        //   ),
        //   headerLeft : ()=>(
        //     <View

        //   >
        //     <Ionicons name="chevron-back-circle-outline" size={28} />

        //   </View>

        //   ),




        // }}


        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};


const BottomTab = () => { };

function App() {
  return (
    // <RootSiblingParent>
    // <EditProfile />
    <ProfileContextProvider>
    <Provider store={store}>
      <MyNavigationContainer/>
    </Provider>
    </ProfileContextProvider>
    // <CricketProfile />
    // <Login/>
    // <TeamNavigationContainer/>
    // <AuthNavigationContainer/>
    // <Gallery/>
    // <Profile/>
    // <Abc />
    //  <Home1NavigationContainer/>
    // </RootSiblingParent>
    // <Home1NavigationContainer/>

  );
}

export default App;
