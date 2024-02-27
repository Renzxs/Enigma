import { View, Text, FlatList, TouchableOpacity, Image, StyleSheet} from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function LatestProduct({products}) {

    const navigation = useNavigation();

  return (
    <View>
      <Text style={{fontSize: 20, fontWeight: 'bold', marginTop: 10}}>Latest Products</Text>
      <FlatList 
    style={{marginTop: 10}}
      data={products}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({item, index}) => (
        <TouchableOpacity style={styles.container} onPress={() => navigation.navigate('SingleProduct', item)}>
            <Image  
                source={item.product_image}
                style={{width: 200, height: 200, objectFit: 'contain', borderRadius: 10}}
            />
            <Text style={{fontSize: 18, fontWeight: 'bold', marginTop: 10}}>{item.product_name}</Text>
            <Text style={{fontSize: 15, color: 'gray', marginTop: 4}}>$ {item.price}</Text>
        </TouchableOpacity>
      )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
       marginRight: 10,
    }
})