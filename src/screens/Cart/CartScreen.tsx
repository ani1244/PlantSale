import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../component/Header'
import { Colors } from '../../styles/colors'
import { cartData } from '../../utils/mockData'
import CartItem from '../../component/Cart/CartItem'
import AntIcon from 'react-native-vector-icons/AntDesign';
import { useNavigation } from '@react-navigation/native'
import { useSelector } from 'react-redux'
import { RootState } from '../../redux/store'

type Props = {}

const CartScreen = (props: Props) => {
    const navigation = useNavigation();
    const { cart } = useSelector((state: RootState) => state.Main);
    const [totcart, setTotCart] = useState(0);
    let total_cart = 0;

    useEffect(() => {

        cart.map((item, index) => {
            return total_cart += Number(item.variations[0]?.size_variations[0]?.price);
        });

        setTotCart(total_cart);

    }, [cart])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light }}>
            <Header backBtn={true} title='My Cart' />
            <ScrollView>
                <View style={{ marginHorizontal: 20, marginBottom: 50 }}>
                    {cart.map((item, index) => {
                        return (
                            <CartItem item={item} key={index} />
                        )
                    }
                    )}

                    <View style={styles.pricedetailsSection}>
                        <Text style={styles.priceDetailsTitle}>Price Details ({cart.length} Items)</Text>
                        <View style={{ marginHorizontal: 10 }}>
                            <View style={styles.priceTxtLine}>
                                <Text>Total MRP</Text>
                                <Text>₹ {totcart}.00</Text>
                            </View>
                            <View style={styles.priceTxtLine}>
                                <Text>Discount</Text>
                                <Text>₹ 0.00</Text>
                            </View>
                            <View style={styles.priceTxtLine}>
                                <Text>Special Packaging</Text>
                                <Text>₹ 0.00</Text>
                            </View>
                            <View style={styles.priceTxtLine}>
                                <Text>Delivery Charge</Text>
                                <Text>₹ 0.00</Text>
                            </View>
                            <View style={styles.priceTxtLine}>
                                <Text>Total Amount</Text>
                                <Text>₹ {totcart}.00</Text>
                            </View>
                        </View>
                    </View>

                </View>
            </ScrollView>

            <View style={styles.ordrBtnContainer}>
                <View>
                    <Text style={styles.distotalTxt}>
                        ₹ 360
                    </Text>
                    <View style={{ alignItems: 'center', flexDirection: 'row', gap: 8 }}>
                        <Text style={styles.totalTxt}>
                            ₹ {totcart}.00
                        </Text>
                        <AntIcon name="infocirlceo" size={12} color={Colors.lightTxt} />
                    </View>
                </View>

                <TouchableOpacity style={styles.placeBtn} onPress={() => navigation.navigate('OrderScreen')}>
                    <Text style={styles.placeBtnTxt}>
                        Place Order
                    </Text>
                </TouchableOpacity>
            </View>



        </SafeAreaView>
    )
}

export default CartScreen

const styles = StyleSheet.create({
    pricedetailsSection: {
        marginVertical: 20
    },
    priceDetailsTitle: {
        fontSize: 16,
        fontWeight: 600
    },
    priceTxtLine: {
        marginTop: 8,
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    ordrBtnContainer: {
        position: 'absolute',
        bottom: 0,
        height: 60,
        width: '100%',
        paddingHorizontal: 20,
        backgroundColor: Colors.light,
        borderTopColor: Colors.lightTxt,
        borderTopWidth: 1,
        justifyContent: 'space-between',
        flexDirection: 'row',
        alignItems: 'center'

    },
    placeBtn: {
        height: 40,
        width: 120,
        backgroundColor: Colors.lightTxt,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    placeBtnTxt: {
        color: Colors.light,
        fontSize: 14,
        fontWeight: '800'
    },
    totalTxt: {
        fontSize: 16,
        fontWeight: '800',
    },
    distotalTxt: {
        color: Colors.dark2,
        fontSize: 12,
        fontWeight: '400',
        textDecorationLine: 'line-through'
    }
})