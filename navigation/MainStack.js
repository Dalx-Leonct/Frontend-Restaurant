
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React, { Component } from 'react'
import Admin from '../screens/Admin'
import Cliente from '../screens/Cliente'
import Home from '../screens/Home'

const Stack = createNativeStackNavigator()

const MainStack = () => {
    return (

        <NavigationContainer>
            <Stack.Navigator>

                <Stack.Screen name ='Home'component={Home}/>
                <Stack.Screen name ='Administrador'component={Admin}/>
                <Stack.Screen name ='Cliente'component={Cliente}/>
                



            </Stack.Navigator>
        </NavigationContainer>

    )
}

export default MainStack