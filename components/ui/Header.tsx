import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import AntDesign from '@expo/vector-icons/AntDesign';
import { useRouter } from 'expo-router';
import ProfileSlider from '@/components/ProfileSlider'

// props passed to the component
interface HeaderProps {
    text: string;
}

const Header: React.FC<HeaderProps> = ({text}) => {
  const router = useRouter();
  const [profileOpen, setProfileOpen] = useState(false);
  return (
    <View style={styles.container}>
        <View style={styles.topBar}>
            <TouchableOpacity onPress={() => router.push('/(store)/Menu')}>
                <View style={styles.logo} />
            </TouchableOpacity>
            <View style={{ flexDirection: 'row', gap: 10 }}>
                <TouchableOpacity onPress={() => router.push('/(store)/Cart')}>
                    <AntDesign name="shoppingcart" size={42} color="black" />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setProfileOpen(true)}>
                    <AntDesign name="user" size={42} color="black" />
                </TouchableOpacity>
            </View>
        </View>
        <View>
            <Text style={styles.banner}>{text}</Text>
        </View>
        <ProfileSlider
            visible={profileOpen}
            onClose={() => setProfileOpen(false)} 
        />
    </View>
  )
}

const styles = StyleSheet.create({
    container:{
        zIndex:1,
    },
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
    profile:{
        zIndex: 0,
    }

})

export default Header