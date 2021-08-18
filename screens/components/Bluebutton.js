import React from "react"
import { StyleSheet, Text, TouchableOpacity,View } from "react-native"

export default function Bluebutton (){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.buttonContainer}>
                <Text style={styles.text}>Select a Room</Text>
            </TouchableOpacity>
        </View>
       
    )
}

const styles= StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        marginHorizontal:20,
        marginVertical:10,
    },
    buttonContainer:{
        backgroundColor:"#1560bd",
        padding:20,
        borderRadius:14,
        alignItems:"center"
    },
    text:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:16,
    },
})