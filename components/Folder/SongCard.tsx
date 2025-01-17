import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import React from "react";
import { Image } from "expo-image";
import { Colors } from "@/constants/Colors";
import { heightPercentageToDP as hp, widthPercentageToDP as wp } from "react-native-responsive-screen";
import { router } from 'expo-router';

const SongCard = ({item}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={()=> router.push('/PlayerScreen')} >
            <Image
                source={{uri : item.artwork}}
                style={styles.image}
            />
            <View style={styles.textContainer}>
                <Text style={styles.title}>{item.title}</Text>
                <Text style={styles.semiTitle}>{item.artist}</Text>
            </View>
        </TouchableOpacity>
    );
};

export default SongCard;

const styles = StyleSheet.create({
    container: {
        width: wp(50),
         // Adjusted to fit nicely within columnWrapper spacing
        marginVertical: hp(1),
        padding: 5,
        borderRadius: 15,
        shadowColor: "#000",
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 5,
    },
    image: {
        width: "100%",
        // height: hp(20),
        height:wp(50),
        borderRadius: 12,
    },
    textContainer: {
        paddingVertical: 8,
        alignItems: "center",
    },
    title: {
        color: Colors.textPrimary,
        fontWeight: "bold",
        fontSize: 16,
        textAlign: "center",
    },
    semiTitle: {
        color: Colors.textSecndary,
        fontSize: 14,
        textAlign: "center",
        marginTop: 4,
    },
});