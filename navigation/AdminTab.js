import React from 'react'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import AgregarCategoria from "../screens/AgregarCategoria"
import IngresarProducto from "../screens/IngresarProducto"
import {NavigationContainer} from "@react-navigation/native"

const Tab = createBottomTabNavigator();



function AdTab(){
    return (
      <Tab.Navigator>
        <Tab.Screen name="Agregar Categoria" component = {AgregarCategoria} />
        <Tab.Screen name="Ingresar Producto" component = {IngresarProducto} />
      </Tab.Navigator>
    )
  }

  export default function AdminTab () {
    return (
    <NavigationContainer>
      <AdTab/>
      </NavigationContainer>
    )
  }