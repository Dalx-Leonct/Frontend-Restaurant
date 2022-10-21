import React from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image,
  Alert
} from 'react-native';
import Prueba from './android/app/src/components/Prueba';
import buttons, { ClienteButton, AdministradorButton }  from './android/app/src/components/buttons';

const App = () => {
  
  return (

    <View style={estilos.contenedor}> 

      <Image style={estilos.imagen} source={require('./android/app/src/img/mesa.jpg')}/>

      <Text style={estilos.texto}>
        Restaurant DSM
      </Text>

       <ClienteButton onPress = {() => alert('Probando boton cliente, funcion no disponible')}/>

       <AdministradorButton onPress = {() => alert('Probando boton Administrador, funcion no disponible')} />

    </View>

  );

};

const estilos = StyleSheet.create({

contenedor:{
  backgroundColor:'#FFFFFF',
  flex:1
},
texto:{
  textAlign:'center',
  fontSize:20,
  color:'#000000',
  textTransform:'uppercase',
  paddingVertical:22

},
imagen:{
  height:180,
  width:410,
  // paddingHorizontal:20,

}

});

export default App;
