import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';


export default function HotelFeatureCard(){
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Hotel Features</Text>
            <View style={styles.featureRow}>
                <View style={styles.featureColumn}>
                    <View>
                        <View style={styles.featureContainer}>
                            <FontAwesome5 style={styles.icon} name="mug-hot" size={18} color="#1560bd" />
                            <Text>Breakfast</Text>
                        </View>
                        <View style={styles.featureContainer}>
                            <Ionicons style={styles.icon} name="wifi" size={18} color="#1560bd" />
                            <Text>Free Wifi</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.featureColumn}>
                    <View>
                        <View style={styles.featureContainer}>
                            <Ionicons style={styles.icon} name="wifi" size={18} color="#1560bd" />
                            <Text>Free Wifi</Text>
                        </View>
                        <View style={styles.featureContainer}>
                            <MaterialIcons style={[styles.icon]} name="pets" size={18} color="#1560bd" />
                            <Text>Pets</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.featureColumn}>
                    <View>
                        <View style={styles.featureContainer}>
                            <MaterialCommunityIcons style={styles.icon} name="parking" size={18} color="#1560bd" />
                            <Text>Parking</Text>
                        </View>
                        <View style={styles.featureContainer}>
                            <FontAwesome5 style={styles.icon} name="spa" size={18} color="#1560bd" />
                            <Text>Spa</Text>
                        </View>
                    </View>
                </View>
            </View>
            {/* <View style={styles.amenities}>
               
            </View> 
            <View style={styles.amenities}>
               
                */}
                {/* 
            </View>
           */}
           </View>
    )
}

const styles= StyleSheet.create({
    container:{
        flex:2,
        marginHorizontal:20,
        // justifyContent:"space-between",
        marginBottom:20,
        marginTop:20,
    },
    title:{
        fontWeight:"bold",
        fontSize:16,
    },
    featureColumn:{
        marginVertical:10,
    },
    featureContainer:{
        flexDirection:"row",
        alignItems:"center",
        marginVertical:15,
    },
    featureRow:{
        flexDirection:"row",
        justifyContent:"space-between",
    },
    amenities:{
        justifyContent:"space-between"
        
    },
    icon:{
      marginRight:5,
    },
    // pet:{
    // //     marginLeft:-29,
    // //     marginRight:15,
    // // },
    // // spa:{
    // //     marginRight:25,
    // // },
    // spaText:{
    //     marginLeft:10,
    // },
})