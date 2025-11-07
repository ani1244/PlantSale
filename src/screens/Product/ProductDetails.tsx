import { Dimensions, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Header from '../../component/Header'
import { Colors } from '../../styles/colors'
import { ItemDataProps, RootNavigationProps } from '../../routes'
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel'
import Icon from 'react-native-vector-icons/Ionicons';
import { useSharedValue } from 'react-native-reanimated'
import TitleArea from '../../component/TitleArea'
import Product from '../../component/Product/Product'
import { productData } from '../../utils/mockData'
import { useNavigation } from '@react-navigation/native'
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../redux/reducer/main'
import { RootState } from '../../redux/store'
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const defaultDataWith6Colors = [
    "#B0604D",
    "#899F9C",
    "#B3C680",
    "#5C6265",
    "#F5D399",
    "#F1F1F1",
];

type Props = { item: any[] }


export default function ProductDetails({
    route: {
        params: { data },
    },
}: ItemDataProps) {


    const navigation = useNavigation<RootNavigationProps>();
    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);
    const dispatch = useDispatch();
    const [variationSelectedIndex, setVariationSelectedIndex] = useState(0);
    const [variationSizeSelectedIndex, setVariationSizeSelectedIndex] = useState(0);
    const [carousalImages, setCarousalImages] = useState(data?.variations[variationSelectedIndex]?.varation_images);
    const [variationPrice, setVariationPrice] = useState(data?.variations[variationSelectedIndex]?.size_variations[variationSizeSelectedIndex]?.price);
    

    const onPressPagination = (index: number) => {
        ref.current?.scrollTo({
            /**
             * Calculate the difference between the current index and the target index
             * to ensure that the carousel scrolls to the nearest index
             */
            count: index - progress.value,
            animated: true,
        });
    };

    const { cart } = useSelector((state: RootState) => state.Main);
    console.log(cart);

    const addProduct = (item: any) => {
        dispatch(addToCart(item));
    }

    useEffect(() =>{
        setCarousalImages(data?.variations[variationSelectedIndex]?.varation_images);
        setVariationSizeSelectedIndex(0);
        setVariationPrice(data?.variations[variationSelectedIndex]?.size_variations[variationSizeSelectedIndex]?.price);
    },[variationSelectedIndex]);

    useEffect(() =>{
       setVariationPrice(data?.variations[variationSelectedIndex]?.size_variations[variationSizeSelectedIndex].price);   
    },[variationSizeSelectedIndex]);

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.light }}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={Colors.secondary}
                translucent={true}
                animated={true}
            />
            <Header backBtn={true} />
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{ position: 'absolute', right: 25, top: 25, flexDirection: 'row', gap: 10 }}>
                    <View style={styles.circleIcon}>
                        <Icon name='heart' size={20} color='red' />
                    </View>
                    <View style={styles.circleIcon}>
                        <Icon name='share-social' size={20} color={Colors.dark2} />
                    </View>
                </View>

                <Carousel
                    ref={ref}
                    autoPlay={false}
                    autoPlayInterval={3000}
                    data={carousalImages}
                    height={300}
                    loop={true}
                    pagingEnabled={true}
                    snapEnabled={true}
                    width={width}
                    style={{
                        width: width,
                    }}
                    mode="parallax"
                    modeConfig={{
                        parallaxScrollingScale: 0.9,
                        parallaxScrollingOffset: 50,
                    }}
                    onProgressChange={progress}
                    renderItem={({ item, index }) => (
                        <ImageBackground
                            source={{ uri: item.fullImage }}
                            style={{ flex: 1, justifyContent: 'center' }}
                            imageStyle={{ borderRadius: 12 }}
                            resizeMode={'cover'} />
                    )}
                />

                <Pagination.Basic<{ color: string }>
                    progress={progress}
                    data={data?.variations[0]?.varation_images}
                    dotStyle={{
                        width: 25,
                        height: 4,
                        backgroundColor: Colors.secondary,
                        borderRadius: 5
                    }}
                    activeDotStyle={{
                        overflow: "hidden",
                        backgroundColor: Colors.primary,
                    }}
                    containerStyle={{
                        gap: 10,
                        marginBottom: 10,
                    }}
                    horizontal
                    onPress={onPressPagination}
                />
                <View style={styles.container}>
                    <Text style={styles.itemTitle}>{data.name}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
                        <Text style={styles.codeTxt}>Code - Y5235802</Text>
                        <View style={styles.catTabContainer}><Text style={styles.catTabTxt}>{data.category_name}</Text></View>
                    </View>

                    <View>
                        <Text>Select Varient</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                data.variations.map((item, index) => {
                                    return (
                                        <TouchableOpacity key={index} onPress={() => setVariationSelectedIndex(index)}>
                                              <ImageBackground  source={{ uri: item.varation_images[0].thumbnail }} style={{ width: 80, height: 80, marginRight: 8, marginVertical: 8 }} resizeMode='cover' imageStyle={[{borderRadius: 6}, variationSelectedIndex == index && {  borderWidth: 2, borderColor: Colors.bordercolor }]} />
                                        </TouchableOpacity>                                      
                                    )
                                })
                            }
                        </ScrollView>
                    </View>

                    <View>
                        <Text>Select Size (in inch)</Text>
                        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                            {
                                data.variations[variationSelectedIndex].size_variations.map((item, index) => {
                                    return (
                                        <TouchableOpacity onPress={() => setVariationSizeSelectedIndex(index)} style={[styles.sizeContainer, variationSizeSelectedIndex == index && {borderWidth: 1, borderColor: Colors.bordercolor}]} key={index}>
                                            <Text key={index} style={{ fontSize: 14, fontWeight: '500', color: Colors.light }}>{item.size}</Text>
                                        </TouchableOpacity>
                                    )
                                })
                            }
                        </ScrollView>
                        
                    </View>

                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 8 }}>
                        <View style={styles.priceContainer}>
                            <Text style={styles.priceTxt}>₹{variationPrice}</Text>
                            <Text style={styles.disPriceTxt}>₹{data.market_price}</Text>
                        </View>

                        {cart.some((value) => value.id == data.id) ?
                            (
                                <TouchableOpacity style={styles.addBtnContainer}
                                    onPress={() => navigation.navigate('CartScreen')}
                                >
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.light }}>Go to cart</Text>
                                    <Icon name='cart-outline' size={20} color={Colors.light} />
                                </TouchableOpacity>
                            ) :
                            (
                                <TouchableOpacity style={styles.addBtnContainer}
                                    onPress={() => addProduct(data)}
                                >
                                    <Text style={{ fontSize: 14, fontWeight: '500', color: Colors.light }}>Add to cart</Text>
                                    <Icon name='cart-outline' size={20} color={Colors.light} />
                                </TouchableOpacity>
                            )}

                    </View>

                    <View style={styles.keyFeatureArea}>
                        <Text style={{ fontSize: 14, fontWeight: '600' }}>Key Features</Text>
                        <Text style={styles.desTxt}>Product Functions: Connectorullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        <Text>Product Functions: Connectorullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                        <Text>Product Functions: Connectorullamco laboris nisi ut aliquip ex ea commodo consequat.</Text>
                    </View>

                    <TitleArea title='Recomanded Product' seeall={false} />
                    <Product data={productData} />

                </View>
            </ScrollView>
        </SafeAreaView >
    )
}


