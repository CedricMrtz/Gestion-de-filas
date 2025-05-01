import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import {useRouter} from 'expo-router'
import { ProductsList, Product } from '@/components/ProductsList';
import React, { useContext } from 'react'
import Header from '@/components/ui/Header'
import CartCard from '@/components/ui/CartCard'

const Cart = () => {

  const { product } = useContext(ProductsList)
  const items = Object.values(product)
  const subtotal = items.reduce((sum, p) => sum + p.price * p.quantity, 0)

  const router = useRouter()

  return (
    <>
      <ScrollView>
          <Header text='Carrito'/>
            {
              items.length === 0
              ? <Text>Tu carrito esta vacia</Text>
              : items.map(p =>(
                <CartCard
                  key={p.id}
                  id={p.id}
                  name={p.name}
                  price={p.price}
                  quantity={p.quantity}
                  food={p.food}
                />
              ))
            }
      </ScrollView>
          <View style={styles.footer}>
            <View style={styles.price}>
              <Text style={{fontSize:17}}>Subtotal</Text>
              <Text style={{fontSize:17}}>$ {subtotal}</Text>
            </View>
            <TouchableOpacity onPress={() => router.push('/(store)/Payment')}>
              <View style={styles.paybtn}>
                <Text style={styles.pay}>Proceder con el pago</Text>
              </View>
            </TouchableOpacity>
          </View>
    </>
  )
}

const styles = StyleSheet.create({
  footer:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
    marginTop: 14,
  },
  paybtn:{
    borderRadius: 27,
    width: 354,
    height: 70,
    backgroundColor: '#09BC8A',
  },
  pay:{
    fontSize: 24,
    textAlign: 'center',
    transform: [{translateY: 18 }],
  },
  price:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
    width: '100%',
    maxWidth: 340,
    marginLeft: 'auto',
    marginRight: 'auto',
  }
})

export default Cart