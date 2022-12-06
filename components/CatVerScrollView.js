import React, { Component } from 'react';
import { Pressable } from 'react-native';
import {Image, Text, View, StyleSheet, ScrollView } from 'react-native';
import COLORS from '../consts/colors';

class CatVerScrollView extends Component {

    render() {
        return (
            <View>
                <ScrollView horizontal={false}>
                {
                    this.props.products.map((item, index) => (
                    <View key = {item.id} style = {styles.item}>
                        <Image source={{uri:'https://images.hola.com/imagenes/cocina/noticiaslibros/20210805194067/ensaladas-con-tres-cuatro-ingredientes/0-981-971/ingredientes-adobe-m.jpg'}} style = {styles.imageProduct}/>
                        
                        <View style={styles.textView}>
                            <Text style = {styles.textTittle}>{item.name}</Text> 
                            <Text style = {styles.textDescription}>{item.description}</Text> 
                            
                            <View style={styles.viewPC}>
                                <Text style = {styles.textPrice}>{item.price}</Text> 
                                <View style={styles.viewCount}>
                                    <Pressable>
                                        <Image source={require('../assets/quitar.png')} style = {styles.icon}/>
                                    </Pressable>
                                    <Text fontSize={12}> 0 </Text>
                                    <Pressable>
                                        <Image source={require('../assets/agregar.png')} style = {styles.icon}/>
                                    </Pressable>
                                </View>
                            </View>

                        </View>

                    </View>
                    ))
                }
                </ScrollView>
            </View>
        )
    }
}

export default CatVerScrollView

const styles = StyleSheet.create ({
    item: {
        flexDirection: 'row',
        height: 155,
        justifyContent: 'space-between',
        padding: 1,
        marginTop: 8,
        margin: 2,
        padding: 6,
        borderRadius: 15,
        backgroundColor: COLORS.light
    },
    imageProduct: {
        alignItems: 'flex-start',
        alignContent: 'center',
        width:110,
        height:110,
        marginTop: 15,
        margin:5,
    },

    textView: {
        margin: 5,
        paddingEnd: 130,
        textAlign: 'justify',
        flexDirection: 'column',
    },
    textTittle: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.dark,
    },
    textDescription: {
        fontSize: 13,
        fontStyle: 'italic',
    },
    textPrice: {
        fontSize: 18,
        fontWeight: 'bold',
        color: COLORS.dark,
    },
    icon: {
        height: 24,
        width: 24,
        marginHorizontal: 3,
    },
    viewCount: {
        fontSize: 12,
        flexDirection: 'row',
    },
    viewPC: {
        flexDirection: 'row',
        marginTop: 10,
        justifyContent: 'space-between',
    },
})