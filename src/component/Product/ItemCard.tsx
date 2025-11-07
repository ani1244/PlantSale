import { Image, ImageBackground, Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import { Link, useNavigation } from '@react-navigation/native';
import { RootNavigationProps } from '../../routes';
import { truncateTxt } from '../../utils/helper';

type Props = {
    item: any[{}],
    index: number,
    dataLength: number
}

const ItemCard = (props: Props) => {
    const { item } = props;
    const navigation = useNavigation<RootNavigationProps>();
    return (
        <View style={styles.mainView}>
            {/* <View style={{ flex:2, paddingVertical: 10, }}> */}



            <ImageBackground style={styles.image} source={{ uri: item.variations[0]?.varation_images[0]?.fullImage }} resizeMode='cover' imageStyle={{ borderTopLeftRadius: 10, borderTopRightRadius: 10 }} >
                <Pressable onPress={() => navigation.navigate('ProductDetails', { data: item })}>
                    <View style={{ position: 'absolute', right: 8, top: 8, width: 25, height: 25, justifyContent: 'center', alignItems: 'center', borderRadius: 20, backgroundColor: Colors.backgroundOther }}>
                        <Icon name='heart' size={15} color='red' />
                    </View>
                </Pressable>
            </ImageBackground>



            {/* </View> */}
            <View style={{ flex: 1, padding: 8 }}>
                <Pressable onPress={() => navigation.navigate('ProductDetails', { data: item })} >
                    <Text style={styles.itemName}>{truncateTxt(item.name, 35)}</Text>
                </Pressable>
                <View style={styles.pricecartWrap}>
                    <Text style={styles.price}>₹ {item.price}</Text>
                    <View style={{ flexDirection: 'row', gap: 5 }}>

                        <View style={{ width: 60, height: 20, borderRadius: 10, backgroundColor: Colors.lightTxt, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 5 }}>
                            <Icon name='add-circle' size={15} color={Colors.light} />
                            <Text style={{ fontSize: 12, color: Colors.light }}>Add</Text>
                        </View>

                        {/* <View style={{ width: 60, height: 20, borderRadius: 10, backgroundColor: Colors.backgroundOther, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap:5 }}>
                            <Icon name='remove-circle' size={18} color={Colors.dark2} />
                            <Text style={{fontSize: 12, color: Colors.dark2, fontWeight: '600'}}>1</Text>
                            <Icon name='add-circle' size={18} color={Colors.dark2} />
                        </View> */}

                    </View>
                </View>
            </View>

        </View >
    )
}

export default ItemCard

const styles = StyleSheet.create({
    mainView: {
        marginHorizontal: 8, width: 140, height: 200, flex: 1, borderRadius: 10,
        elevation: 4,
        backgroundColor: Colors.light,

    },
    image: { flex: 2, justifyContent: 'flex-start' },
    itemName: { fontSize: 12 },
    pricecartWrap: { position: 'absolute', bottom: 5, left: 8, flexDirection: 'row', justifyContent: 'space-between', width: '100%' },
    price: { fontSize: 12 }
})