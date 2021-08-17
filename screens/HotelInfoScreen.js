import React from "react"
import { View, Text, StyleSheet, Image } from "react-native"
import { Entypo } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

export default function HotelInfoScreen(){

    const hotels = [
        {id:"hj9ds", name: "Hyatt", location: "BZ, Belize", image: "https://firebasestorage.googleapis.com/v0/b/codetrainproject-4c734.appspot.com/o/resort1.jpg?alt=media&token=b4b6a178-16f6-40d7-83f5-591b07b28f8f", },
        // {name:"Marriot", location:"JM, Jamaica", image:"", },
        {id:"acbi89", name: "Western Cape", location: "FR, France", image: "https://firebasestorage.googleapis.com/v0/b/codetrainproject-4c734.appspot.com/o/tropical.jpg?alt=media&token=aa19383a-9d20-49fd-8b48-9daef23d740c", },
        {id:"almocej2", name: "Royal Senchi", location: "GH, Ghana", image: "https://firebasestorage.googleapis.com/v0/b/codetrainproject-4c734.appspot.com/o/ghana.jpg?alt=media&token=f3ba8451-c9ce-403e-af41-89bb509bde80", },
    ]

    return(
        <View style={styles.container}>
            <View>
                <View>
                    <Image />
                </View>
                <View>
                    <Text>James Hotel</Text>
                    <View>
                        <Text>4.5</Text>
                        <Entypo name="heart-outlined" size={24} color="black" />
                        <Feather name="star" size={24} color="black" />
                    </View>
                </View>
            </View>
            <View>
                <View>
                    <Text>Per Night</Text>
                    <View>
                        <Text>$100</Text>
                        <Text>$100</Text>
                    </View>
                    <View>
                        <Text>4.5/5- Good</Text>
                        <Text>1298 Reviews</Text>
                    </View>
                    <View>
                        <Text>Hotel Features</Text>
                    </View>
                    <View>
                        <Text>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,
                        quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                        Excepteur sint occaecat cupidatat non proident
                        </Text>
                    </View>
                </View>
            </View>
        </View>
    )
}


const styles= StyleSheet.create({
    container:{},
})