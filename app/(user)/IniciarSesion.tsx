import { View, Text, ScrollView, StyleSheet } from 'react-native'
import { useSearchParams } from 'expo-router/build/hooks'
//Components
import LogoUp from '@/components/ui/LogoUp'
import LoginForm from '@/components/ui/LoginForm'
import RegisterForm from '@/components/ui/RegisterForm';

const IniciarSesion = () => {
    const searchParams = useSearchParams();
    const replace = searchParams.get('replace')
  
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <LogoUp />
      <View>
        <Text style={styles.title}>{replace=='0' ? "Inicia Sesión" : replace=='1' ? "Registrate" : "Negocio"}</Text>
      </View>
      <View style={{ marginBottom: 60 }}>
        {replace=='0' ? <LoginForm /> : <RegisterForm />}
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#ffffff",
  },
  title:{
    // width: 312,
    // height: 63,
    flexShrink: 0,
    fontSize: 40,
    color: "#172A3A",
    textDecorationLine: "underline",
  }
})

export default IniciarSesion