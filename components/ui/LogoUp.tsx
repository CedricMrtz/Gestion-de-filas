import { View, Text, StyleSheet } from 'react-native'
import Logo from './Logo';
import React from 'react'

const layout = () => {
  return (
    <View style={styles.top}>
      <Logo />
    </View>
  )
}

const styles = StyleSheet.create({
  top:{
    marginTop: 60,
    alignItems: "center",
  },
  
})

export default layout