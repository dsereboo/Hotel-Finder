import React from "react"
import { StyleSheet,Text,View,Image, TextInput } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

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
              <Text style={[styles.whiteText,styles.hello]}>Hello Kwame</Text>
              <Text style={[styles.whiteText,styles.choose]}>Choose Your Best Hotel</Text>
          </View>
          <View style={styles.searchRow}>
              <MaterialIcons name="search" size={24} color="black" />
              <TextInput placeholder="Search a hotel"/>
              <Ionicons name="ios-options-outline" size={24} color="black" />
          </View>
        </View>
        
        <View>
            <View>
                <Text>Near you</Text>
                <Text>See All</Text>
            </View>
        </View>

        <View>
            <View>
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
        marginTop:50,
    },
    greetingCard:{
        backgroundColor:"#1560bd",
    },
    idRow:{
        flexDirection:"row",
        justifyContent:"space-between",
        alignContent:"center",
    },
    profileImage:{
        width:50,
        height:50,
        borderRadius:20,
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
        marginHorizontal:20,
        flexDirection:"row",
        justifyContent:"space-between",
        alignItems:"center",
        backgroundColor:"#fff",
        borderRadius:10,
    },
    textContainer:{
        marginHorizontal:20,
    },
})
