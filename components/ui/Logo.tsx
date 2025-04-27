import { View, StyleSheet } from 'react-native'
import logo from "../assets/logo.png"

//Definition of the component
const Logo = () => {
  return (
    <View style={styles.image} />
  )
}

//Styles for the component
const styles = StyleSheet.create({
    image:{
        width: 229,
        height: 220,
        backgroundColor: '#09BC8A',
        flexShrink: 0,
    }
});

export default Logo