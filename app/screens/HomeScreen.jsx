import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '../components/Header'
import LatestProduct from '../components/LatestProduct'
import Product1 from '../../assets/product1.png';
import Product2 from '../../assets/product2.png';
import Product3 from '../../assets/product3.png';
import Product4 from '../../assets/product4.png';
import FilterChips from '../components/FilterChips';


export default function HomeScreen() {

  const products = [
    {
      product_name: 'Enigma Max Wyn',
      price: 412,
      product_image: Product1,
      ratings: 4.5,
      reviews: 1000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      product_name: 'Enigma XS',
      price: 412,
      product_image: Product2,
      ratings: 4.5,
      reviews: 1000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      product_name: 'Enigma X Pro',
      price: 412,
      product_image: Product3,
      ratings: 4.5,
      reviews: 1000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    },
    {
      product_name: 'Enigma 15 Pro Max',
      price: 412,
      product_image: Product4,
      ratings: 4.5,
      reviews: 1000,
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    }
  ]

  return (
    <View style={{paddingTop: 30}}>
      <Header />

      <View style={{marginLeft: 25}}>
        <ScrollView>
          <View >
              <Text style={{fontSize: 25, fontWeight:'bold'}}>Hello, Adolf</Text>
              <Text>Good Morning!</Text>
          </View>

        
          <LatestProduct products={products}/>

          <FilterChips />
          

          <View style={{height: 110}}></View>
        </ScrollView>


      </View>
    </View>
  )
}