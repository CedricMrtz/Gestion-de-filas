import { Text, View, StyleSheet } from "react-native";
import BtnCard from '../components/ui/BtnCard';
import Logo from '../components/ui/Logo';

//Definition of the component
export default function Index() {
  return (
    <View style={styles.container}>
      <Logo />
      <BtnCard text="Iniciar Sesión"/>
    </View>
  );
}

//Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },

})