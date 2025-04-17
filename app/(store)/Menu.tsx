import { View, Text } from 'react-native'
import React from 'react'
import Header from '@/components/ui/Header'
import FoodCard from '@/components/ui/FoodCard'

const Menu = () => {
  return (
    <View>
      <Header/>
      <FoodCard/>
    </View>
  )
}

export default Menu