import { View, Text, StyleSheet, TouchableOpacity, ImageSourcePropType } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import Entypo from '@expo/vector-icons/Entypo';

//Props passed to the component
interface CartCardProps {
    price: number;
    name: string;
    quantity: number;
    food: ImageSourcePropType

}


const CartCard: React.FC<CartCardProps> = ({name, price, food}) => {
  let [quantity, setQuantity] = React.useState(1);

  //Delete the element
  if(quantity==0){
    return(
      <></>
    )
  }

  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <View style={styles.img} />
      </View>
      <View style={styles.middle}>
        <Text style={{fontSize: 20, color: 'black'}}>{ name }</Text>
        <Text style={{fontSize: 16, color: 'black'}}> $ { price }</Text>
      </View>
      <Entypo name="cross" size={24} color="black" style={styles.cross} onPress={() => setQuantity(0)} />
      <View style={styles.right}>
        <TouchableOpacity onPress={() => {setQuantity(++quantity)}}><AntDesign name="plus" size={20} color="black" /></TouchableOpacity>
        <Text style={{fontSize: 20, color: 'black', transform: [{translateY: -4}]}}>{ quantity }</Text>
        <TouchableOpacity onPress={() => {setQuantity(--quantity)}}><AntDesign name="minus" size={20} color="black" /></TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 360,
        height: 94,
        borderRadius: 13,
        boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
        backgroundColor: '#FFF',
        marginTop: 73,
        flexDirection: 'row',
        alignItems: 'center',
    },
    cross:{
      marginBottom: 60, 
      transform: [{translateX: 80}],
    },
    img:{
      borderRadius: 60,
      width: 72,
      height: 72, 
      backgroundColor: '#09BC8A',
    },
    left:{
        marginLeft: 16,
        transform: [{translateY: -1}],
    },
    middle:{
        flexDirection: 'column',
        gap: 20,
        marginLeft: 25,
        transform: [{translateY: -1}],
    },
    right:{
        flexDirection: 'row',
        gap: 16,
        marginLeft: 'auto',
        marginRight: 16,
        transform: [{translateY: 25}],
    },
})

export default CartCard