import React, { useState } from "react";
import { View, Text, TouchableOpacity, Modal, StyleSheet } from "react-native";
import { useSelector } from "react-redux";
import OrderItem from "./OrderItem";
import { colRef } from "../../firebase";
import { addDoc, serverTimestamp } from "firebase/firestore/lite";
import { useDispatch } from "react-redux";
import LottieView from "lottie-react-native";

export default function ViewCart({ navigation }) {
    const dispatch = useDispatch();
    const [modalVisible, setModalVisible] = useState(false);
    const [loading, setLoading] = useState(false);

    const { items, restaurantName } = useSelector(
        (state) => state.cartReducer.selectedItems
    );

    const total = items
        .map((item) => Number(item.price.replace("$", "")))
        .reduce((prev, curr) => prev + curr, 0);

    const addOrderToFireBase = () => {
        setLoading(true);
        addDoc(colRef, {
            items: items,
            restaurantName: restaurantName,
            createdAt: serverTimestamp(),
        }).then(() => {
            dispatch({ type: "CLEAR_CART" });
            setTimeout(() => {
                setLoading(false);
                navigation.navigate("OrderCompleted");
            }, 2500);
        });
    };
    
    const styles = StyleSheet.create({
        modalContainer: {
            flex: 1,
            justifyContent: "flex-end",
            backgroundColor: "rgba(0,0,0,0.7)",
        },

        modalCheckoutContainer: {
            backgroundColor: "white",
            padding: 16,
            height: 500,
            borderWidth: 1,
        },

        restaurantName: {
            textAlign: "center",
            fontWeight: "600",
            fontSize: 18,
            marginBottom: 10,
        },

        subtotalContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            padding: 12,
        },

        subtotalText: {
            textAlign: "left",
            fontWeight: "bold",
            fontSize: 15,
            marginBottom: 10,
        },
    });

    const checkoutModalContent = () => {
        return (
            <>
                <View style={styles.modalContainer}>
                    <View style={styles.modalCheckoutContainer}>
                        <Text style={styles.restaurantName}>{restaurantName}</Text>
                        {items.map((item, index) => (
                            <OrderItem key={index} item={item} />
                        ))}
                        <View style={styles.subtotalContainer}>
                            <Text style={styles.subtotalText}>Subtotal</Text>
                            <Text style={{ fontSize: 15 }}>$ {total}</Text>
                        </View>
                        <View style={{ flexDirection: "row", justifyContent: "center" }}>
                            <TouchableOpacity
                                style={{
                                    marginTop: 20,
                                    backgroundColor: "black",
                                    alignItems: "center",
                                    padding: 8,
                                    borderRadius: 30,
                                    width: 280,
                                    flexDirection: "row",
                                    justifyContent: "space-evenly"
                                }}
                                onPress={() => {
                                    setModalVisible(false);
                                    addOrderToFireBase(); 
                                }}
                            >
                                <Text style={{ color: "white", fontSize: 18 }}>Checkout</Text>
                                <Text style={{ color: "white", fontSize: 18 }}>
                                    {total ? `$ ${total}` : ""}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </>
        );
    };

    return (
        <>
            <Modal
                animationType="slide"
                visible={modalVisible}
                transparent={true}
                onRequestClose={() => setModalVisible(false)}
            >
                {checkoutModalContent()}
            </Modal>
            {total ? (
                <View
                    style={{
                        flex: 1,
                        alignItems: "center",
                        justifyContent: "center",
                        flexDirection: "row",
                        position: "absolute",
                        bottom: 12,
                        zIndex: 999,
                    }}
                >
                    <View
                        style={{
                            flexDirection: "row",
                            justifyContent: "center",
                            width: "100%",
                        }}
                    >
                        <TouchableOpacity
                            style={{
                                marginTop: 20,
                                backgroundColor: "black",
                                flexDirection: "row",
                                justifyContent: "space-evenly",
                                padding: 15,
                                borderRadius: 30,
                                width: 300,
                                position: "relative",
                            }}
                            onPress={() => setModalVisible(true)}
                        >
                            <Text style={{ color: "white", fontSize: 20, marginRight: 30 }}>
                                View Cart
                            </Text>
                            <Text style={{ color: "white", fontSize: 20 }}>$ {total}</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            ) : (
                <></>
            )}
            {loading ? (
                <View
                    style={{
                        backgroundColor: "black",
                        position: "absolute",
                        opacity: 0.6,
                        justifyContent: "center",
                        alignItems: "center",
                        height: "100%",
                        width: "100%",
                    }}
                >
                    <LottieView
                        style={{ height: 200 }}
                        source={require("../../assets/animations/scanner.json")}
                        autoPlay
                        speed={3}
                    />
                </View>
            ) : (
                <></>
            )}
        </>
    );
}