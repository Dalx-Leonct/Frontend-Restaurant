import React from 'react'
import { Image } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from "../screens/Home"
import Cliente from "../screens/Cliente"
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AgregarCategoria from "../screens/AgregarCategoria"
import IngresarProducto from "../screens/IngresarProducto"
import ModificarProducto from "../screens/ModificarProducto"
import EliminarCategoria from "../screens/EliminarCategoria"


const Tab = createBottomTabNavigator();
const AdStack = createNativeStackNavigator();



function StackHome(){
  
    return (
        <AdStack.Navigator initialRouteName='Home' >
            <AdStack.Screen name='Home' component={Home} options={{headerTitleAlign: 'center', headerStyle: {
            backgroundColor: '#272727'} , headerTintColor: '#fff' }}/>
            <AdStack.Screen name='Cliente' component={Cliente} options={{headerTitleAlign: 'center', headerStyle: {
            backgroundColor: '#272727'} , headerTintColor: '#fff' }} />
            <AdStack.Screen name='Administrador'  component={AdTab} options={{headerTitleAlign: 'center', headerStyle: {
            backgroundColor: '#272727'} , headerTintColor: '#fff'}}  />
        </AdStack.Navigator>
    );
}

function AdTab(){
  return (
    <Tab.Navigator>
      <Tab.Screen name="Ingresar Producto" component = {IngresarProducto} options={{tabBarIcon:()=> renderIngresar(), headerShown:false }} />
      <Tab.Screen name="Modificar Producto" component = {ModificarProducto} options={{tabBarIcon:()=> renderMod(), headerShown:false }} />
      <Tab.Screen name="Agregar Categoria"   component = {AgregarCategoria} options={{tabBarIcon:()=> renderAgregar(), headerShown:false }} />
      <Tab.Screen name="Editar Categoria" component = {EliminarCategoria} options={{tabBarIcon:()=> renderEliminar(), headerShown:false }} />
    </Tab.Navigator>
  )
}

export default function Navegation () {
  return (
  <NavigationContainer>
    <StackHome/>
    </NavigationContainer>
  )
}


function renderIngresar(){
  return(
    <Image 
    source={require('../img/plato.png')} 
    style={{width: 30, height: 30}}
    />
  )
}

function renderAgregar(){
  return(
    <Image 
    source={require('../img/agregar.png')} 
    style={{width: 30, height: 30}}
    />
  )
}

function renderMod(){
  return(
    <Image 
    source={require('../img/ModCat.png')} 
    style={{width: 50, height: 30}}
    />
  )
}

function renderEliminar(){
  return(
    <Image 
    source={require('../img/modificar.png')} 
    style={{width: 30, height: 30}}
    />
  )
}

