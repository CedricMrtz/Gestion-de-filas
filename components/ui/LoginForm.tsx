import { useRouter } from 'expo-router';
import React from 'react';
import { useState } from 'react'
import { View, Text, TextInput, TouchableOpacity, StyleSheet, Alert, ActivityIndicator } from 'react-native';
//Firabase imports
import { FIREBASE_AUTH } from '@/FIrebaseConfig'
import { signInWithEmailAndPassword } from 'firebase/auth';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const LoginForm = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const auth = FIREBASE_AUTH
  
  const router = useRouter();

  const signIn = async () =>{
    setLoading(true)
    try{
      const response = await signInWithEmailAndPassword(auth,email, password)
      console.log(response)
      router.replace({pathname:'/(store)/Menu'});
    } catch(error){
      console.log(error)
      alert(error)
    } finally{
      setLoading(false)
    }
  }
  
  return (
    <View style={styles.formBox}>
      <View style={styles.inputGroup}>
        <Text style={styles.label}>Correo</Text>
        <TextInput
          style={styles.input}
          placeholder="Email"
          autoCapitalize='none'
          onChangeText={(text) => setEmail(text)}
          value={email}
          />
      </View>

      <View style={styles.inputGroup}>
        <Text style={styles.label}>Contraseña</Text>
        <TextInput
          style={styles.input}
          placeholder="Password"
          secureTextEntry
          autoCapitalize='none'
          onChangeText={(text) => setPassword(text)}
          value={password}
        />
      </View>

      {loading ? <ActivityIndicator size='large' color={'#0000ff'} /> 
      : <>
        <View style={styles.buttonGroup}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => {signIn()}}
          //onPress={() => router.push('../../MenuFinder')}
        >
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
      </View>
      </>}

      <TouchableOpacity onPress={() => Alert.alert('Recuperar contraseña')}>
        <Text style={styles.link}>¿Olvidó la contraseña?</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => router.push({pathname:'../../IniciarSesion', params:{ replace: 1 }})}>
        <Text style={styles.link}>Crear cuenta</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  formBox: {
    padding: 20,
    gap: 20,
    marginTop: 20,
  },
  inputGroup: {
    gap: 4,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 10,
    fontSize: 16,
  },
  buttonGroup: {
    flexDirection: 'row',
    justifyContent: 'space-between', // this simulates "justify"
  },
  button: {
    flex: 1,
    backgroundColor: '#172A3A',
    padding: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
  },
  link: {
    color: '#172A3A',
    textAlign: 'center',
    marginTop: 10,
  },
});

export default LoginForm;
