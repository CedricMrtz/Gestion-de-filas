import { View, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import Header from '@/components/ui/Header'
import FoodCard from '@/components/ui/FoodCard'

//Todo: Correct the FoodCard layout for actual iOS


const Menu = () => {
  return (
    <ScrollView>
      <View style={styles.bottom}>
        <Header text='CETYS Universidad'/>
        <View style={styles.container}>
          <FoodCard food={require('../../assets/alimentos/pastapollo.jpg')}/>
          <FoodCard food={require('../../assets/alimentos/polloteriyaki.jpg')} />
        </View>
        <View style={styles.container}>
          <FoodCard food={require('../../assets/alimentos/tacomachaca.jpg')} />
          <FoodCard food={require('../../assets/alimentos/pollobbq.jpg')}/>
        </View>
        <View style={styles.container}>
          <FoodCard food={require('../../assets/alimentos/hamburguesa.jpg')}/>
          <FoodCard food={require('../../assets/alimentos/pizza.jpg')} />
        </View>
        <View style={styles.container}>
          <FoodCard food={require('../../assets/alimentos/croissant.jpg')} />
          <FoodCard food={require('../../assets/alimentos/sandwich.jpg')} />
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
  },
  bottom:{
    marginBottom: 100,
  },
})

export default Menu