import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ItemCard from './ItemCard';

type Props = {
    data: any[]
}

const Product = (props: Props) => {
    const { data } = props;


    const renderProduct = ({ item, index }: { item: any; index: number }) => {
        return (           
             <ItemCard
              item={item}
              index={index}
              dataLength={data.length}            
            />
        );
      };

    const flatListView = () => {
        return (
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
            }}>           
            <FlatList
              data={data}
              renderItem={renderProduct}
              horizontal={true}
              keyExtractor={item => item.id}
              numColumns={1}
              showsHorizontalScrollIndicator={false} 
              contentContainerStyle={styles.listContainer}       
            />
          </View>
        );
      };

    return (
        <View style={styles.mainView}>
             {flatListView()}
        </View>
    )
}

export default Product

const styles = StyleSheet.create({
    mainView: { marginVertical: 10 },
    listContainer: {
       marginBottom:10
      },
})