const styles = StyleSheet.create({
    container: { marginHorizontal: 20 },
    itemTitle: { fontSize: 16, fontWeight: '600' },
    catTabContainer: { paddingVertical: 2, paddingHorizontal: 5, borderRadius: 5, backgroundColor: Colors.tabBackground },
    catTabTxt: { fontSize: 12, fontWeight: '500', color: Colors.dark2, textTransform: 'capitalize' },
    codeTxt: { fontSize: 14, color: Colors.dark2 },
    priceTxt: { fontSize: 16, fontWeight: '600', color: Colors.dark2 },
    priceContainer: { flexDirection: 'row', gap: 5, alignItems: 'center' },
    disPriceTxt: { fontSize: 12, fontWeight: '500', color: Colors.listtxt, textDecorationLine: 'line-through', textDecorationStyle: 'solid' },
    addBtnContainer: { width: 140, height: 30, borderRadius: 15, backgroundColor: Colors.lightTxt, alignItems: 'center', flexDirection: 'row', justifyContent: 'center', gap: 8 },
    sizeContainer: { width: 40, height: 40, alignItems: 'center', justifyContent: 'center', borderRadius: 10,  backgroundColor: Colors.secondary, marginRight: 8 },
    keyFeatureArea: { width: '100%', padding: 10, borderWidth: 1, borderColor: Colors.dark2 },
    desTxt: { marginBottom: 5 },
    circleIcon: { width: 35, height: 35, justifyContent: 'center', alignItems: 'center', borderRadius: 25, backgroundColor: Colors.light, zIndex: 999, elevation: 5 }
})