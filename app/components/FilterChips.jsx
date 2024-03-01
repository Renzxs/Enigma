import { View, Text, TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Colors from '../utils/Colors'

export default function FilterChips() {
  const [isChipActive, setIsChipActive] = useState('All'); // Set initial state to 'All'

  return (
    <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
      <View style={{ flexDirection: "row", gap: 10, marginTop: 20, marginRight: 10 }}>
        {['All', 'Men', 'Women', 'Shorts', 'Trends', 'Dress', 'Boys', 'Girls', 'Polo', 'Sheesh'].map((chipName, index) => (
          <TouchableOpacity 
            key={index} 
            style={[styles.chip, chipName === isChipActive ? styles.activeChip : null]} 
            onPress={() => setIsChipActive(chipName)}>
            <Text style={[styles.text, chipName === isChipActive ? styles.activeChipText : null]}>{chipName}</Text>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  chip: {
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
    borderColor: Colors.Dark
  },
  activeChip: {
    backgroundColor: Colors.Primary,
    borderColor: Colors.Primary
  },
  text: {
    color: Colors.Dark
  },
  activeChipText: {
    color: 'white'
  }
});