import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '@/components/ui/Header'
import FoodCard from '@/components/ui/FoodCard'

//Todo: Correct the FoodCard layout for actual iOS

const Menu = () => {
  return (
    <ScrollView>
      <View>
        <Header/>
        <View style={styles.container}>
          <FoodCard/>
          <FoodCard/>
        </View>
        <View style={styles.container}>
          <FoodCard/>
          <FoodCard/>
        </View>
        <View style={styles.container}>
          <FoodCard/>
          <FoodCard/>
        </View>
        <View style={styles.container}>
          <FoodCard/>
          <FoodCard/>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container:{
    flexDirection: 'row',
    justifyContent: "flex-start",
    flexWrap: "wrap",
    alignItems: "center",
    gap: 39,
    paddingVertical: 16,
  }
})

export default Menu