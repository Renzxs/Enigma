import { View, Text, Image, StyleSheet} from 'react-native'
import React from 'react'
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function Header() {
  return (
    <View style={styles.container}>
      <MaterialCommunityIcons name="dots-grid" size={25} color="black" />
      <Image style={{width: 100, objectFit: 'contain'}} source={require('../../assets/enigma-logo-txt.png')}/>
      <FontAwesome5 name="shopping-cart" size={20} color="black" />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5,
        paddingHorizontal: 25
    }
})