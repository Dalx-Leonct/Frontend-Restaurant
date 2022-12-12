import { Text, View, StyleSheet, TextInput, Image, ScrollView, Alert } from 'react-native'
import React, { Component, useState, useContext, useEffect } from 'react'
import { HomeButton, buttonAgregar } from '../components/buttons'
import { Picker } from '@react-native-picker/picker';
import ContextRestaurant from '../components/ContextR';
import { launchImageLibrary } from 'react-native-image-picker';
import axios from 'axios';

const IngresarProducto = () => {

  //Variables para mostrar categoria

  const [select, setSelect] = useState("") //category id y foranea

  const categoriaSeleccionada = category => { setSelect(category) }

  const { setConsultarApi, setConsultarApiProductos, categorys, productos } = useContext(ContextRestaurant);

  //Variables para ingresar el producto
  const [products, setProducts] = useState([])
  const [nombreProducto, setNombreProducto] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [codProduct, setCodProduct] = useState("")
  //Image Picker
  const [image, setImage] = useState("https://media.istockphoto.com/id/1051652656/es/vector/plato-vac%C3%ADo-con-cuchillo-y-tenedor-aislado-sobre-fondo-blanco-vista-desde-arriba.jpg?s=612x612&w=0&k=20&c=WJq867LBua-9t0172PH-H1VP2Tafo6ztoAGlNArF_Eg=")
  const [response, setResponse] = useState('');

  const randomCode = () =>{
    const n = Math.random().toString(36).substring(2,10)
    return n
  }

  
  //Subir imagen al backend
  const chooseImage = () => {

    const options = {
      title: 'Seleccione la Imagen',
      storageOptions: {
        skipBackup: true,
        path: 'images'
      }
    }

    //Seleccionar imagen de la galeria
    launchImageLibrary(options, response => {

      if (response.didCancel) {
        console.log('Accion cancelada')
      } else {
        const path = response.assets[0].uri
        setImage(path)
        setResponse(response)
      }

    })
  }

  //Subir imagen
  const uploadImage = async () => {

    const uri = Platform.OS === "android"
      ? response.assets[0].uri
      : image.replace("file://", "");

    const formData = new FormData();

    formData.append("image", {
      uri,
      name: response.assets[0].fileName,
      type: response.assets[0].type,
    });

    try {
      const { data } = await axios.post('http://192.168.31.244:8000/api/upload', formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      if (!data.isSuccess) {
        alert("La imagen NO se pudo subir con exito");
        return;
      }
     
      return data;
    } catch (err) {
      console.log(err);
      alert("Error al subir la imagen");
    } finally {
     
    }
  }

  // Fetch para agregar producto
  const addProduct = async () => {
    if(image === "https://media.istockphoto.com/id/1051652656/es/vector/plato-vac%C3%ADo-con-cuchillo-y-tenedor-aislado-sobre-fondo-blanco-vista-desde-arriba.jpg?s=612x612&w=0&k=20&c=WJq867LBua-9t0172PH-H1VP2Tafo6ztoAGlNArF_Eg="){
      Alert.alert("Error", "Ingrese una imagen ")
      return
    }
    const code = randomCode();
    const data = await uploadImage();
    const url = 'http://192.168.31.244:8000/api/products';
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
          body: JSON.stringify({
            name: nombreProducto,
            description: descripcion,
            price: price,
            stock: stock,
            codProduct: code,
            image: data.url,
            category_id: select
          })
        },
      )
        .then((res) => res.json())
        .catch((error) => console.log(error))
        .then((response) => estadoIngresar(response));
    } catch (e) {
      console.log(e);
    }
  };


    //Validacion Ingresar producto
    const estadoIngresar = (response) => {
      console.log(response)
      if (response.status === 1) {
        Alert.alert('Producto Ingresado', 'Producto agregado exitosamente')
        setConsultarApiProductos(true);
        setNombreProducto("")
        setDescripcion("")
        setPrice("")
        setStock("")
        return
      }
      Alert.alert('Error', 'Producto no pudo ser agregado')
    }
  

  return (
    <ScrollView style={styles.contenedor}>
      <View>
        <Image style={styles.imagen} source={require('../img/camaleon.png')} />
        <Text style={styles.subtitle}>Ingresar Producto</Text>
        <Text style={styles.texto}> Nombre Del Producto</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresar Nombre del Producto"
          onChangeText={(text) => setNombreProducto(text)}
          value={nombreProducto}
        />
        <Text style={styles.texto}> Descripcion</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingresar Descripcion del Producto"
          onChangeText={(text) => setDescripcion(text)}
          value={descripcion}
        />

        <Text style={styles.texto}> Categoria</Text>
        <View style={styles.stylePicker}>
          <Picker selectedValue={select} onValueChange={category => categoriaSeleccionada(category)}>
            <Picker.Item label=" Seleccione una categoria" value="" />
            {categorys.map(category => (
              <Picker.Item key={category.id} label={category.name} value={category.id} />
            ))}
          </Picker>
        </View>

        <Text style={styles.texto}>Precio</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el valor del producto"
          onChangeText={(text) => setPrice(text)}
          value={price}
        />

        <Text style={styles.texto}>Cantidad</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese la cantidad del producto"
          onChangeText={(text) => setStock(text)}
          value={stock}
        />

        <Text style={styles.texto}>Ingresar imagen</Text>
        <HomeButton onPress={() => chooseImage()} text='Ingresar Imagen' />
        <Image style={{ width: 80, height:80, marginHorizontal:160}}  source={{uri:image}} />

        <HomeButton onPress={() => addProduct()} text='Ingresar Producto' />
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({

  contenedor: {
    backgroundColor: '#FFFFFF',
    flex: 1,
  },
  subtitle: {
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
    marginBottom: 30,
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
  texto: {
    fontSize: 16,
    color: '#000000',
    textTransform: 'uppercase',
    paddingVertical: 10,
    left: 20,
  },
  stylePicker: {
    backgroundColor: "#EEEEEE",
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    height: 50,
    width: 370,
    left: 20
  }
});

export default IngresarProducto