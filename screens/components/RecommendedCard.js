import React from "react"
import { StyleSheet, ImageBackground, View, Text, Image } from "react-native"

export default function RecommendedCard(props){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:props.image}}/>
            <View style={styles.textContainer}>
               <Text style={styles.whiteText}>{props.name}</Text>
               <Text style={styles.whiteText}>{props.location}</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
       marginHorizontal:20,
       marginVertical:10,
    },
    image:{
        width:142,
        height:170,
        borderRadius:10,
    },
    textContainer:{
        top:110,
        left:15,
        position:"absolute"
    },
    whiteText:{
        color:"#fff",
        fontSize:16,
    },
}
)