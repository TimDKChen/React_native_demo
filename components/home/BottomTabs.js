import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Icon = (props) => (
    <TouchableOpacity>
        <View>
            <FontAwesome5
                name={props.icon}
                size={24}
                style={{
                    marginBottom: 3,
                    alignSelf: "center",
                }}
            />
            <Text>{props.text}</Text>
        </View>
    </TouchableOpacity>
);

export default function BottomTabs() {
    return (
        <View
            style={{
                flexDirection: "row",
                margin: 10,
                marginHorizontal: 30,
                justifyContent: "space-between",
            }}
        >
            <Icon icon="home" text="Home" />
            <Icon icon="search" text="Browse" />
            <Icon icon="shopping-bag" text="Grocery" />
            <Icon icon="receipt" text="Orders" />
            <Icon icon="user" text="Account" />
        </View>
    )
}
