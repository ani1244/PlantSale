import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import IconButton from './Button/IconButton'
import UserAvatar from './UserAvater';
import { useNavigation } from '@react-navigation/native';
import { Colors } from '../styles/colors';
import Icon from 'react-native-vector-icons/Ionicons';

type Props = {
    backBtn?: boolean;
    hideSearch?: boolean;
    openBottomSheet?: () => void;
    title?: string;
}

const Header = ({
    backBtn = false,
    hideSearch = false,
    openBottomSheet,
    title = ""
}: Props) => {
    const navigation = useNavigation();

    const goBack = () => {
        navigation.goBack();
    };

    return (
        <View style={styles.mainView}>
            {backBtn ?
                <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <IconButton
                        name={backBtn ? 'chevron-back' : 'menu'}
                        size={28}
                        color={'#000'}
                        onPress={backBtn ? goBack : openBottomSheet}
                    />
                    {title && <Text style={{fontSize: 16, fontWeight: '600'}}> {title}</Text>}
                </View>
                :
                <View>
                    <Text style={styles.hellotxt}>Hello, Good Morning</Text>
                    <View style={styles.locationwrap}>
                        <Icon name={'location'} size={15} color={Colors.primary} />
                        <Text style={styles.locationtxt}>Krishnagar, Nadia</Text>
                    </View>
                </View>}

            <View style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                {!hideSearch && (
                    <IconButton
                        name="notifications"
                        size={28}
                        color={Colors.bordercolor}
                        onPress={() => { }}
                    />
                )}
                <TouchableOpacity onPress={() => { }}>
                    {/* {signingState.isAuthenticated && ( */}
                    <UserAvatar
                        imageUrl={'https://www.w3schools.com/howto/img_avatar.png'}
                        externalStyle={{ marginLeft: 22 }}
                    />
                    {/* )} */}
                </TouchableOpacity>
            </View>
        </View >
    )
}

export default Header

const styles = StyleSheet.create({
    btnBack: {
        padding: 5,
        backgroundColor: '#fff',
        borderRadius: 10,
    },
    mainView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: Colors.secondary,
        paddingHorizontal: 20,
        paddingVertical: 10,
        height: 60
    },
    hellotxt: {
        fontSize: 14,
        fontWeight: '600',
        color: Colors.dark2
    },
    locationtxt: {
        fontSize: 12,
        fontWeight: '600',
        color: Colors.dark2
    },
    locationwrap: {
        flexDirection: 'row',
        gap: 5,
        alignItems: 'center'
    }
})