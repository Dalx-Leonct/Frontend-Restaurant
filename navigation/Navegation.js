import React from 'react'
import { Image } from 'react-native'
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import Home from "../screens/Home"
import {NavigationContainer} from "@react-navigation/native"
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import AgregarCategoria from "../screens/AgregarCategoria"
import IngresarProducto from "../screens/IngresarProducto"
import ModificarProducto from "../screens/ModificarProducto"
import EliminarCategoria from "../screens/EliminarCategoria"
import COLORS from '../consts/colors'
import AllOrdersScreen from "../screens/AllOrdersScreen";
import MyOrderScreen from "../screens/MyOrderScreen";
import CatalogueScreen from "../screens/CatalogueScreen";
import SelectTableScreen from "../screens/SelectTableScreen";

const Tab1 = createBottomTabNavigator();
const AdStack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function StackHome(){
  
    return (
        <AdStack.Navigator initialRouteName='Home' >
            <AdStack.Screen name='Home' component={Home} options={{headerTitleAlign: 'center', headerStyle: {
            backgroundColor: '#272727'} , headerTintColor: '#fff' }}/>
            <AdStack.Screen name='Cliente' component={ClienteTab} options={{ title: 'App Restaurant',headerTitleAlign: 'center',
            headerStyle: {backgroundColor: '#0A090C',},headerTintColor: '#FCF7FF', }} />
            <AdStack.Screen name='Administrador'  component={AdTab} options={{headerTitleAlign: 'center', headerStyle: {
            backgroundColor: '#272727'} , headerTintColor: '#fff'}}  />
        </AdStack.Navigator>
    );
}

function AdTab(){
  return (
    <Tab1.Navigator>
      <Tab1.Screen name="Ingresar Producto" component = {IngresarProducto} options={{tabBarIcon:()=> renderIngresar(), headerShown:false }} />
      <Tab1.Screen name="Modificar Producto" component = {ModificarProducto} options={{tabBarIcon:()=> renderMod(), headerShown:false }} />
      <Tab1.Screen name="Agregar Categoria"   component = {AgregarCategoria} options={{tabBarIcon:()=> renderAgregar(), headerShown:false }} />
      <Tab1.Screen name="Editar Categoria" component = {EliminarCategoria} options={{tabBarIcon:()=> renderEliminar(), headerShown:false }} />
    </Tab1.Navigator>
  )
}

function ClienteTab(){
  return (
    <Tab.Navigator>
            <Tab.Screen name='SelectTable' component= { SelectTableScreen } options={{ tabBarLabel: 'Catalogo',
                    title: 'Catalogo',
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: COLORS.white},
                    headerTintColor: COLORS.dark,
                    tabBarIcon:()=> renderComprar()
                }}
            />

           {/* <Tab.Screen name='Catalogue' component= { CatalogueScreen } options={{ 
                    title: 'Catalogo',
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: COLORS.white},
                    headerTintColor: COLORS.dark,
                }}
              />*/}

            <Tab.Screen name='AllOrders' component= { AllOrdersScreen } options={{
                    tabBarLabel: 'Carrito',
                    title: 'Ver todas las ordenes',
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: COLORS.dark},
                    headerTintColor: COLORS.white,
                    tabBarIcon:()=> renderCarrito()
                }}
            />
            <Tab.Screen name='MyOrder' component= { MyOrderScreen } options={{
                    tabBarLabel: 'Mi Orden',
                    title: 'Mi Orden actual',
                    headerTitleAlign: 'center',
                    headerStyle: {backgroundColor: COLORS.dark},
                    headerTintColor: COLORS.white,
                    tabBarIcon:()=> renderPedido()
                }}
            />
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

function renderComprar(){
  return(
    <Image 
    source={require('../img/comida.png')} 
    style={{width: 30, height: 30}}
    />
  )
}

function renderCarrito(){
  return(
    <Image 
    source={require('../img/carro.png')} 
    style={{width: 30, height: 30}}
    />
  )
}

function renderPedido(){
  return(
    <Image 
    source={require('../img/reloj.png')} 
    style={{width: 30, height: 30}}
    />
  )
}

