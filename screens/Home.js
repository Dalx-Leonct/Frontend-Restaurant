import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
  } from 'react-native';
  import buttons, { HomeButton }  from '../components/buttons';
  import { useNavigation } from '@react-navigation/native';

  //PANTALLA PRINCIPAL

const Home = () => {



  const navigation = useNavigation()

    return (

        <View style={styles.contenedor}> 
    
         <Image style={styles.imagen} source={require('../img/mesa.jpg')}/>
    
          <Text style={styles.texto}>
            Restaurant DSM
          </Text>

          <HomeButton onPress = {() => navigation.navigate("Cliente")} text = 'Cliente'/>

          <HomeButton onPress = {() => navigation.navigate("Administrador")} text = 'Administrador' />


    
        </View>
    
      );
}

const styles = StyleSheet.create({

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

export default Home