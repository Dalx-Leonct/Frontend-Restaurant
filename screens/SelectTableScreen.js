import React from 'react';
import { Text, View, StyleSheet, FlatList, Button, Image, Modal } from 'react-native';
import COLORS from '../consts/colors';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState, useContext } from 'react';
import ContextRestaurant from '../components/ContextR'
import { AgregarButton, CatalogoButton, AgregarPedido, CancelarPedido } from '../components/buttons'
import { useNavigation } from '@react-navigation/native';


//import { SelectCountry } from 'react-native-element-dropdown';
//import { Colors } from 'react-native/Libraries/NewAppScreen';


const SelectTableScreen = () => {


    const navigation = useNavigation()
    const { setConsultarApi, setConsultarApiProductos, categorys, productos, tables, productoCantidad, setProductoCantidad, productosMesa, setProductosMesa, selectMesa, setSelectMesa } = useContext(ContextRestaurant);

    const [select, setSelect] = useState("") //category id y foranea

    const [filtrarCategoria, setFiltrarCategoria] = useState([])

    const categoriaSeleccionada = category => {

        setSelect(category)
        filtrarPorCategoria(category)
    }

    //Variables para el picker

    const mesaSeleccionada = table => {
        setSelectMesa(table)
        filtrarPorCategoria("")
        setProductosMesa([]);
    }

    //Producto seleccionado

    const productoSeleccionado = (id) => {

        const productoSelec = productos.filter(producto => producto.id === id)
        setProductoCantidad(productoSelec[0])

        navigation.navigate("AgregarPedidos")

    }

    //Filtrar por categoria

    const filtrarPorCategoria = (category) => {
        console.log(select)

        if (category === "") {
            setFiltrarCategoria(productos)
            return
        }

        const categoriaSelec = productos.filter(producto => producto.category_id === category)
        setFiltrarCategoria(categoriaSelec)

    }

    const buscarCategoria = (item) => {
        const buscar = categorys.find(categoria => categoria.id === item.category_id);
        return buscar.name
    }


    return (

        //Picker Mesa
        <View style={styles.container}>

            <View style={styles.container} >



                <Text style={styles.descriptionText}>Para continuar,</Text>
                <Text style={styles.descriptionText}>selecciona tu mesa:</Text>
                <View style={styles.stylePicker}>
                    {/* Picker Mesas*/}
                    <Picker selectedValue={selectMesa} onValueChange={table => mesaSeleccionada(table)}>
                        <Picker.Item label=" Seleccione una mesa" value="" />
                        {tables.map(table => (
                            <Picker.Item key={table.id} label={`Mesa: ${table.nTable}`} value={table.id} />
                        ))}
                    </Picker>
                </View>


                {selectMesa != "" ?

                    <View>
                        {/* Picker Categoria*/}
                        <Text style={styles.descriptionText}> Filtrar por Categoria</Text>
                        <View style={styles.stylePicker}>
                            <Picker selectedValue={select} onValueChange={category => categoriaSeleccionada(category)}>
                                <Picker.Item label=" Seleccione una categoria" value="" />
                                {categorys.map(category => (
                                    <Picker.Item key={category.id} label={category.name} value={category.id} />
                                ))}
                            </Picker>
                        </View>

                        <View style={styles.flatStyle}>
                            <FlatList

                                data={filtrarCategoria}
                                keyExtractor={(item => item.id)}
                                renderItem={({ item }) => {
                                    return (
                                        <View style={{ flex: 1, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: 'black' }}>
                                            <View style={{ flex: 1 }}>
                                                <Text style={styles.flatTexto}>Nombre: {item.name}</Text>
                                                <Text style={styles.flatTexto}>Categoria: {buscarCategoria(item)}</Text>
                                                <Text style={styles.flatTexto}>Precio:  {item.price}</Text>
                                                <Text style={styles.flatTexto}>Stock: {item.stock}</Text>
                                                <Text style={styles.flatTexto}>Descripcion: {item.description}</Text>
                                            </View>
                                            <View style={{ flex: 1 }}>
                                                <Image style={{ width: 80, height: 80, left: 20, marginVertical: 25 }} source={{ uri: item.image }} />
                                            </View>

                                            <View style={{ flex: 1 }}>

                                                <AgregarButton onPress={() => productoSeleccionado(item.id)} text='Agregar Pedido' />

                                            </View>
                                        </View>
                                    )
                                }
                                }
                            />
                        </View>
                    </View>
                    : ""}

            </View>



        </View>
    );
}

export default SelectTableScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        flex: 1
    },
    dropdown: {
        height: 50,
        borderColor: COLORS.red,
        borderWidth: 1,
        borderRadius: 18,
        paddingHorizontal: 20,
        fontSize: 20,
        height: 70,
        shadowColor: COLORS.red,
    },
    shadowOffset: {
        width: 0,
        height: 1,
    },
    icon: {
        marginRight: 5,
    },
    label: {
        position: 'absolute',
        backgroundColor: 'white',
        left: 28,
        top: 5,
        zIndex: 999,
        paddingHorizontal: 8,
        fontSize: 18,
        color: COLORS.red,
    },
    placeholderStyle: {
        fontSize: 20,
        color: COLORS.dark,
    },
    selectedTextStyle: {
        fontSize: 20,
        color: COLORS.dark,
    },
    iconStyle: {
        width: 20,
        height: 20,
    },
    descriptionText: {
        fontSize: 23,
        color: COLORS.dark,
        textAlign: 'center',
    },
    texto: {
        fontSize: 16,
        color: '#000000',
        textTransform: 'uppercase',
        paddingVertical: 10,
        left: 20,
    },
    stylePicker: {
        backgroundColor: "#FDFD96",
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        height: 50,
        width: 330,
        margin: 5
    },
    flatStyle: {
        backgroundColor: "#FDFD96",
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        height: 400,
        width: 330,
        margin: 5
    },
    flatTexto: {
        fontSize: 12,
        color: '#000000',
        textTransform: 'uppercase',
        left: 5
    },
})