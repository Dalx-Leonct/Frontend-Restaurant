import { Text, View, Image, StyleSheet, TextInput } from 'react-native'
import React, { useState, useEffect, useContext } from 'react'
import { HomeButton } from '../components/buttons'

//useffect gets
//state 



const AgregarCategoria = () => {


  const [nombreCategoria, setNombreCategoria] = useState("")


  const addCat = async () => {

    try {
      const url = `http://192.168.31.15:8000/api/createCategory/${nombreCategoria}`
      const response = await fetch(url)
      const result = await response.json()
    } catch (error) {
      throw error
    }
    setNombreCategoria("")
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
    left: 20,
    borderRadius: 10,
  },

});

export default AgregarCategoria