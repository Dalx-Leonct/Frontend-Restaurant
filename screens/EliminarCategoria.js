import { Text, View, TextInput, StyleSheet, Image } from 'react-native'
import React, { Component, useState, useEffect, useContext } from 'react'
import {HomeButton} from '../components/buttons'
import { Picker } from '@react-native-picker/picker';





const EliminarCategoria = () => {

  const [select, setSelect] = useState("")

  const categoriaSeleccionada = category => {
    setSelect(category)

  }

  const [categorys, setCategorys] = useState([]);
  const [nombreCategoria, setNombreCategoria] = useState("")



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

  const  delCat = async () => {

    try {
      const url = `http://192.168.31.15:8000/api/deleteCategory/${select}` 
      const response = await fetch(url,{
        method: 'DELETE'
      })
      const result = await response.json()
    } catch (error) {
      throw error
    }
    setSelect("")
  }

  //Editar en construccion
  const edCat = async (name) => {

    try {
      const url = `http://192.168.31.15:8000/api/actCategory/${select}` 
      const response = await fetch(url,{
        method: 'PUT',
        headers:{
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({name})

      })
      const result = await response.json()
    } catch (error) {
      throw error
    }
    setNombreCategoria("")
  }


  
    return (
      <View style={styles.contenedor}>
      <Image style={styles.imagen} source={require('../img/camaleon.png')}/>
        <Text style={styles.texto}>Modificar Categoria</Text>
        <Picker selectedValue={select} onValueChange={category => categoriaSeleccionada(category)}>
                    <Picker.Item label=" Seleccione una categoria" value="" />
                    {categorys.map(category => (
                        <Picker.Item key={category.id} label={category.name} value={category.id} />
                    ))}
                </Picker>
         <TextInput
          style={styles.input}
          placeholder="Nuevo nombre de la categoria"
          onChangeText={(text) => setNombreCategoria(text)}
          value={nombreCategoria}
           />
           <HomeButton onPress = {() => edCat()} text = 'Editar Categoria'/>  
           <HomeButton onPress = {() => delCat()} text = 'Eliminar Categoria'/>  
      </View>
    )
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
    
});

export default EliminarCategoria