import { View, Text, StyleSheet} from 'react-native'
import React from 'react'

const Profile = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Profile
      </Text>

    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        width: 200,
        height: 852,
        backgroundColor: '#09BC8A',
    },
    title:{
      textAlign: 'center',
      fontSize: 30,
      top: 30
    }
})

export default Profile