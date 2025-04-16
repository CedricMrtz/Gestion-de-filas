import { Text, View, StyleSheet, TouchableOpacity, ScrollView } from "react-native";
import BtnCard from '../components/ui/BtnCard';
import Logo from '../components/ui/Logo';
//import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

//Definition of the component
export default function Index() {
  return ( 
      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.top}>
          <Logo />
        </View>
        <View style={styles.middle}>
          <BtnCard text="Iniciar Sesión"/>
          <BtnCard text="Registrarse"/>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity>
            <Text>¿Eres negocio?</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
  );
}

//Styles
const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 20,
    backgroundColor: "#ffffff",
  },
  top:{
    marginTop: 60,
  },
  middle:{
    gap: 20,
  },
  bottom:{
    marginBottom: 30,
  },

})