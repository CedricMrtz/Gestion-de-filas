import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import QRCode from 'react-native-qrcode-svg';
import Header from '@/components/ui/Header'

const Payment = () => {
  return (
    <View>
      <Header text='Pagar'></Header>
      <View style={styles.qr}>
        <QRCode value='https://www.youtube.com/watch?v=dQw4w9WgXcQ' size={200}/>
      </View>
       
    </View>
  )
}

const styles = StyleSheet.create({
  qr:{
    width: 700,
    height: 700,
    left: 100,
    top: 70
  }
})

export default Payment