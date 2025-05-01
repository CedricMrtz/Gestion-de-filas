import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ProductsList } from '@/components/ProductsList'
import AntDesign from '@expo/vector-icons/AntDesign';

interface MenuProps {
  food: ImageSourcePropType;
  price: number;
  name: string;
}

const FoodCard: React.FC<MenuProps> = ({food, price, name}) => {

  const [favorite, setFavorite] = React.useState(false);
  //const [product, addProduct] = React.useState<string[]>([]);
  const {product, addProduct} = useContext(ProductsList)

  const addToArray = (name: string) =>{
    addProduct([...product, name])
  }

  return (
    <View style={styles.btn}>
      { favorite ? <TouchableOpacity onPress={() => setFavorite(!favorite)}>
          <AntDesign style={styles.heart} name="heart" size={24} color="#09BC8A" />
        </TouchableOpacity>
      : <TouchableOpacity onPress={() => setFavorite(!favorite)}>
          <AntDesign style={styles.heart} name="hearto" size={24} color="#09BC8A" />
      </TouchableOpacity> } 
      <View style={styles.img}>
        <Image source={food} style={{ width: 120, height: 120, borderRadius: 60 }} />
      </View>
      <TouchableOpacity onPress={() => addToArray(name)}>
        <AntDesign style={styles.add} name="pluscircle" size={24} color="#09BC8A"/>
      </TouchableOpacity>
      <Text style={styles.price}> $ { price }</Text>
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