import React from "react"
import { StyleSheet, Text, View, Image, TextInput, FlatList } from "react-native"
import { FontAwesome5 } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import HotelCard from "./components/HotelCard";
import RecommendedCard from "./components/RecommendedCard";


export default function HomeScreen() {

    const hotels = [
        { name: "Hyatt", location: "BZ, Belize", image: "https://firebasestorage.googleapis.com/v0/b/codetrainproject-4c734.appspot.com/o/resort1.jpg?alt=media&token=b4b6a178-16f6-40d7-83f5-591b07b28f8f", },
        // {name:"Marriot", location:"JM, Jamaica", image:"", },
        { name: "Western Cape", location: "FR, France", image: "https://firebasestorage.googleapis.com/v0/b/codetrainproject-4c734.appspot.com/o/tropical.jpg?alt=media&token=aa19383a-9d20-49fd-8b48-9daef23d740c", },
        { name: "Royal Senchi", location: "GH, Ghana", image: "https://firebasestorage.googleapis.com/v0/b/codetrainproject-4c734.appspot.com/o/ghana.jpg?alt=media&token=f3ba8451-c9ce-403e-af41-89bb509bde80", },
    ]

    const sites = [
        { name: "Silverbird", location: "Accra", image: "https://firebasestorage.googleapis.com/v0/b/codetrainproject-4c734.appspot.com/o/cinema.jpg?alt=media&token=273e3264-2d33-48a1-9538-6cff3f4723de" },
        { name: "Wli Watefalls", location: "Ghana", image: "https://firebasestorage.googleapis.com/v0/b/codetrainproject-4c734.appspot.com/o/photo-1531698451051-18c97580aeb2.jpg?alt=media&token=a0a2d599-3b6a-43c8-871b-226367f99735" },
        { name: "Cathedral", location: "Belgium", image: "https://firebasestorage.googleapis.com/v0/b/codetrainproject-4c734.appspot.com/o/Mullions-Amiens-Cathedral-France.jpg?alt=media&token=8d0b2469-8c02-4400-9183-1d2f57aec33c" }
    ]

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
                    <Text style={[styles.whiteText, styles.hello]}>Hello Kwame,</Text>
                    <Text style={[styles.whiteText, styles.choose]}>Choose Your Best Hotel</Text>
                </View>
                <View style={styles.searchRow}>
                    <MaterialIcons name="search" size={24} color="black" />
                    <TextInput style={styles.input} placeholder="Search a hotel" />
                    <Ionicons name="ios-options-outline" size={24} color="black" />
                </View>
            </View>

            <View style={styles.nearbyContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Near you</Text>
                    <Text style={styles.headerText}>See All</Text>
                </View>
                <View >
                    <FlatList
                        data={hotels}
                        renderItem={({ item }) => {
                            return <HotelCard name={item.name} location={item.location} image={item.image} />
                        }}
                        keyExtractor={(item) => { item.name }}
                        horizontal
                        showsHorizontalScrollIndicator={false}
                       
                    />
                </View>
            </View>

            <View style={styles.recommendedContainer}>
                <View style={styles.header}>
                    <Text style={styles.headerTitle}>Recommended</Text>
                    <Text style={styles.headerText}>See All</Text>
                </View>
                <View>
                    <FlatList
                        data={sites}
                        renderItem={({ item }) => {
                            return <RecommendedCard name={item.name} image={item.image} location={item.location} />
                        }}
                        keyExtractor={(item) => { item.location }}
                        horizontal={false}
                        numColumns={2}
                        // columnWrapperStyle={{ flexWrap: "wrap" }}
                    />
                </View>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 10,
        // marginTop:50,
    },
    greetingCard: {
        backgroundColor: "#1560bd",
        flex: 3.4,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
    },
    idRow: {
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        marginHorizontal: 20,
        marginTop: 40,
        marginBottom: 15,
    },
    profileImage: {
        width: 40,
        height: 40,
        borderRadius: 10,
    },
    whiteText: {
        color: "#fff"
    },
    hello: {
        fontSize: 20,
    },
    choose: {
        fontSize: 24,
        fontWeight: "bold"
    },
    searchRow: {
        marginTop: 15,
        marginHorizontal: 20,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        backgroundColor: "#fff",
        borderRadius: 10,
    },
    input: {
        height: 40,
    },
    textContainer: {
        marginHorizontal: 20,
    },
    nearbyContainer: {
        flex: 3,
        justifyContent: "center",
    },
    recommendedContainer: {
        flex: 4,
    },
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
        marginHorizontal: 20,
        alignItems: "center"
    },
    headerTitle: {
        fontWeight: "bold",
        fontSize: 22
    },
    headerText: {
        fontSize: 14,
        fontWeight: "bold"
    },
   
})
