import { Text, View, StyleSheet, TextInput, Image, ScrollView } from 'react-native'
import React, { Component, useState, useContext, useEffect } from 'react'
import { HomeButton } from '../components/buttons'
import { Picker } from '@react-native-picker/picker';

const IngresarProducto = () => {

const [select, setSelect] = useState("")

const categoriaSeleccionada = category => {setSelect(category)}

const [categorys, setCategorys] = useState([]);

useEffect(() => {
  obtenerCategorias();
});

const obtenerCategorias = async () => {
  try {
      const url = `http://192.168.31.15:8000/api/getAllCategory`
      const response = await fetch(url)
      const result = await response.json()
      setCategorys(result)
  } catch (error) {
      throw error
  }
}

    return (
      <ScrollView style={styles.contenedor}>
      <View>
        <Image style={styles.imagen} source={require('../img/camaleon.png')}/>
        <Text style={styles.subtitle}>Ingresar Producto</Text>
        <Text style={styles.texto}> Nombre Del Producto</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresar Nombre del Producto"
           />
        <Text style={styles.texto}> Descripcion</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresar Descripcion del Producto"
           />

        <Text style={styles.texto}> Categoria</Text>
        <Picker selectedValue={select} onValueChange={category => categoriaSeleccionada(category)}>
                    <Picker.Item label=" Seleccione una categoria" value="" />
                    {categorys.map(category => (
                        <Picker.Item key={category.id} label={category.name} value={category.id} />
                    ))}
                </Picker>

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
 

        <HomeButton onPress = {() => navigation.navigate("Cliente")} text = 'Ingresar Producto'/>  
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

export default IngresarProducto