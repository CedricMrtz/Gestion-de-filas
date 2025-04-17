import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';

const Header = () => {
  return (
    <View>
        <View style={styles.topBar}>
            <View style={styles.logo} />
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <TouchableOpacity>
                    <AntDesign name="shoppingcart" size={42} color="black" />
                </TouchableOpacity>
                <TouchableOpacity>
                    <AntDesign name="user" size={42} color="black" />
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <Text style={styles.banner}>CETYS Universidad</Text>
        </View>
    </View>
  )
}

const styles = StyleSheet.create({
    topBar:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 16,
        paddingVertical: 12,
    },
    logo:{
        width: 43,
        height: 43,
        backgroundColor: '#09BC8A',
        flexShrink: 0,
    },
    banner:{
        marginTop: 28,
        width: 334,
        height: 48,
        backgroundColor: '#322F35',
        flexShrink: 0,
        shadowColor: "#000",
        shadowOffset: {
        width: 0,
        height: 1,
        },
        shadowOpacity: 0.3,
        shadowRadius: 2,
        color: '#FFF',
        fontWeight: '400',
        fontSize: 14,
        lineHeight: 48,
        paddingLeft: 16,
    },

})

export default Header