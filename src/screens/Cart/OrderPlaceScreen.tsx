import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'
import { Colors } from '../../styles/colors'

type Props = {}

const OrderPlaceScreen = (props: Props) => {
  return (
    <View style={{flex:1, justifyContent: 'center', alignItems: 'center'}}>
      <LottieView source={require("../../../asstes/success.json")} style={{ height: 250, width: '50%' }} autoPlay loop />
      <Text style={styles.orderTxt}>Order Place Successfully</Text>
    </View>
  )
}

export default OrderPlaceScreen

const styles = StyleSheet.create({
    orderTxt: {fontSize: 20, color: Colors.dark}
})