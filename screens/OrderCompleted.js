import React, { useState, useEffect, useMemo } from 'react';
import { View, Text, SafeAreaView, ScrollView } from 'react-native';
import GlobalStyles from '../utils/GlobalStyles';
import LottieView from 'lottie-react-native';
import MenuItems from '../components/restaurantDetail/MenuItems';
import { colRef } from '../firebase';
import { getDocs } from 'firebase/firestore/lite';

export default function OrderCompleted() {
    const [lastOrder, setLastOrder] = useState({
        items: [
          {
            title: "Bologna",
            description: "With butter lettuce, tomato and sauce bechamel",
            price: "$13.50",
            image:
              "https://www.modernhoney.com/wp-content/uploads/2019/08/Classic-Lasagna-14-scaled.jpg",
          },
        ],
        restaurantName: "",
    });

    useEffect( () => {
        getDocs(colRef).then((snapshot) => {
            let orders = [];
            snapshot.docs.forEach((doc) => {
                orders.push({ ...doc.data(), id: doc.id }); 
            });
            orders.sort((a, b) => {
               const timeA = a.createdAt.seconds;
               const timeB = b.createdAt.seconds;
               if (timeA < timeB) return -1;
               if (timeA > timeB) return 1;
               return 0; 
            });
            console.log("Orders:", orders);
            setLastOrder(orders.slice(-1)[0]);
        }).catch(err => {
            console.log('Firebase error');
        });
    }, []);

    const total = useMemo(() => {
        // // 只有一项所以有bug
        const total = lastOrder.items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);
        return total;
    }, [lastOrder]);

    return (
        <SafeAreaView style={{...GlobalStyles, backgroundColor: "white" }}>
            <View
                style={{
                    margin: 12,
                    alignItems: "center",
                    backgroundColor: "white",
                }}
            >
                <ScrollView showsVerticalScrollIndicator={false}>
                    <LottieView
                        style={{ height: 100, alignSelf: "center", marginBottom: 30 }}
                        source={require("../assets/animations/check-mark.json")}
                        autoPlay
                        speed={0.5}
                        loop={false}
                    />
                    <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Your order at {lastOrder.restaurantName} has been placed for $ {total}
                    </Text>
                    <MenuItems
                        foods={lastOrder.items}
                        hideCheckbox={true}
                        marginLeft={10}
                    />
                    <LottieView
                        style={{ height: 200, alignSelf: "center" }}
                        source={require("../assets/animations/cooking.json")}
                        autoPlay
                        speed={0.5}
                    />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}
