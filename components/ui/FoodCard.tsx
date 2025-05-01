import { View, Text, StyleSheet, Image, ImageSourcePropType, TouchableOpacity } from 'react-native'
import React, { useContext } from 'react'
import { ProductsList, Product } from '@/components/ProductsList'
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

  const addToObject = (name: string, food: ImageSourcePropType, price: number) =>{
    const id = `${name.toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`

    addProduct(prev => {
      const newItem: Product = {
        id,
        name,
        food,
        price,
        quantity: 1,
      }
      console.log(product);
      return {
        ...prev,
        [name]: newItem
      }
    })
  }

  return (
    <View style={styles.btn}>
      <TouchableOpacity onPress={() => setFavorite(!favorite)}>
        <AntDesign style={styles.heartBtn} name={ favorite ? "heart" : "hearto"} size={24} color="#09BC8A" />
      </TouchableOpacity>
      <View style={styles.img}>
        <Image source={food} style={{ width: 120, height: 120, borderRadius: 60 }} />
      </View>
      <TouchableOpacity onPress={() => addToObject(name, food, price)}>
        <AntDesign style={styles.addBtn} name="pluscircle" size={24} color="#09BC8A"/>
      </TouchableOpacity>
        <Text style={styles.priceText}> $ { price }</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  btn: {
    width: 150,
    height: 179,
    position: 'relative',
    backgroundColor: "#FFF",
    borderRadius: 13,
    shadowColor: "#000",
    shadowOpacity: 0.25,
    shadowRadius: 4,
    marginLeft: 18,
    // marginTop: 68
  },
  heartBtn: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
  },
  addBtn: {
    position: 'absolute',
    top: 20,
    right: 10,
    width: 24,
    height: 24,
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1
  },
  priceBtn: {
    position: 'absolute',
    bottom: 10,
    left: 10,
    padding: 4,
  },
  priceText: {
    fontSize: 16,
    top: 20,
    color: '#000',
    width: 50,
  },
  img:{
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: "#09BC8A",
    marginLeft: 10,
    marginBottom: 0,
    transform: [{ translateY: 12 }],
  }
})

export default FoodCard