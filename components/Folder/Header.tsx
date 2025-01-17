import { View, Text , TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from "@expo/vector-icons";
import { useNavigation   } from 'expo-router';
import { StatusBar } from "expo-status-bar";



export default function Header() {
  const navigation = useNavigation();
  return (
    <View>
     <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingVertical: 20,
          paddingHorizontal: 30,
        }}
      >
        <StatusBar style="light" />
        <TouchableOpacity>
          <Ionicons name="menu" size={32} color="white" />
        </TouchableOpacity>
        <TouchableOpacity  onPress={()=>navigation.navigate("LikeScreen") }>
      
          <Ionicons name="heart-outline" size={32} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  )
}