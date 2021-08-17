import React from "react"
import { Image, StyleSheet, View,Text } from "react-native"
import { Ionicons } from '@expo/vector-icons';

export default function HotelCard(){
    return(
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image style={styles.image} source={require("../../assets/resort1.jpg")}/>
            </View>
            <Text style={styles.name}>Hyatt</Text>
            <View style={styles.locationContainer}>
                <Ionicons name="location-sharp" size={16} color="black" />
                <Text style={styles.location}>BZ, Belize</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:0.5,
        marginHorizontal:20, 
    },
    image:{
        width:150,
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