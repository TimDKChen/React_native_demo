import React, { useState, useEffect } from 'react';
import GlobalStyles from '../utils/GlobalStyles';
import { SafeAreaView, Text, View, ScrollView } from 'react-native';
import HeaderTabs from '../components/home/HeaderTabs';
import SearchBar from '../components/home/SearchBar';
import Categories from '../components/home/Categories';
import RestaurantItems, { localRestaurants } from '../components/home/RestaurantItems';
import BottomTabs from '../components/home/BottomTabs';
import { Divider } from 'react-native-elements/dist/divider/Divider';

const YELP_API_KEY =
    "bsblS36Z9xrf00XTZWixs8MxDxWOvvGT9OqYSTrS76FxKRkmx1r8Y3_AJlI_maTcad8XmViNEnZfgC_kOjIjOpES8z0l10LEPhUanPOfjz7uYzb7-_DduT02VWPhYXYx";

export default function Home({ navigation }) {
    const [activeTab, setActiveTab] = useState("Delivery");
    const [restaurantData, setRestaurantData] = useState(localRestaurants);
    const [city, setCity] = useState("San Fransico");

    const getRestaurantsFromYelp = () => {
        const yelpUrl = `https://api.yelp.com/v3/businesses/search?term=restaurants&location=${city}`;
        const apiOptions = {
            headers: {
                Authorization: `Bearer ${YELP_API_KEY}`,
            },
        };

        return fetch(yelpUrl, apiOptions)
        .then((res) => res.json())
        .then((json) => setRestaurantData(
            json.businesses.filter((business) => business.transactions.includes(activeTab.toLowerCase()))
            )
        );
    };

    useEffect(() => {
        getRestaurantsFromYelp();
    }, [city, activeTab]);

    return (
        <SafeAreaView style={GlobalStyles.androidSafeArea}>
            <View style={{ backgroundColor: "white", padding: 12 }}>
                <HeaderTabs activeTab={activeTab} setActiveTab={setActiveTab} />
                <SearchBar cityHandler={setCity} />
            </View>            
            <ScrollView showsVerticalScrollIndicator={false} style={{ backgroundColor: "white", padding: 12 }}>
                <Categories />
                <RestaurantItems
                    restaurantData={restaurantData}
                    navigation={navigation}
                />
            </ScrollView>
            <Divider width={1} />
            <BottomTabs />
        </SafeAreaView>
    )
};
