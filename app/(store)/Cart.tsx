import { View, Text, ScrollView } from 'react-native'
import React from 'react'
import Header from '@/components/ui/Header'
import CartCard from '@/components/ui/CartCard'

const Cart = () => {
  return (
    <ScrollView>
        <Header text='Carrito'/>
        <CartCard/>
    </ScrollView>
  )
}

export default Cart