import React, { useState, useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { CameraView, CameraCapturedPicture, useCameraPermissions, CameraType } from 'expo-camera';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

//To do: Add the function to detect qr codes

export default function CameraScreen() {
  const router = useRouter();
  const [permission, requestPermission] = useCameraPermissions();
  const cameraRef = useRef<CameraView | null>(null);
  const [photoUri, setPhotoUri] = useState<string | null>(null);

  //Request camera permissions
  useEffect(()=>{
    (async () =>{
      requestPermission();
    })();
  },[]);
  
  if(!permission) {
    return (
      <View>
        <Text>Solicitando permisos...</Text>
      </View>
    )
  } 
  if(!permission.granted){
    return(
      <View style={styles.center}>
        <Text>Permiso denegado.</Text>
        <TouchableOpacity onPress={() => router.push('../../Menu')}>Menu</TouchableOpacity>
        <TouchableOpacity onPress={requestPermission}>
          <Text>Otorgar permiso</Text>
        </TouchableOpacity>
      </View>
    )
  }

  //Function to take picture
  const takePicture = async() =>{
    if(cameraRef.current){
      try{
        const photo = await cameraRef.current.takePictureAsync({ quality: 0.5 });
        if (photo) {
          setPhotoUri(photo.uri);
        } else {
          console.error('Failed to capture photo.');
        }
      } catch (e){
        console.error(e);
      }
    }
  };

  return (
    <View style={styles.container}>
      {/* Vista previa de cámara */}
      <CameraView
        style={styles.camera}
        facing="back"
        ref={cameraRef}
        onCameraReady={() => console.log('Cámara lista')}
      />

      {/* Botón para disparar foto */}
      <TouchableOpacity style={styles.button} onPress={takePicture}>
        <MaterialIcons style={styles.buttonText} name="add-a-photo" size={24} color="black" />
      </TouchableOpacity>

      <View style={styles.buttonContainer}>
        <TouchableOpacity onPress={() => router.push('../../Menu')}>
          <Text style={styles.buttonText}>Menu</Text>
        </TouchableOpacity>
      </View>

      {/* Mostrar preview
      {photoUri && (
        <Image source={{ uri: photoUri }} style={styles.preview} />
      )} */}
      
    </View>
  );


}

const styles = StyleSheet.create({
  container: { flex: 1 },
  center: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  camera: { flex: 3 },
  buttonContainer: {
    flex: 1, backgroundColor: 'transparent',
    justifyContent: 'flex-end', alignItems: 'center',
    marginBottom: 20,
  },
  button: {
    padding: 12, backgroundColor: '#ffffff88',
    borderRadius: 8, marginBottom: 200,
  },
  buttonText: { fontSize: 18, alignContent: 'center', },
  preview: { flex: 2, width: '100%', resizeMode: 'contain' },
});