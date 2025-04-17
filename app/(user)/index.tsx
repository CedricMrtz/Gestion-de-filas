import { Text, View, StyleSheet, TouchableOpacity, ScrollView, Pressable } from "react-native";
import BtnCard from '@/components/ui/BtnCard';
import LogoUp from "@/components/ui/LogoUp";
import { useRouter } from "expo-router";
//import { ScrollView } from "react-native-reanimated/lib/typescript/Animated";

//Definition of the component
export default function Index() {
  //Hook to navigate between screens
  const router = useRouter();

  return ( 
      <ScrollView contentContainerStyle={styles.container}>
        <LogoUp />
        <View style={styles.middle}>
          {/* navigate to the screen and give a param for rendering */}
          <TouchableOpacity onPress={() => router.push({pathname:'/IniciarSesion', params:{ replace: 0 }})}>
            <BtnCard text="Iniciar Sesión"/>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => router.push({pathname:'/IniciarSesion', params:{ replace: 1 }})}>
            <BtnCard text="Registrarse"/>
          </TouchableOpacity>
        </View>
        <View style={styles.bottom}>
          <TouchableOpacity onPress={() => router.push({pathname:'/IniciarSesion', params:{ replace: 2 }})}>
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
  middle:{
    gap: 20,
  },
  bottom:{
    marginBottom: 30,
  },

})