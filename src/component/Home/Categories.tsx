import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Colors } from '../../styles/colors';

type Props = {
  data: [{ id: string | null; name: string | null; subText: string | null; image: any | null }];
}

const Categories = (props: Props) => {
  const { data } = props;
  return (
    <View style={styles.container}>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => {
          return (
            <View key={index} style={styles.itemwrap}>

              {/* <View style={styles.imagewrap}> */}
                <Image source={item.image} resizeMode='cover' style={styles.img} />
              {/* </View> */}

              <Text style={styles.itemTxt}>{item.name}</Text>
            </View>
          )
        })
        }
      </ScrollView>
    </View>
  )
}

export default Categories

const styles = StyleSheet.create({
  container: {},
  itemwrap: {
    alignItems: 'center',
    marginHorizontal: 10
  },
  img: {
    width: 70,
    height: 70,
    borderRadius: 50,
    borderWidth: 1,
    borderColor: Colors.secondary,
    backgroundColor: Colors.light  
  },
  itemTxt: {
    fontSize: 14,
    fontWeight: '400',
    color: Colors.bordercolor
  }
})