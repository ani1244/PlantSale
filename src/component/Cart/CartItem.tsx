import { Alert, Dimensions, Image, Modal, Pressable, StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { Colors } from '../../styles/colors'
import { truncateTxt } from '../../utils/helper';
import Icon from 'react-native-vector-icons/Ionicons';
import AntIcon from 'react-native-vector-icons/AntDesign';
import ModalVarient from '../Modal/ModalVarient';
import { removeFromCart } from '../../redux/reducer/main';
import { useDispatch } from 'react-redux';

const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

type Props = {
    item: any[{}]
}

const CartItem = (props: Props) => {
    const { item } = props;
    const dispatch = useDispatch();

    const removeItem = (item: any) => {
        dispatch(removeFromCart(item));
    }


    return (
        <View>
            <View style={{ marginTop: 10, borderBottomWidth: 1, borderBottomColor: Colors.extraLightTxt, paddingBottom: 10, }}>
                <View style={{ flexDirection: 'row' }}>
                    <Image source={{ uri: item.variations[0]?.varation_images[0]?.fullImage }} style={{ width: 60, height: 60 }} resizeMode='cover' />
                    <View style={{ flex: 1, marginLeft: 10, justifyContent: 'space-between' }}>
                        <Text style={{ fontSize: 14, fontWeight: '500' }}>{truncateTxt(item.name, 100)}</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row', gap: 10, marginTop: 8 }}>

                    <View style={styles.dropdownWraper}>
                        <Text style={styles.dropdownTitle}>Qty: </Text>
                        <Text style={styles.dropdownTitle}>{item.quantity}</Text>
                        {/* <Icon name="chevron-down" size={15} /> */}
                    </View>
                    <View style={styles.dropdownWraper}>
                        <Text style={styles.dropdownTitle}>Varient: </Text>
                        <Text style={styles.dropdownTitle}>1</Text>
                    </View>
                    <View style={styles.dropdownWraper}>
                        <Text style={styles.dropdownTitle}>Size: </Text>
                        <Text style={styles.dropdownTitle}>12 inch.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.priceRemoveScection}>
                <Text style={{ fontSize: 16, fontWeight: '600' }}>₹ {item.variations[0]?.size_variations[0]?.price}</Text>
                <View style={{ flexDirection: 'row', alignItems: 'center', gap: 10 }}>
                    <View style={{ width: 30, height: 30, backgroundColor: Colors.backgroungLightColor, justifyContent: 'center', alignItems: 'center', borderRadius: 25, elevation: 5 }}>
                        <Icon name='heart' size={15} color='red' />
                    </View>
                    <TouchableOpacity onPress={() => removeItem(item)} style={{ width: 30, height: 30, backgroundColor: Colors.backgroungLightColor, justifyContent: 'center', alignItems: 'center', borderRadius: 25, elevation: 5 }}>
                        <AntIcon name="delete" size={15} />
                    </TouchableOpacity>
                </View>
            </View>

        </View>
    )
}

export default CartItem

const styles = StyleSheet.create({
    dropdownWraper: { flexDirection: 'row', alignItems: 'center', gap: 5, backgroundColor: Colors.backgroungLightColor, borderRadius: 5, paddingVertical: 2, paddingHorizontal: 8 },
    dropdownTitle: { fontSize: 14, fontWeight: '500' },
    priceRemoveScection: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginVertical: 5 },

})