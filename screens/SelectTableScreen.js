import React from 'react';
import { Text, View, StyleSheet, FlatList, Button, Image } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import COLORS from '../consts/colors';
import { Picker } from '@react-native-picker/picker';
import { useEffect, useState, useContext } from 'react';
import ContextRestaurant from '../components/ContextR'
import { AgregarButton, CatalogoButton } from '../components/buttons'
//import { SelectCountry } from 'react-native-element-dropdown';
//import { Colors } from 'react-native/Libraries/NewAppScreen';


const SelectTableScreen = ({ navigation }) => {

    //Variables para el picker
    const [select, setSelect] = useState("")
    const mesaSeleccionada = table => { setSelect(table) }
    //Use context
    const { setConsultarApi, setConsultarApiProductos, categorys, productos, tables } = useContext(ContextRestaurant);

    const [count, setCount] = useState(1);
    
    const decrease = () => {
        if(count > 1){
        setCount(count - 1);
        return
        }
        setCount(count);
      }
    const increase = (stock) => {
        if(count < stock){
        setCount(count + 1);
        return
        }
        setCount(count);
      }  

    return (
        //Picker Mesa
        <View style={styles.container}>
            <View style={styles.container} >
                <Text style={styles.descriptionText}>Para continuar,</Text>
                <Text style={styles.descriptionText}>selecciona tu mesa:</Text>
                <View style={styles.stylePicker}>
                    <Picker selectedValue={select} onValueChange={table => mesaSeleccionada(table)}>
                        <Picker.Item label=" Seleccione una mesa" value="" />
                        {tables.map(table => (
                            <Picker.Item key={table.id} label={`Mesa: ${table.nTable}`} value={table.id} />
                        ))}
                    </Picker>
                </View>
                {select != "" ? 
                
                <View style={styles.flatStyle}>
                    <FlatList
                        data={productos}
                        keyExtractor={(item => item.id)}
                        renderItem={({ item }) => {

                            return (
                                <View style={{ flex: 1, flexDirection: "row", borderBottomWidth: 1, borderBottomColor: 'black' }}>
                                    <View style={{ flex: 1 }}>
                                        <Text style={styles.flatTexto}>Nombre: {item.name}</Text>
                                        <Text style={styles.flatTexto}>Categoria: {item.category_id}</Text>
                                        <Text style={styles.flatTexto}>Precio:  {item.price}</Text>
                                        <Text style={styles.flatTexto}>Stock: {item.stock}</Text>
                                        <Text style={styles.flatTexto}>Descripcion: {item.description}</Text>
                                    </View>
                                    <View style={{flex:1}}>
                                    <Image style={{ width: 80, height: 80,left:20, marginVertical: 10 }} source={{ uri:item.image}} />
                                    </View>
                                    
                                    <View style={{ flex: 1  }}>
                                        <AgregarButton onPress={() => AgregarPedido(item.id)} text='Agregar Pedido'/>
                                        
                                        <View style={{flexDirection: 'row', flex:1}}>
                                        <CatalogoButton  onPress={() => decrease()} text='-' />
                                        <Text style={{ fontSize: 12, color: '#000000', textTransform: 'uppercase',left:20}}>{count}</Text>
                                        <CatalogoButton  onPress={() => increase(item.stock)} text='+' />
                                        
                                    </View>
                                        
                                    </View>


                                </View>
                            )
                        }
                        }
                    />
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
        backgroundColor: "#FFCC00",
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        height: 50,
        width: 330,
        margin: 10
    },
    flatStyle: {
        backgroundColor: "#FFCC00",
        borderWidth: 2,
        borderColor: 'black',
        borderRadius: 10,
        height: 400,
        width: 330,
        margin: 10
    },
    flatTexto: {
        fontSize: 12,
        color: '#000000',
        textTransform: 'uppercase',
        left:5
    },
})