import React from 'react'
import { Image } from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from "../screens/Home"
import { NavigationContainer } from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AgregarCategoria from "../screens/AgregarCategoria"
import IngresarProducto from "../screens/IngresarProducto"
import ModificarProducto from "../screens/ModificarProducto"
import EliminarCategoria from "../screens/EliminarCategoria"
import ShoppingCar from '../screens/ShoppingCar'
import MyOrderScreen from "../screens/MyOrderScreen";
import SelectTableScreen from "../screens/SelectTableScreen";
import AgregarPedidos from '../screens/AgregarPedidos'


const Tab1 = createBottomTabNavigator();
const AdStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackHome() {

  return (
    <AdStack.Navigator initialRouteName='Home' >
      <AdStack.Screen name='Home' component={Home} options={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#272727'}, headerTintColor: '#fff'}} />
      <AdStack.Screen name='Cliente' component={ClienteTab} options={{title: 'App Restaurant', headerTitleAlign: 'center',headerStyle: { backgroundColor: '#0A090C', }, headerTintColor: '#FCF7FF',}} />
      <AdStack.Screen name='Administrador' component={AdTab} options={{headerTitleAlign: 'center', headerStyle: { backgroundColor: '#272727'}, headerTintColor: '#fff'}} />
      <AdStack.Screen name='AgregarPedidos' component={AgregarPedidos} options={{headerTitleAlign: 'center', headerStyle: {backgroundColor: '#272727'}, headerTintColor: '#fff'}} />
    </AdStack.Navigator>
  );
}

function AdTab() {
  return (
    <Tab1.Navigator>
      <Tab1.Screen name="Ingresar Producto" component={IngresarProducto} options={{ tabBarIcon: () => renderIngresar(), headerShown: false }} />
      <Tab1.Screen name="Modificar Producto" component={ModificarProducto} options={{ tabBarIcon: () => renderMod(), headerShown: false }} />
      <Tab1.Screen name="Agregar Categoria" component={AgregarCategoria} options={{ tabBarIcon: () => renderAgregar(), headerShown: false }} />
      <Tab1.Screen name="Editar Categoria" component={EliminarCategoria} options={{ tabBarIcon: () => renderEliminar(), headerShown: false }} />
    </Tab1.Navigator>
  )
}

function ClienteTab() {
  return (
    <Tab.Navigator>
      <Tab.Screen name='SelectTable' component={SelectTableScreen} options={{ tabBarLabel: 'Catalogo', tabBarIcon: () => renderComprar(), headerShown: false }} />
      <Tab.Screen name='ShoppingCar' component={ShoppingCar} options={{ tabBarLabel: 'Carrito', tabBarIcon: () => renderCarrito(), headerShown: false }} />
      <Tab.Screen name='MyOrder' component={MyOrderScreen} options={{ tabBarLabel: 'Mi Orden', tabBarIcon: () => renderPedido(), headerShown: false }} />
    </Tab.Navigator>
  )
}
export default function Navegation() {
  return (
    <NavigationContainer>
      <StackHome />
    </NavigationContainer>
  )
}


function renderIngresar() {
  return (
    <Image
      source={require('../img/plato.png')}
      style={{ width: 30, height: 30 }}
    />
  )
}

function renderAgregar() {
  return (
    <Image
      source={require('../img/agregar.png')}
      style={{ width: 30, height: 30 }}
    />
  )
}

function renderMod() {
  return (
    <Image
      source={require('../img/ModCat.png')}
      style={{ width: 50, height: 30 }}
    />
  )
}

function renderEliminar() {
  return (
    <Image
      source={require('../img/modificar.png')}
      style={{ width: 30, height: 30 }}
    />
  )
}

function renderComprar() {
  return (
    <Image
      source={require('../img/comida.png')}
      style={{ width: 30, height: 30 }}
    />
  )
}

function renderCarrito() {
  return (
    <Image
      source={require('../img/carro.png')}
      style={{ width: 30, height: 30 }}
    />
  )
}

function renderPedido() {
  return (
    <Image
      source={require('../img/reloj.png')}
      style={{ width: 30, height: 30 }}
    />
  )
}

