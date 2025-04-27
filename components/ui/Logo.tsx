import { View, StyleSheet, Image } from 'react-native'

//Definition of the component
const Logo = () => {
  return (
    <View style={styles.image}>
      <Image source={require('../../assets/logo.png')} />
    </View>
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