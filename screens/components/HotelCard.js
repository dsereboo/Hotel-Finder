import React from "react"
import { Image, StyleSheet, View,Text, Pressable } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from "@react-navigation/native";

export default function HotelCard({name, image, location}){

    const navigation=useNavigation()
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Pressable  onPress={()=>navigation.navigate("HotelInfo")}  >
                     <Image style={styles.image} source={{uri:image}}/>
                </Pressable>
            </View>
            <Text style={styles.name}>{name}</Text>
            <View style={styles.locationContainer}>
                <Ionicons name="location-sharp" size={16} color="black" />
                <Text style={styles.location}>{location}</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        // flex:0.5,
        marginHorizontal:20, 
    },
    image:{
        width:142,
        height:100,
        borderRadius:10,
    },
    imageContainer:{
        marginVertical:8,
    },
    locationContainer:{
        flexDirection:"row",
        alignItems:"center"
    },
    name:{
        fontWeight:"bold",
        fontSize:18,
    },
    location:{
        fontSize:12,
        fontWeight:"bold"
    }
})