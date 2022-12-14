import React, { useContext } from 'react';
import { Alert, ScrollView, StatusBar } from 'react-native';
import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import ContextRestaurant from '../components/ContextR';
import { QuitarCarrito, AgregarOrden } from '../components/buttons';

//CLIENTE

//Screen del carrito
export default function ShoppingCar() {

  const { setConsultarApi, setConsultarApiProductos, categorys, productos, tables, productoCantidad, setProductoCantidad, productosMesa, setProductosMesa, orden, setOrden, selectMesa, setSelectMesa } = useContext(ContextRestaurant);
  //Orden
  const { id, codeOrder, total, orderStatus, tables_id } = orden
  const totalCarrito = () => {
    let sumador = 0
    productosMesa.forEach(producto => {

      sumador += producto.total;

    });
    return sumador;

  }

  //Elimina filtrando por la id
  const eliminarCarrito = (id) =>{
    setProductosMesa(productosMesa.filter(producto => producto.product_id !==id))
  }

  const randomCode = () =>{
    const n = Math.random().toString(36).substring(2,10) 
    return n
  }


  //Creacion del detalle de la orden

  const detalleOrden = (id) => {

    productosMesa // Productos ingresados al carrito
    orden //Confirmacion de Productos que lleva

    productosMesa.forEach(producto => {
      const {quantity, product_id} = producto
      const detalle ={
      quantity,
      product_id,
      order_id:id
      }
      console.log(detalle)
      addDetailOrder(detalle)
    });

  }


  const addDetailOrder = async (detalle) => {
    const url = 'http://192.168.31.244:8000/api/detailOrders';
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
          body: JSON.stringify(detalle)
        },
      )
        .then((res) => res.json())
        .catch((error) => console.log(error))
        .then((response) => console.log(response));
    } catch (e) {
      console.log(e);
    }

  };



   //Ingresar orden 

  const agregarOrden = () =>{
    const code = randomCode();
    const orden = {
      codeOrder: code,
      total: totalCarrito(),
      orderStatus: 'Waiting',
      tables_id: selectMesa,
  };
  addOrder(orden)


  }


  const addOrder = async (orden) => {
    const url = 'http://192.168.31.244:8000/api/orders';
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
          body: JSON.stringify(orden)
        },
      )
        .then((res) => res.json())
        .catch((error) => console.log(error))
        .then((response) => confirmacionRespuesta(response));
    } catch (e) {
      console.log(e);
    }

  };

  const confirmacionRespuesta = (response) => {
    console.log(response)
    if (response.status === 1) {
      detalleOrden(response.order.id)
      setOrden(response.order)
      Alert.alert("Ingresada","Su orden fue ingresada correctamente")
      setProductosMesa([])
      return
    }
    Alert.alert('Error', 'Su orden no pudo ser ingresada')
  }


  return (
    <View style={styles.container}>
      <Text style={styles.titulo} >Carrito de compras</Text>

      <FlatList
        data={productosMesa}
        keyExtractor={(item => item.product_id)}
        renderItem={({ item }) => {
          //name, stock, image, price,
          return (
            <View style={{ flex: 1, flexDirection: "row", borderWidth:2, borderRadius:10, margin:5 }}>
              <View style={{ flex: 1 }}>
                <Text style={styles.flatTexto}>Nombre: {item.name}</Text>
                <Text style={styles.flatTexto}>Cantidad: {item.quantity}</Text>
                <Text style={styles.flatTexto}>Precio:  {item.price}</Text>
                <Text style={styles.flatTexto}>Total:  {item.total}</Text>
              </View>

              <View style={{ flex: 1 }}>
                <Image style={{ width: 80, height: 80, left: 20, marginVertical: 25 }} source={{ uri: item.image }} />
              </View>

                <View style={{ flex: 1 }}>
                  <QuitarCarrito onPress={() => eliminarCarrito(item.product_id)} text='Eliminar'  />
                </View>

            </View>
          )
        }
        }

      />
      <View style={{ flexDirection: 'row'}}>

      <Text style={styles.subtitulo}>Total: {totalCarrito()}</Text>
      <AgregarOrden onPress={() => agregarOrden()} text='Comprar'  />

      </View>

    </View>
  );
}

//___________________________________ Styles __________________________________________

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFD96',
  },
  titulo: {
    fontStyle: 'italic',
    fontSize: 40,
    color: '#0D0D0E',
    textAlign: 'center',
  },
  subtitulo: {
    fontSize: 25,
    color: '#0A090C',
    margin:20
  },
  flatStyle: {
    backgroundColor: "#FDFD96",
    borderWidth: 2,
    borderColor: 'black',
    borderRadius: 10,
    height: 400,
    width: 330,
    margin: 10
},
flatTexto: {
    fontSize: 14,
    color: '#000000',
    textTransform: 'uppercase',
    left: 5,
    marginTop:7
},
});