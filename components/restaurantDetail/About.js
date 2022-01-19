import React from 'react';
import { View, Text, Image } from "react-native";
import { numberReg } from '../../utils/reg';

const RestaurantImage = (props) => (
    <Image
        source={{ uri: props.image }}
        style={{ width: "100%", height: 180 }}
    />
);

const RestaurantName = (props) => (
    <Text
        style={{
            fontSize: 21,
            fontWeight: "bold",
            marginTop: 6,
        }}
    >
        {props.name}
    </Text>
);

const RestaurantDescription = (props) => (
    <Text
        style={{
            marginTop: 6,
            fontWeight: "400",
            fontSize: 15,
        }}
    >
        {props.description}
    </Text>
);

export default function About(props) {
    const { name, image, price, reviews, rating, categories } = props.route.params;
    const formattedCategories = categories.map((cat) => cat.title).join(" · ");

    const description = `${formattedCategories} ${
        numberReg.test(price) ? " • " + price : ""
      } • 🎫 • ${rating} ⭐ (${reviews}+)`;

    return (
        <View>
            <RestaurantImage image={image} />
            <RestaurantName name={name} />
            <RestaurantDescription description={description} />
        </View>
    );
}