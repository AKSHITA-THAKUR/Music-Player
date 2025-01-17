import { Text, View, TouchableOpacity  , StyleSheet} from "react-native";
import { Image } from "expo-image";
import { Colors } from "@/constants/Colors";
import { useSharedValue } from 'react-native-reanimated';
import { useNavigation } from "expo-router";
import { Slider } from 'react-native-awesome-slider';
import React from "react";
import { useState } from "react";
import MovingText from "./Folder/MovingText";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
  heightPercentageToDP as hp,
  widthPercentageToDP,
} from "react-native-responsive-screen";

const CurrentPlayer = () => {
  const navigation = useNavigation();
  const [pause , setPause] = useState<boolean>(false);
  const progress = useSharedValue(30);
  const min = useSharedValue(0);
  const max = useSharedValue(100);
  const OpenPage = () =>{
    navigation.navigate("PlayerScreen")
  }
  return (
    <View>
      <View>
      <Slider
      progress={progress}
      minimumValue={min}
      maximumValue={max}
      style={{height:hp(5) , marginBottom:2 , zIndex:1}}
    />
      </View>
    <View style={{ flexDirection: "row" , backgroundColor:"gray" }}>

      <TouchableOpacity onPress={OpenPage} style={{flexDirection:"row"}}>
      <Image
        source={require("../assets/images/Song1.png")}
        style={{ height: hp(8), width: hp(8) }}
      />
      <View style={{ padding: 10  , overflow:"hidden"}}>
        {/* <Text style={{ }}>
          Song Name
        </Text> */}
        <MovingText text="Love me like you do"  animatedThreshold={15} style={styles.title}/>
        <Text style={{ fontSize: hp(2), color: Colors.textSecndary }}>
          This is Singer's name
        </Text>
      </View>
      </TouchableOpacity>
      <View
        style={{
          flexDirection: "row",
          marginTop: 20,
          gap: 16,
       
        }}
      >
        <TouchableOpacity>
          <AntDesign name="stepbackward" size={32} color={Colors.iconPrimary} />
        </TouchableOpacity>
        <TouchableOpacity onPress={()=> setPause((prev)=>!prev)}>
  {pause ? (
    <Ionicons
      name="play-circle-outline"
      size={36}
      color={Colors.iconPrimary}
    />
  ) : (
    <Ionicons
      name="pause-circle-outline"
      size={36}
      color={Colors.iconPrimary}
    />
  )}
</TouchableOpacity>

        <TouchableOpacity>
          <AntDesign name="stepforward" size={32} color={Colors.iconPrimary} />
        </TouchableOpacity>
      </View>
    </View>
    </View>
  );
};

export default CurrentPlayer;
const styles = StyleSheet.create({
title:{
  fontSize: hp(2),
  fontWeight: "bold",
  color: Colors.textPrimary ,
}
})