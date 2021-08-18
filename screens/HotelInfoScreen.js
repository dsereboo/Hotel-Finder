import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import HotelFeatureCard from "./components/HotelFeatureCard";
import Bluebutton from "./components/Bluebutton";

export default function HotelInfoScreen({route}){

    const[chosenHotel, setChosenHotel]=useState({})

    const{id}=route.params

    const hotels = [
        {id:"hj9ds", name: "Hyatt", price:"$300", discount:"$200", image: "https://firebasestorage.googleapis.com/v0/b/codetrainproject-4c734.appspot.com/o/room.jpg?alt=media&token=726aec36-ba45-48f3-82ce-b99c6607476e", },
        // {name:"Marriot", location:"JM, Jamaica", image:"", },
        {id:"acbi89", name: "Western Cape", price: "$150", discount:"50", image: "https://firebasestorage.googleapis.com/v0/b/codetrainproject-4c734.appspot.com/o/tropical.jpg?alt=media&token=aa19383a-9d20-49fd-8b48-9daef23d740c", },
        {id:"almocej2", name: "Royal Senchi", price: "$450", discount:"250",  image: "https://firebasestorage.googleapis.com/v0/b/codetrainproject-4c734.appspot.com/o/ghana.jpg?alt=media&token=f3ba8451-c9ce-403e-af41-89bb509bde80", },
    ]


    //Finding desired user and updating local state
    const findHotel=()=>{
        let hotel=(hotels.filter((item)=>item.id===id))
        setChosenHotel(hotel[0])
    }
    

    useEffect(findHotel,[])

    return(
        <View style={styles.container}>
            <View style={styles.headerContainer}>
                <View>
                    <Image style={styles.image} source={{uri:chosenHotel.image}} />
                </View>
                <View style={styles.header}>
                    <Text style={[styles.whiteText, styles.headerTitle]}>{chosenHotel.name}</Text>
                    <View style={styles.ratingRow}>
                        <Text style={styles.whiteText}>4.5</Text>
                        <Feather name="star" size={20} color="#f5c71a" />
                        <Entypo name="heart-outlined" size={20} color="red" />
                    </View>
                </View>
            </View>
            <View style={styles.infoContainer}>
            <View style={[styles.topRow]}>
                <Text style={styles.baseText}>Per Night</Text>
                <View style={styles.noStyleRow}>
                    <Text style={[styles.baseText, styles.reducedPrice]}>{chosenHotel.price}</Text>
                    <Text style={styles.baseText}>{chosenHotel.discount}</Text>
                </View>
            </View>
            <View style={styles.horizontalLine}></View>
            <View style={styles.rates}>
                <Text style={styles.baseText}>4.5/5- Good</Text>
                <View style={styles.noStyleRow}>
                    <Text style={styles.blueText}>1298 Reviews</Text>
                    {/* <FontAwesome5 name="greater-than" size={18} color="#D0D0D0" /> */}
                </View>
            </View>
            <View style={styles.horizontalLine}></View>
            <HotelFeatureCard/>
            <View style={styles.horizontalLine}></View>
            <View style={styles.description}>
                <Text style={styles.hotelDescription}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                    quis nostrud exercitation ullamco laboris nisi ut aliquip ex
                </Text>
            </View>
            <Bluebutton/>
        </View>
    </View>
    )
}


const styles= StyleSheet.create({
    container:{
       flex:10,
    },
    headerContainer:{
        flex:3.5,
    },
    image:{
        width:"100%",
        height:"100%",
    },
    row:{
        flexDirection:"row",
        justifyContent:"space-between",
        borderBottomWidth:1.2,
        borderBottomColor:"#D0D0D0",
        // marginHorizontal:20,
        padding:20,
    },
    noStyleRow:{
        flexDirection:"row"
    },
    ratingRow:{
        flexDirection:"row",
      
    },
    blueText:{
        color:"#1560bd",
        fontWeight:"bold"
    },
    whiteText:{
        color:"#fff"
    },
    infoContainer:{
        backgroundColor:"#fff",
        flex:6,
        marginTop:-40,
        borderTopRightRadius:25,
        borderTopLeftRadius:25,
    },
    header:{
        position:"absolute",
        top:169,
        left:20,
    },
    headerTitle:{
        fontSize:24,
        fontWeight:"bold"
    },
    baseText:{
        fontSize:16,
        fontWeight:"bold"
    },
    reducedPrice:{
        color:"#BEBEBE",
        marginRight:5,
        textDecorationLine:"line-through",
        textDecorationStyle:"solid"
    },
    hotelDescription:{
        fontSize:16,
        marginHorizontal:20,
    },
    description:{
        flex:2,
        justifyContent:"center"
    },
    rates:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:20,
        alignItems:"center",
    },
    topRow:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:20,
        alignItems:"center",
    },
    horizontalLine:{
        // width:"100%",
        // height:2,
        flex:0.025,
        backgroundColor:"#D8D8D8"
    },
})