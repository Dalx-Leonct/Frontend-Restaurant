import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { ReloadInstructions } from "react-native/Libraries/NewAppScreen";



export function ClienteButton(props) {

    const {onPress} = props

    return (
        <TouchableOpacity style = {estiloButton.button} onPress = {onPress}>

            <Text style = {estiloButton.texto}>

                Cliente

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

const estiloButton = StyleSheet.create({

    button:{
      backgroundColor:'#000000',
      paddingVertical:1,
      width:'50%',
      alignSelf:"center",
      margin:30,
    
    },
    texto:{
      textAlign:'center',
      fontSize:20,
      color:'#FFFFFF',
      textTransform:'uppercase',
      paddingVertical:22
    
    }
});