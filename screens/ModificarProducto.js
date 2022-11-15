import { Text, View, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
import React, { Component, useState } from 'react'
import { HomeButton } from '../components/buttons'
import { SelectList } from 'react-native-dropdown-select-list';

const ModificarProducto = () => {

    return (
      <ScrollView style={styles.contenedor}>
      <View>
        <Image style={styles.imagen} source={require('../img/camaleon.png')}/>
        <Text style={styles.subtitle}>Modificar Producto</Text>
        <Text style={styles.texto}> Nombre Del Producto</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese Nombre del Producto"
           />
           <HomeButton onPress = {() => navigation.navigate("Cliente")} text = 'Buscar Producto'/>  
        <Text style={styles.texto}> Descripcion</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresar Descripcion del Producto"
           />

        <Text style={styles.texto}> Categoria</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresar Categoria"
           />

        <Text style={styles.texto}>Precio</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el valor del producto"
           />

        <Text style={styles.texto}>Cantidad</Text>
         <TextInput
          style={styles.input}
          placeholder="Ingrese la cantidad del producto"
           />
 

        <HomeButton onPress = {() => navigation.navigate("Cliente")} text = 'Modificar Producto'/>  
        <HomeButton onPress = {() => navigation.navigate("Cliente")} text = 'Eliminar Producto'/>  
      </View>
      </ScrollView>
    )
  }


const styles = StyleSheet.create({

  contenedor:{
    backgroundColor:'#FFFFFF',
    flex:1
  },
  subtitle:{
    textAlign:'center',
    fontSize:20,
    color:'#000000',
    textTransform:'uppercase',
    paddingVertical:22
  
  },
  imagen:{
    height:100,
    width:100,
    left: 145,
    marginTop: 30,
    marginBottom: 30
  },
  input:{
    backgroundColor: "#EEEEEE",
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    fontSize: 20,
    width: 370,
    left:20,
    borderRadius :10,
  },
  texto:{
    fontSize:16,
    color:'#000000',
    textTransform:'uppercase',
    paddingVertical:10,
    left:20,
  },
});


export default ModificarProducto