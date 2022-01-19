import React from 'react';
import { View, Text } from 'react-native';

export default function OrderItem({ item }) {
    const { title, price } = item;
    return (
        <View
            style={{
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 12,
                borderBottomWidth: 1,
                borderBottomColor: "#999",
            }}
        >
            <Text style={{ fontSize: 15}}>{title}</Text>
            <Text style={{ opacity: 0.7, fontSize: 15 }}>{price}</Text>
        </View>
    );
}
