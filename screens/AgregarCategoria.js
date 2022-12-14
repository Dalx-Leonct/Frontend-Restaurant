import { Text, View, Image, StyleSheet, TextInput, Alert } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { HomeButton } from '../components/buttons'
import ContextRestaurant from '../components/ContextR'

//ADMINISTRADOR

//AGREGAR UNA CATEGORIA

const AgregarCategoria = () => {

  const { setConsultarApi, categorys } = useContext(ContextRestaurant);
  const [nombreCategoria, setNombreCategoria] = useState("")

  // Fetch para agregar categoria
  const addCat = async () => {
    const name = nombreCategoria
    const url = 'http://192.168.31.244:8000/api/categories';
    const categoria = {name}
    try {
      await fetch(
        url,
        {
          method: "POST",
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
        .then((response) => estadoIngresar(response));
    } catch (e) {
      console.log(e);
    }
  };
  //Validacion de agregar

  const estadoIngresar = (response) => {
    console.log(response)
    if (response.status === 1) {
      Alert.alert('Categoria agregada','Categoria agragada exitosamente')
      setConsultarApi(true);
      setNombreCategoria("")
      return
    }
    Alert.alert('Error', 'Categoria no pudo ser agregada')
  }

  return (
    <View style={styles.contenedor}>
      <Image style={styles.imagen} source={require('../img/camaleon.png')} />
      <Text style={styles.texto}>Agregar Categoria</Text>
      <TextInput
        style={styles.input}
        placeholder="Ingresar Categoria"
        onChangeText={(text) => setNombreCategoria(text)}
        value={nombreCategoria}
      />
      <HomeButton onPress={() => addCat()} text='Agregar Categoria' />
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
    left: 10,
    borderRadius: 10,
  },
});

export default AgregarCategoria