import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../component/Header'
import { Colors } from '../../styles/colors'
import { cartData } from '../../utils/mockData'
import CartItem from '../../component/Cart/CartItem'
import AntIcon from 'react-native-vector-icons/AntDesign';
import Ionicons from 'react-native-vector-icons/Ionicons';
import TitleArea from '../../component/TitleArea'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'

type Props = {}

const OrderScreen = (props: Props) => {
    const navigation = useNavigation();
    const { cart } = useSelector((state: RootState) => state.Main);
    const [totcart, setTotCart] = useState(0);
    const [delvOption, setdelvOption] = useState('cash');
    const orderSummTxt = "Order Summery (" + cart.length + ")";
    let total_cart = 0;
    useEffect(() => {

        cart.map((item, index) => {
            return total_cart += Number(item.variations[0]?.size_variations[0]?.price);
        });
        setTotCart(total_cart);

    }, [cart]);


    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light }}>
            <Header backBtn={true} title='Order' />
            <ScrollView>

                <View style={{ marginHorizontal: 20, marginBottom: 50 }}>
                    <View style={{ marginTop: 10 }}>
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>Shipping Address</Text>
                        <Text>
                            Jirat kaliagarh,District - Hooghly. Pin code - 712501. State - West Bengal
                        </Text>
                        <View style={[{ width: '100%', flexDirection: 'row', gap: 8, marginVertical: 10 }, styles.placeBtn]}>
                            <Ionicons name="create-outline" size={20} color={Colors.light} />
                            <Text style={styles.placeBtnTxt}>
                                Change & Edit Address
                            </Text>
                        </View>
                        <View>

                        </View>
                    </View>

                    <TitleArea title={orderSummTxt} />
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
                    <View >
                        <Text style={{ fontSize: 18, fontWeight: '600' }}>Choose Payment Method</Text>
                        <View style={{ flexDirection: 'row', gap: 15, marginVertical: 20, alignSelf: 'center' }}>
                            <View style={{width: '40%', height: 120,alignItems:'center'}}>
                                <TouchableOpacity onPress={() => setdelvOption('cash')} style={[styles.paymentBtn, delvOption == 'cash' ? { borderWidth: 1, borderColor: 'rgba(248, 63, 134, 1)' } : {}]}>
                                    <Image source={require('./../../../asstes/images/cash.png')} style={{ width: 50, height: 50 }} resizeMode='contain' />
                                </TouchableOpacity>
                                <Text>Cash</Text>
                            </View>
                            <View style={{width: '40%', height: 120,alignItems:'center'}}>
                                <TouchableOpacity onPress={() => setdelvOption('online')} style={[styles.paymentBtn, delvOption != 'cash' ? { borderWidth: 1, borderColor: 'rgba(248, 63, 134, 1)' } : {}]}>
                                    <Image source={require('./../../../asstes/images/card.png')} style={{ width: 50, height: 50 }} resizeMode='contain' />
                                </TouchableOpacity>
                                 <Text>Online</Text>
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

                <TouchableOpacity onPress={() => navigation.navigate('OrderPlaceScreen')} style={[{ width: '40%' }, styles.placeBtn]}>
                    <Text style={styles.placeBtnTxt}>
                        Order Now
                    </Text>
                </TouchableOpacity>
            </View>



        </SafeAreaView>
    )
}

export default OrderScreen

const styles = StyleSheet.create({
    pricedetailsSection: {
        marginVertical: 10
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
    },
    paymentBtn: {
        width: '100%',
        height: 80,
        borderRadius: 18,
        backgroundColor: 'rgba(239, 245, 255, 1)',
        alignItems: 'center',
        justifyContent: 'center'

    }
})