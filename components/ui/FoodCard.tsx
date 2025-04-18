import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const FoodCard = () => {
  const favorite = false;
  return (
    <View style={styles.btn}>
      { favorite ? <AntDesign style={styles.heart} name="heart" size={24} color="black" /> : <AntDesign style={styles.heart} name="hearto" size={24} color="black" /> }
      <View style={styles.img} />
      <AntDesign style={styles.add} name="pluscircle" size={24} color="#09BC8A"/>
      <Text style={styles.price}> $ 99 mxn</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  btn:{
    width: 150,
    height: 179,
    backgroundColor: "#FFF",
    borderRadius: 13,
    boxShadow: "0px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    transform: [{ translateX: 18}, { translateY: 68}],
  },
  heart:{
    width: 24,
    height: 17,
    marginLeft: 120,
    marginTop: 10,
  },
  add:{
    width: 19,
    height: 19,
    marginLeft: 120,
    marginTop: 0,
  },
  price:{
    transform: [{ translateY: -17 }],
    marginLeft: 10,
  },
  img:{
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#09BC8A",
    marginLeft: 10,
    marginBottom: 0,
    transform: [{ translateY: -12 }],
  }
})

export default FoodCard