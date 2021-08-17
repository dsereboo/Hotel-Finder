import React from "react"
import { StyleSheet,Text,View,Image, TextInput } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HotelCard from "./components/HotelCard";

export default function HomeScreen (){
    return (
      <View style={styles.container}>
        <View style={styles.greetingCard}>
          <View style={styles.idRow}>
            <FontAwesome5 name="grip-lines" size={24} color="#fff" />
            <Image
              style={styles.profileImage}
              source={require("../assets/image.jpg")}
            />
          </View>
          <View style={styles.textContainer}>
              <Text style={[styles.whiteText,styles.hello]}>Hello Kwame,</Text>
              <Text style={[styles.whiteText,styles.choose]}>Choose Your Best Hotel</Text>
          </View>
          <View style={styles.searchRow}>
              <MaterialIcons name="search" size={24} color="black" />
              <TextInput style={styles.input} placeholder="Search a hotel"/>
              <Ionicons name="ios-options-outline" size={24} color="black" />
          </View>
        </View>
        
        <View style={styles.nearbyContainer}>
            <View style={styles.header}>
                <Text style={styles.headerTitle}>Near you</Text>
                <Text style={styles.headerText}>See All</Text>
            </View>
            <HotelCard/>
            
        </View>

        <View style={styles.recommendedContainer}>
            <View  style={styles.header}>
                <Text>Recommended</Text>
                <Text>See All</Text>
            </View>
        </View>

      </View>
    );
}

const styles= StyleSheet.create({
    container:{
        flex:10,
        // marginTop:50,
    },
    greetingCard:{
        backgroundColor:"#1560bd",
        flex:3,
        borderBottomLeftRadius:20,
        borderBottomRightRadius:20,
    },
    idRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        marginHorizontal:20,
        marginTop:40,
        marginBottom:15,
    },
    profileImage:{
        width:40,
        height:40,
        borderRadius:10,
    },
    whiteText:{
        color:"#fff"
    },
    hello:{
        fontSize:20,
    },
    choose:{
        fontSize:24,
        fontWeight:"bold"
    },
    searchRow:{
        marginTop:15,
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fff",
        borderRadius:10,
    },
    input:{
        height:40,
    },
    textContainer:{
        marginHorizontal:20,
    },
    nearbyContainer:{
        flex:2.5
    },
    recommendedContainer:{
        flex:4,
    },
    header:{
        flexDirection:"row",
        justifyContent:"space-between",
        marginHorizontal:20,
    },
    headerTitle:{

    },
    headerText:{

    },
})
