import { Dimensions, Image, ImageBackground, KeyboardAvoidingView, Platform, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import React, { useState } from 'react';
import LinearGradient from 'react-native-linear-gradient';
import { Colors } from '../../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';
import Animated, { FadeIn, FadeInDown, FadeInRight } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';
import DismissKeyboard from '../../component/DismissKeyboard';

type Props = {
}

const OtpScreen = (props: Props) => {
    const navigation = useNavigation();
    const inputRefs: any[] = [
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
        React.createRef(),
    ];
    const [otpInput, setOtpInput] = useState([
        { id: 1, value: '', autoFocus: false, showPlaceHolder: true },
        { id: 2, value: '', autoFocus: false, showPlaceHolder: true },
        { id: 3, value: '', autoFocus: false, showPlaceHolder: true },
        { id: 4, value: '', autoFocus: false, showPlaceHolder: true },
        { id: 5, value: '', autoFocus: false, showPlaceHolder: true },
        { id: 6, value: '', autoFocus: false, showPlaceHolder: true },
    ]);

    const handleKeyPressTextInput = (index: number, key: string) => {
        if (key === 'Backspace') {
            if (index != 0) {
                inputRefs[index - 1] && inputRefs[index - 1].focus();
            }
        }
    };

    const setOtp = (val: string, index: number) => {
        let optArr = [...otpInput];
        optArr[index].value = val;
        setOtpInput(optArr);
        if (index < 5 && val != '') {
            inputRefs[index + 1].focus();
        }
    };

    const OtpInputView = () => {
        return (
            <View style={styles.otpContainer}>
                {otpInput.map((item, index) => {
                    return (
                        <TextInput
                            keyboardType="number-pad"
                            onChangeText={val => setOtp(val, index)}
                            onKeyPress={({ nativeEvent: { key } }) => {
                                handleKeyPressTextInput(index, key);
                            }}
                            maxLength={1}
                            style={styles.otpInput}
                            value={item.value}
                            ref={r => (inputRefs[index] = r)}
                            key={index}
                        />
                    );
                })}
            </View>
        );
    };


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
                            <Animated.Text style={styles.logintxt} entering={FadeInRight.delay(600).duration(400).springify()}>Enter OTP</Animated.Text>
                            <Animated.Text style={styles.subtitletxt} entering={FadeInRight.delay(800).duration(400).springify()} >Otp sent to your mobile number</Animated.Text>

                            <Animated.View  entering={FadeInDown.delay(600).duration(400)}>
                                {OtpInputView()}
                            </Animated.View>
                            <Animated.View style={[styles.loginBtn, { backgroundColor: Colors.primary }]} entering={FadeInDown.delay(800).duration(400)}>
                                <TouchableOpacity style={[styles.btnwrap, { width: '100%', justifyContent: 'center' }]} onPress={() => navigation.navigate('HomeScreen')}>
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

export default OtpScreen

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
    txtInput: { width: '100%', borderRadius: 24, height: 40, paddingHorizontal: 20, justifyContent: 'center', backgroundColor: Colors.light, borderWidth: 1, borderColor: Colors.primary },
    otpInput: {
        borderColor: Colors.primary,
        borderWidth: 0.6,
        color: Colors.dark,
        borderRadius: 5,
        height: Platform.OS === 'ios' ? 50 : 45,
        width: (Dimensions.get('window').width - 120) / 6,
        textAlign: 'center',
        padding: 5,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 10,
        marginVertical: 16,
        gap: 5
    },
})