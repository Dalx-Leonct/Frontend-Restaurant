import { Text, View, StyleSheet, TextInput, Image, ScrollView, Alert } from 'react-native'
import React, { Component, useState, useContext } from 'react'
import { HomeButton } from '../components/buttons'
import ContextRestaurant from '../components/ContextR'
import { Picker } from '@react-native-picker/picker';

const ModificarProducto = () => {
  // Use context
  const { setConsultarApiProductos, productos, categorys, setConsultarApi } = useContext(ContextRestaurant);

  //Use state picker productos
  const [select2, setSelect2] = useState("")

  

  const productosSeleccionado = products => {
    const productoBuscar  = productos.find(producto => producto.id === products);
    if(products !=""){
      const {id, name, description, price, stock, codProduct, image, category_id} = productoBuscar;
      setSelect2(products)
      setNombreProducto(name)
      setDescripcion(description)
      setStock(`${stock}`)
      setPrice(`${price}`)
      setSelect(category_id)
      setImage(image)
      return
    }
    setSelect2(products)
  }

  

  //Use state picker categoria
  const [select, setSelect] = useState("")
  const categoriaSeleccionada = category => { setSelect(category) }

  //Variables para ingresar el producto
  const [nombreProducto, setNombreProducto] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [price, setPrice] = useState("")
  const [stock, setStock] = useState("")
  const [codProduct, setCodProduct] = useState("")
 //Image Picker
 const [image, setImage] = useState("https://media.istockphoto.com/id/1051652656/es/vector/plato-vac%C3%ADo-con-cuchillo-y-tenedor-aislado-sobre-fondo-blanco-vista-desde-arriba.jpg?s=612x612&w=0&k=20&c=WJq867LBua-9t0172PH-H1VP2Tafo6ztoAGlNArF_Eg=")
 const [response, setResponse] = useState('');



  //Fetch para eliminar productos
  const delProd = async () => {
    const url = `http://192.168.245.215:8000/api/products/${select2}`;
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
  };


  //Fetch para editar productos
  const edProd = async () => {
    const url = `http://192.168.245.215:8000/api/products/${select2}`;
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
          body: JSON.stringify({
            name: nombreProducto,
            description: descripcion,
            price: price,
            stock: stock,
            codProduct: codProduct,
            image: image,
            category_id: select
          })
        },
      )
        .then((res) => res.json())
        .catch((error) => console.log(error))
        .then((response) => estadoMod(response));
    } catch (e) {
      console.log(e);
    }
  };

  //Validacion modificar producto
  const estadoMod = (response) => {
    if (response.status === 1) {
      Alert.alert('Producto modificado', 'Producto modificado exitosamente')
      setConsultarApiProductos(true);
      setNombreProducto("")
      setDescripcion("")
      setPrice("")
      setStock("")
      setImage("")
      return
    }
    Alert.alert('Error', 'Producto no pudo ser modificado')
  }

  //Validacion eliminar producto
  const estadoDel = (response) => {
    if (response.status === 1) {
      Alert.alert('Producto Eliminado', 'Producto eliminado exitosamente')
      setConsultarApiProductos(true);
      setNombreProducto("")
      setDescripcion("")
      setPrice("")
      setStock("")
      setImage("")
      return
    }
    Alert.alert('Error', 'Producto no pudo ser eliminado')
  }

  return (
    <ScrollView style={styles.contenedor}>
      <View>
        <Image style={styles.imagen} source={require('../img/camaleon.png')} />
        <Text style={styles.subtitle}>Modificar Producto</Text>

        <Text style={styles.texto}> Producto </Text>
        <View style={styles.stylePicker}>
          <Picker selectedValue={select2} onValueChange={products => productosSeleccionado(products)}>
            <Picker.Item label=" Seleccione un producto" value="" />
            {productos.map(products => (
              <Picker.Item key={products.id} label={products.name} value={products.id} />
            ))}
          </Picker>
        </View>

        <Text style={styles.texto}>Nombre Producto</Text>
        <TextInput
          style={styles.input}
          placeholder="Ingrese el nombre del producto"
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
        <Image style={{ width: 80, height:80}}  source={{uri:image}} />

        <HomeButton onPress={() => edProd()} text='Modificar Producto' />
        <HomeButton onPress={() => delProd()} text='Eliminar Producto' />
      </View>
    </ScrollView>
  )
}


const styles = StyleSheet.create({

  contenedor: {
    backgroundColor: '#FFFFFF',
    flex: 1
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


export default ModificarProducto