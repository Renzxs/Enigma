import { View, Text,TouchableOpacity, StyleSheet, Image, ScrollView } from 'react-native'
import React from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native'
import Colors from '../utils/Colors'
import { FontAwesome } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import { FontAwesome5 } from '@expo/vector-icons';

export default function SingleProductPage() {

  const navigation = useNavigation();
  const { params } = useRoute();

  return (
    <View style={{padding: 20, paddingTop: 40, flex: 1}}>
      
      {/* HEADER */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="arrow-back" size={24} color={Colors.Primary} />
        </TouchableOpacity>

        <TouchableOpacity>
          <FontAwesome5 name="shopping-cart" size={20} color={Colors.Dark} />
        </TouchableOpacity>
      </View>


      {/* CONTAINER */}
      <View style={styles.container}>

        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center'}}>
            <View>
                <Text style={{fontSize: 25, fontWeight: 'bold', marginBottom: 5}}>{params.product_name}</Text>

                <View style={{flexDirection: 'row', gap: 10, alignItems: 'center'}}>
                  <FontAwesome name="star" size={24} color={Colors.Yellow} />
                  <Text style={{fontWeight: "bold"}}>{params.ratings}</Text>
                  <Text>{params.reviews.toString().length === 4 ? `${Math.floor(params.reviews / 1000)}K +` : params.reviews} Reviews</Text>
                </View> 
            </View>
            <TouchableOpacity>
                <AntDesign name="hearto" size={24} color="black" />
            </TouchableOpacity>
          </View>

        
          <View style={{marginTop: 10, marginBottom: 20}}>
            <Image style={{width: '100%', height:350, borderRadius: 10}} source={params.product_image}/>
          </View>

          <View>
            <Text style={{fontSize: 20, fontWeight: 'bold', marginBottom: 5}}>About</Text>
            <Text>{params.description}</Text>
            <Text>{params.description}</Text>
            <Text>{params.description}</Text>

            <View style={{height: 80}}></View>
          </View>
        </ScrollView>        
      </View>

      <View style={{position: 'absolute', bottom: 10, width: '100%', alignSelf: 'center' ,zIndex: 99, flexDirection: 'row', justifyContent: 'center', alignItems: 'center', gap: 10}}>
          <TouchableOpacity style={{backgroundColor: Colors.Dark, padding: 15, borderRadius: 20, width: '50%'}}>
            <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Try it</Text>
          </TouchableOpacity>

          <TouchableOpacity style={{backgroundColor: Colors.Primary, padding: 15, borderRadius: 20, width: '50%'}}>
            <Text style={{color: 'white', fontWeight: 'bold', textAlign: 'center'}}>Buy now</Text>
          </TouchableOpacity>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 5
  },
  container: {
    padding: 5
  }
});