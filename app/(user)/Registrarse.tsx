import { View, Text } from 'react-native'
import React from 'react'
import { ScrollView } from 'react-native-gesture-handler'
import LogoUp from '@/components/ui/LogoUp'
import RegisterForm from '@/components/ui/RegisterForm'

const Registrarse = () => {
  return (
    <ScrollView>
      <LogoUp />
      <View>
        <RegisterForm />
      </View>
    </ScrollView>
  )
}

export default Registrarse