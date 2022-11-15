import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";



export function HomeButton(props) {

    const {onPress, text} = props

    return (
        <TouchableOpacity style = {styles.buttonHome} onPress = {onPress}>

            <Text style = {styles.texto}>

                {text}

            </Text>

        </TouchableOpacity>

    )
}

export function AdministradorButton(props) {

    const {onPress} = props

    return (
        <TouchableOpacity style = {estiloButton.button} onPress = {onPress}>

            <Text style = {estiloButton.texto}>

                Administrador

            </Text>

        </TouchableOpacity>

    )
}

const styles = StyleSheet.create({

    buttonHome:{
      backgroundColor:'#272727',
      paddingVertical:1,
      width:'60%',
      alignSelf:"center",
      margin:30,
      borderRadius:30,
    
    },
    texto:{
      textAlign:'center',
      fontSize:20,
      color:'#FFFFFF',
      textTransform:'uppercase',
      paddingVertical:22
    
    }
});

