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

export function AgregarButton(props) {

    const {onPress, text} = props

    return (
        <TouchableOpacity style = {styles.buttonAgregar} onPress = {onPress}>

            <Text style = {styles.textoAgregar}>

                {text}

            </Text>

        </TouchableOpacity>

    )
}

export function CatalogoButton(props) {

    const {onPress, text} = props

    return (
        <TouchableOpacity style = {styles.botonCatalogo} onPress = {onPress}>

            <Text style = {styles.textoBtCtg}>

                {text}

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
    
    },
    buttonAgregar:{
        backgroundColor:'#64DD17',
        paddingVertical:7,
        width:100,
        height:30,
        margin:5,
        borderRadius:10,
        textAlign:'center',
        margin:10,
        right: 5
      },
      textoAgregar:{
        textAlign:'center',
        fontSize:10,
        color:'#000000',
        textTransform:'uppercase',
        
      },
      botonCatalogo:{
        backgroundColor: 'lightgrey',
        width:22,
        height:22,
        borderWidth:2,
        borderColor: '000000',
        borderRadius:10,
        textAlign:"center",
        margin:5,
        left:20
      },
      textoBtCtg:{
        textAlign:'center',
        fontSize:12,
        color:'#000000',
        textTransform:'uppercase',
      },
});

