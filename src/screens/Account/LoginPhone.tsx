import { Image, ImageBackground, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, { FadeIn, FadeInDown, FadeInRight } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import DismissKeyboard from '../../component/DismissKeyboard';

type Props = {
}

const LoginPhone = (props: Props) => {
    const navigation = useNavigation();
    return (
        <View style={styles.container}>
            <StatusBar
                barStyle={'dark-content'}
                backgroundColor={'transparent'}
                translucent={true}
                animated={true}
            />
            <ImageBackground source={require('../../../asstes/images/bg.jpg')} style={{ flex: 1 }} resizeMode='cover'>
                <LinearGradient colors={['transparent', 'rgba(255, 255, 255, 0.9)', 'rgba(255, 255, 255, 1)']} style={styles.gradient}>

                   
                    <DismissKeyboard>
                        <View style={styles.wrapper}>
                        <Animated.Image source={require('../../../asstes/images/logo.png')} style={styles.logo} entering={FadeIn.delay(500).duration(500)} />
                            <Animated.Text style={styles.logintxt} entering={FadeInRight.delay(600).duration(400).springify()}>Login</Animated.Text>
                            <Animated.Text style={styles.subtitletxt} entering={FadeInRight.delay(800).duration(400).springify()} >One Stop Solution for all Plant</Animated.Text>
                            <Animated.View style={styles.txtInput} entering={FadeInDown.delay(600).duration(400)}>
                                <View style={styles.btnwrap} >
                                    <Icon name="phone-portrait-outline" size={20} color={Colors.primary} />
                                    <TextInput keyboardType='phone-pad' style={{ width: '90%', height: 40 }} placeholder='Enter your phone number' />
                                </View>
                            </Animated.View>
                            <Animated.View style={[styles.loginBtn, { backgroundColor: Colors.primary }]} entering={FadeInDown.delay(800).duration(400)}>
                                <TouchableOpacity style={[styles.btnwrap, { width: '100%', justifyContent: 'center' }]} onPress={() => navigation.navigate('OtpScreen')}>
                                    <Icon name="send-outline" size={20} color={Colors.light} />
                                    <Text style={styles.btnTxt}>Send OTP</Text>
                                </TouchableOpacity>
                            </Animated.View>
                        </View>
                    </DismissKeyboard>
                </LinearGradient>
            </ImageBackground>
        </View >
    )
}

export default LoginPhone

const styles = StyleSheet.create({
    container: { flex: 1 },
    wrapper: { position: 'absolute', bottom: 20, width: '100%', paddingHorizontal: 20, alignItems: 'center' },
    logo: { width: 200, height: 200, marginBottom: 60, alignSelf: 'center' },
    gradient: { flex: 1, position: 'absolute', top: 0, bottom: 0, left: 0, right: 0 },
    logintxt: { fontSize: 24, letterSpacing: 1, color: Colors.primary, fontWeight: '600', marginVertical: 8 },
    subtitletxt: { fontSize: 14, color: Colors.dark2, marginBottom: 15 },
    loginBtn: { marginVertical: 10, height: 50, width: '100%', borderRadius: 24, justifyContent: 'center', alignItems: 'center' },
    btnTxt: { fontSize: 16, color: Colors.light, letterSpacing: 0.5, fontWeight: '600', },
    btnwrap: { flexDirection: 'row', gap: 8, alignItems: 'center' },
    txtInput: { width: '100%', borderRadius: 24, height: 40, paddingHorizontal: 20, marginVertical: 10, justifyContent: 'center', backgroundColor: Colors.light, borderWidth: 1, borderColor: Colors.primary }
})