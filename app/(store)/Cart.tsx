import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import {useRouter} from 'expo-router'
import { ProductsList, Product } from '@/components/ProductsList';
import React from 'react'
import Header from '@/components/ui/Header'
import CartCard from '@/components/ui/CartCard'

const Cart = () => {

  const [product, addProduct] = React.useState<Record<string, Product>>({});

  const router = useRouter()

  return (
    <>
      <ScrollView>
          <Header text='Carrito'/>

          <ProductsList.Provider value={{product, addProduct}}>
            {/* <CartCard/>
            <CartCard/> */}
          </ProductsList.Provider>

      </ScrollView>
          <View style={styles.footer}>
            <View style={styles.price}>
              <Text style={{fontSize:17}}>Subtotal</Text>
              <Text style={{fontSize:17}}>100</Text>
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