import { useState , useEffect , createContext } from "react";
import React from "react";
// import AsyncStorage from "@react-native-async-storage/async-storage";
import {AsyncStorage} from 'react-native';

export const profileContext = createContext();
const ProfileContextProvider = (props) => {
    const [profile, setProfile] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      const profile = async () => {
        try {
            const json = await AsyncStorage.getItem("Profile");
            const profile = await JSON.parse(json);
            setProfile(profile);
            setLoading(false);
        } catch (error) {
            
        }
      }
      profile();
    }, [])

    return (
        <profileContext.Provider value = {{profile}}>
        {loading ? <></> : props.children}
        </profileContext.Provider>
    )
    
}

export default ProfileContextProvider;