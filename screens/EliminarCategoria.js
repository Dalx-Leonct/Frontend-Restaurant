import { Text, View, TextInput, StyleSheet, Image, Alert } from 'react-native'
import React, { Component, useState, useEffect, useContext } from 'react'
import { HomeButton } from '../components/buttons'
import { Picker } from '@react-native-picker/picker';
import ContextRestaurant from '../components/ContextR';

const EliminarCategoria = () => {

  const [select, setSelect] = useState("")

  const categoriaSeleccionada = category => {
    setSelect(category)

  }

  const [nombreCategoria, setNombreCategoria] = useState("")
  //Use context
  const { setConsultarApi, setConsultarApiProductos, categorys, productos } = useContext(ContextRestaurant);

  //Fetch para eliminar categorias
  const delCat = async () => {
    const name = nombreCategoria
    const url = `http://192.168.31.244:8000/api/categories/${select}`;
    const categoria = { name }
    try {
      await fetch(
        url,
        {
          method: "DELETE",
        },
      )
        .then((res) => res.json())
        .catch((error) => console.log(error))
        .then((response) => estadoDel(response));
    } catch (e) {
      console.log(e);
    }
    setConsultarApi(true);
    setNombreCategoria("")
    Alert.alert('Categoria eliminada','Categoria eliminada exitosamente')
  };

  //Fetch para editar categoria
  const edCat = async () => {
    const name = nombreCategoria
    const url = `http://192.168.31.244:8000/api/categories/${select}`;
    const categoria = {name}
    try {
      await fetch(
        url,
        {
          method: "PUT",
          mode: "no-cors",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name})
        },
      )
        .then((res) => res.json())
        .catch((error) => console.log(error))
        .then((response) => estadoMod(response))
        
    } catch (e) {
      console.log(e);
    }
    

  };

  const estadoMod = (response) => {
    if(response.status === 1){
      Alert.alert('Categoria modificada','Categoria modificada exitosamente')
      setConsultarApi(true);
      setNombreCategoria("")
      return
    }
      Alert.alert('Error','Categoria no pudo ser modificada')
  }

  //Agregar json reponse en backend
  const estadoDel = (response) => {
    if(response.category === NULL){
      Alert.alert('Categoria eliminada','Categoria eliminada exitosamente')
      setConsultarApi(true);
      setNombreCategoria("")
      return
    }
      Alert.alert('Error','Categoria no pudo ser eliminada')
  }


  return (
    <View style={styles.contenedor}>
      <Image style={styles.imagen} source={require('../img/camaleon.png')} />
      <Text style={styles.texto}>Modificar Categoria</Text>

      <View style ={styles.stylePicker}>
      <Picker selectedValue={select} onValueChange={category => categoriaSeleccionada(category)}>
        <Picker.Item label=" Seleccione una categoria" value="" />
        {categorys.map(category => (
          <Picker.Item key={category.id} label={category.name} value={category.id} />
        ))}
      </Picker>
      </View>

      <TextInput
        style={styles.input}
        placeholder="Nuevo nombre de la categoria"
        onChangeText={(text) => setNombreCategoria(text)}
        value={nombreCategoria}
      />
      <HomeButton  onPress={() => edCat()} text='Editar Categoria'  />
      <HomeButton onPress={() => delCat()} text='Eliminar Categoria' />
    </View>
  )
}


const styles = StyleSheet.create({

  contenedor: {
    backgroundColor: '#FFFFFF',
    flex: 1
  },
  texto: {
    textAlign: 'center',
    fontSize: 20,
    color: '#000000',
    textTransform: 'uppercase',
    paddingVertical: 22

  },
  imagen: {
    height: 100,
    width: 100,
    left: 145,
    marginTop: 30,
    marginBottom: 30
  },
  input: {
    backgroundColor: "#EEEEEE",
    borderWidth: 2,
    borderColor: 'black',
    padding: 10,
    fontSize: 20,
    width: 370,
    left: 20,
    borderRadius: 10,
  },
  stylePicker:{
    backgroundColor: "#EEEEEE",
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    height:50,
    width:370,
    margin: 20
  }

});

export default EliminarCategoria