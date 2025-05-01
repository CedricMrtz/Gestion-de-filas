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
          <FoodCard food={require('../../assets/alimentos/pastapollo.jpg')} price={99} name={"Pollo con pasta"} />
          <FoodCard food={require('../../assets/alimentos/polloteriyaki.jpg')} price={99} name={"Pollo con teriyaki"} />
        </View>
        <View style={styles.container}>
          <FoodCard food={require('../../assets/alimentos/tacomachaca.jpg')} price={20} name={"Taco de machaca"} />
          <FoodCard food={require('../../assets/alimentos/pollobbq.jpg')} price={99} name={"Pollo bbq"}/>
        </View>
        <View style={styles.container}>
          <FoodCard food={require('../../assets/alimentos/hamburguesa.jpg')} price={120} name={"Hamburguesa"}/>
          <FoodCard food={require('../../assets/alimentos/pizza.jpg')} price={40} name={"Pizza"} />
        </View>
        <View style={styles.container}>
          <FoodCard food={require('../../assets/alimentos/croissant.jpg')} price={70} name={"Croissant"} />
          <FoodCard food={require('../../assets/alimentos/sandwich.jpg')} price={70} name={"Sandwich"}/>
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