import React from "react"
import { StyleSheet, ImageBackground, View, Text, Image } from "react-native"

export default function RecommendedCard(){
    return(
        <View style={styles.container}>
            <Image style={styles.image} source={{uri:"https://firebasestorage.googleapis.com/v0/b/codetrainproject-4c734.appspot.com/o/cinema.jpg?alt=media&token=273e3264-2d33-48a1-9538-6cff3f4723de"}}/>
            <View style={styles.textContainer}>
               <Text style={styles.whiteText}>Name</Text>
               <Text style={styles.whiteText}>Location</Text>
            </View>
        </View>
    )
}

const styles= StyleSheet.create({
    container:{
        marginHorizontal:20,
    },
    image:{
        width:160,
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
        opacity:0.9,
        fontSize:16,
    },
}
)