import { Dimensions, Image, ImageBackground, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Colors } from '../../styles/colors'
import Header from '../../component/Header'
import LinearGradient from 'react-native-linear-gradient'
import Carousel, { ICarouselInstance, Pagination } from 'react-native-reanimated-carousel'
import { carouselData, categoriesData, productData } from '../../utils/mockData'
import { useSharedValue } from 'react-native-reanimated'
import TitleArea from '../../component/TitleArea'
import Categories from '../../component/Home/Categories'
import Product from '../../component/Product/Product'
import Icon from 'react-native-vector-icons/Ionicons';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;

type Props = {}

const HomeScreen = (props: Props) => {
    const ref = React.useRef<ICarouselInstance>(null);
    const progress = useSharedValue<number>(0);

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


    return (

        <SafeAreaView style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={Colors.secondary}
                translucent={true}
                animated={true}

            />
            <Header />

            <LinearGradient colors={['#86bd3e', 'rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 1)']} style={styles.gradient}>
                <ScrollView>
                    <Carousel
                        ref={ref}
                        autoPlay={true}
                        autoPlayInterval={3000}
                        data={carouselData}
                        height={width / 2}
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
                                source={item.image}
                                style={{ flex: 1, justifyContent: 'center' }}
                                imageStyle={{ borderRadius: 12 }}
                                resizeMode={'cover'} />
                        )}
                    />

                    <Pagination.Basic
                        progress={progress}
                        data={carouselData}
                        dotStyle={{ backgroundColor: Colors.secondary, borderRadius: 50 }}
                        containerStyle={{ gap: 5, marginTop: 10 }}
                        onPress={onPressPagination}
                    />
                    <View style={{ marginHorizontal: 20 }}>
                        <TitleArea title='Shop By Category' />
                        <Categories data={categoriesData} />

                        <TitleArea title='Tranding Products' seeall={true} />
                        <Product data={productData} />

                        <TitleArea title='New Arrivals' seeall={true} />
                        <Product data={productData} />

                        <View style={styles.weofferMainView}>
                            <Text style={styles.weofferTxt}>What We Offer</Text>
                            <View style={styles.offeritemContainer}>
                                <View style={styles.offeritem}>
                                    <Image source={require('../../../asstes/images/icons/free-delivery.png')} style={styles.imgstyle} resizeMode='contain' />
                                    <Text style={styles.offerTitle}>Free Delivery</Text>
                                    <Text style={styles.offersubtitle}>Lorem Ipsum is simply dummy text.</Text>
                                </View>
                                <View style={styles.offeritem}>
                                    <Image source={require('../../../asstes/images/icons/24x7.png')} style={styles.imgstyle} resizeMode='contain' />
                                    <Text style={styles.offerTitle}>24 x 7</Text>
                                    <Text style={styles.offersubtitle}>Lorem Ipsum is simply dummy text of the.</Text>
                                </View>
                            </View>
                            <View style={styles.offeritemContainer}>
                                <View style={styles.offeritem}>
                                    <Image source={require('../../../asstes/images/icons/cashback.png')} style={styles.imgstyle} resizeMode='contain' />
                                    <Text style={styles.offerTitle}>Cashback</Text>
                                    <Text style={styles.offersubtitle}>Lorem Ipsum is simply dummy text of the.</Text>
                                </View>
                                <View style={styles.offeritem}>
                                    <Image source={require('../../../asstes/images/icons/premium-quality.png')} style={styles.imgstyle} resizeMode='contain' />
                                    <Text style={styles.offerTitle}>Premium Quality</Text>
                                    <Text style={styles.offersubtitle}>Lorem Ipsum is simply dummy text of the.</Text>
                                </View>
                            </View>
                        </View>

                        <View style={styles.trandingMainView}>
                            <Text style={styles.weofferTxt}>Tranding Today</Text>
                            <Image source={require('../../../asstes/images/Tranding_Today.png')} style={{ width: width - 100, height: 200, marginVertical: 10 }} resizeMode='contain' />
                            <Text style={styles.disTxt}>20% Discount Of All Products</Text>
                            <Text style={styles.secTxt}>Lorem Ipsum is Just  a Dummy Text</Text>
                            <Text style={{ textAlign: 'center', color: Colors.extraLightTxt, marginBottom: 10 }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </Text>
                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <Icon name="checkmark" size={15} color={Colors.secondary} />
                                <Text style={{ color: Colors.lightTxt }}>Material expose like metals</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <Icon name="checkmark" size={15} color={Colors.secondary} />
                                <Text style={{ color: Colors.lightTxt }}>Material expose like metals</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <Icon name="checkmark" size={15} color={Colors.secondary} />
                                <Text style={{ color: Colors.lightTxt }}>Material expose like metals</Text>
                            </View>
                            <View style={{ flexDirection: 'row', gap: 5, alignItems: 'center' }}>
                                <Icon name="checkmark" size={15} color={Colors.secondary} />
                                <Text style={{ color: Colors.lightTxt }}>Material expose like metals</Text>
                            </View>

                            <TouchableOpacity style={styles.btn}>
                                <Text style={{color: Colors.light, fontWeight: '600'}}>Shop Now</Text>
                            </TouchableOpacity>
                        </View>

                        <TitleArea title='Featured Products' seeall={true} />
                        <Product data={productData} />

                    </View>

                </ScrollView>
            </LinearGradient>

        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: Colors.light },
    gradient: { flex: 1, position: 'absolute', top: 80, bottom: 0, left: 0, right: 0 },
    weofferMainView: { width: '100%' },
    trandingMainView: { width: '100%', alignItems: 'center' },
    offeritemContainer: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
    offeritem: { width: (width / 2) - 30, height: 150, backgroundColor: Colors.light, elevation: 4, borderRadius: 10, alignItems: 'center', justifyContent: 'center', padding: 15 },
    weofferTxt: { textAlign: 'center', fontSize: 16, fontWeight: '600' },
    offersubtitle: { fontSize: 11, color: Colors.secondary, textAlign: 'center' },
    imgstyle: { width: 40, height: 40 },
    offerTitle: { fontSize: 14, fontWeight: '600', paddingVertical: 5, color: Colors.dark2 },
    disTxt: { fontSize: 18, fontWeight: '600' },
    secTxt: { fontSize: 14, fontWeight: '400', color: Colors.lightTxt, marginVertical: 10 },
    btn: { width: 120, height: 40, justifyContent: 'center', alignItems: 'center', backgroundColor: Colors.lightTxt, marginVertical: 10, borderRadius: 5 }

})