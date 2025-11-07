import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Colors } from '../styles/colors'

type Props = {
    seeall?: boolean,
    title?: string,
    onPressSeeAll?: () => void;
}

const TitleArea = (props: Props) => {
    const { seeall = false, title= '',onPressSeeAll } = props;
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
            {seeall &&
                <TouchableOpacity onPress={onPressSeeAll}>
                    <Text style={styles.seeallTxt}>See All</Text>
                </TouchableOpacity>
            }
        </View>
    )
}

export default TitleArea

const styles = StyleSheet.create({
    container: { flexDirection: 'row', justifyContent: 'space-between', marginVertical: 10 },
    title: {fontSize: 14, fontWeight: '500', color: Colors.dark},
    seeallTxt: {fontSize: 12, fontWeight: '500', color: Colors.dark},
})