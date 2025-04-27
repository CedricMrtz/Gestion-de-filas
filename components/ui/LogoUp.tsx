import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'

const layout = () => {
  return (
    <Image style={styles.logo} source={require('../../assets/logo.png')} />
  )
}

const styles = StyleSheet.create({
  top:{
    marginTop: 60,
    alignItems: "center",
  },
  logo:{
    width: 229,
    height: 220,
    flexShrink: 0,
    transform: [{ translateY: 42 }],
  },
  
})

export default layout