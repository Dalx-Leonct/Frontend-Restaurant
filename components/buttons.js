import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";


export function HomeButton(props) {

    //Creacion de los botones

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

export function CancelarPedido(props) {

    const {onPress, text} = props

    return (
        <TouchableOpacity style = {styles.botonCancelar} onPress = {onPress}>

            <Text style = {styles.textoMenu}>

                {text}

            </Text>

        </TouchableOpacity>

    )
}

export function AgregarPedido(props) {

    const {onPress, text} = props

    return (
        <TouchableOpacity style = {styles.botonAgregar} onPress = {onPress}>

            <Text style = {styles.textoMenu}>

                {text}

            </Text>

        </TouchableOpacity>

    )
}

export function QuitarCarrito(props) {

    const {onPress, text} = props

    return (
        <TouchableOpacity style = {styles.quitarPedido} onPress = {onPress}>

            <Text style = {styles.textoQuitarPedido}>

                {text}

            </Text>

        </TouchableOpacity>

    )
}

export function AgregarOrden(props) {

    const {onPress, text} = props

    return (
        <TouchableOpacity style = {styles.AgregarOrden} onPress = {onPress}>

            <Text style = {styles.textoQuitarPedido}>

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
        backgroundColor:'#77DD77',
        paddingVertical:7,
        width:100,
        height:30,
        margin:5,
        borderRadius:10,
        textAlign:'center',
        margin:10,
        right: 5,
        marginTop:50
      },
      textoAgregar:{
        textAlign:'center',
        fontSize:10,
        color:'#000000',
        textTransform:'uppercase',
      },
      botonCatalogo:{
        backgroundColor: 'black',
        width:100,
        height:50,
        borderWidth:2,
        borderColor: '000000',
        borderRadius: 8,
        textAlign:"center",
        margin:20,
      },
      textoBtCtg:{
        textAlign:'center',
        fontSize:30,
        color:'#FFFFFF',
        textTransform:'uppercase',
      },
      botonAgregar:{
        backgroundColor: '#bdecb6',
        width:200,
        height:50,
        borderWidth:2,
        borderColor: '#000000',
        borderRadius: 8,
        textAlign:"center",
        margin:20,
      },
      botonCancelar:{
        backgroundColor: '#ff6961',
        width:200,
        height:50,
        borderWidth:2,
        borderColor: '#000000',
        borderRadius: 8,
        textAlign:"center",
        margin:20,
      },
      textoMenu:{
        textAlign:'center',
        fontSize:30,
        color:'#000000',
        textTransform:'uppercase',
        fontStyle:'italic'
      },
      quitarPedido:{
        backgroundColor: '#ff6961',
        width:100,
        height:25,
        borderWidth:2,
        borderColor: '#000000',
        borderRadius: 8,
        textAlign:"center",
        marginTop:50,
        marginLeft:10
      },
      textoQuitarPedido:{
        textAlign:'center',
        fontSize:15,
        color:'#000000',
        textTransform:'uppercase',
        fontStyle:'italic'
      },
      AgregarOrden:{
        backgroundColor: '#bdecb6',
        width:100,
        height:25,
        borderWidth:2,
        borderColor: '#000000',
        borderRadius: 8,
        textAlign:"center",
        marginLeft: 100,
        marginTop:25
      },
});

