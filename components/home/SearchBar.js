import React from 'react';
import { View, Text } from 'react-native';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';

export default function SearchBar({ cityHandler }) {
    return (
        <View style={{ marginTop: 12, flexDirection: "row" }}>
            <GooglePlacesAutocomplete
                query={{ key: "AIzaSyDH20lJw6sZTA1WuKlCde0BYIQexBwPZk0" }}
                onPress={(data, details = null) => {
                    console.log(data.description);
                    const city = data.description.split(',')[0];
                    cityHandler(city);
                }}
                placeholder="Search"
                styles={{
                    textInput: {
                        backgroundColor: "#ececec",
                        borderRadius: 20,
                        fontWeight: "bold",
                        marginTop: 5,
                    },
                    textInputContainer: {
                        backgroundColor: "#ececec",
                        borderRadius: 30,
                        flexDirection: "row",
                        alignItems: "center",
                        marginTop: 5,
                        marginBottom: 5,
                    },
                }}
                renderLeftButton={() => (
                    <View style={{ marginLeft: 12 }}>
                        <Ionicons name="location-sharp" size={24} />
                    </View>
                )}
                renderRightButton={() => (
                    <View
                        style={{
                            flexDirection: "row",
                            marginRight: 8,
                            backgroundColor: "white",
                            paddingVertical: 12,
                            paddingHorizontal: 12,
                            borderRadius: 30,
                            alignItems: "center",
                        }}
                    >
                        <AntDesign name="clockcircle" size={11} style={{ marginRight: 6 }} />
                        <Text style={{ fontSize: 15, fontWeight: "bold" }}>Search</Text>
                    </View>
                )}
            />
        </View>
    );
}
