import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Header from '@/components/ui/Header'
import CartCard from '@/components/ui/CartCard'

interface Props{
  price: number
}

const Cart: React.FC <Props> = ({price}) => {
  return (
    <ScrollView>
        <Header text='Carrito'/>
        <CartCard/>
        <CartCard/>
        <View style={styles.footer}>
          <View style={styles.price}>
            <Text style={{fontSize:17}}>Subtotal</Text>
            <Text style={{fontSize:17}}>121212</Text>
          </View>
          <TouchableOpacity>
            <View style={styles.paybtn}>
              <Text style={styles.pay}>Proceder con el pago</Text>
            </View>
          </TouchableOpacity>
        </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  footer:{
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: 16,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 9,
    width: 354,
    //gap: 12,
    //padding: 120,
  }
})

export default Cart