import { Text, View, StyleSheet, FlatList, Button, Image, Modal, Alert } from 'react-native';
import { useEffect, useState, useContext } from 'react';
import { CatalogoButton, AgregarPedido, CancelarPedido } from '../components/buttons';
import ContextRestaurant from '../components/ContextR';


//CLIENTE

//Pantalla cuando esta seleccionando la cantidad de producto a llevar

const AgregarPedidos = ({ navigation }) => {

    const { setConsultarApi, setConsultarApiProductos, categorys, productos, tables, productoCantidad, setProductoCantidad, productosMesa, setProductosMesa } = useContext(ContextRestaurant);
    const { name, stock, image, price, id } = productoCantidad;
    const [count, setCount] = useState(1);
    
//CONTADOR
    const decrease = () => {
        if (count > 1) {
            setCount(count - 1);
            return
        }
        setCount(count);
    }
    const increase = () => {
        if (count < stock) {
            setCount(count + 1);
            return
        }
        setCount(count);
    }


    const agregarCarrito = () => {

        const productoIngresado = {
            product_id: id,
            name,
            quantity: count,
            image,
            price,
            total: price * count,
        };
        verificarProducto(productoIngresado);
        Alert.alert("Agregado","Producto agregado al carrito")
        navigation.goBack()
    }

    const verificarProducto = (productoIngresado) => {
        //cuando encuentra un producto con la misma id se detiene 
        const buscar = productosMesa.some(productoMesa => productoMesa.product_id === id)
        //si el producto ya esta en el carrito se setea
        console.log(buscar)
        if (buscar) {
            const productosNuevos = productosMesa.map(producto =>producto.product_id === id ? productoIngresado : producto)
            setProductosMesa(productosNuevos)
        }else{
            setProductosMesa([...productosMesa, productoIngresado])
        }     

    }

    return (

        <View>

            <Text style={{ fontSize: 40, color: '#000000', textTransform: 'uppercase', margin: 10, alignSelf: 'center', fontStyle: 'italic' }}>Cantidad</Text>
            <Text style={{ fontSize: 40, color: '#000000', textTransform: 'uppercase', margin: 10, alignSelf: 'center', fontStyle: 'italic' }}>{productoCantidad.name}</Text>

            <View style={{ flexDirection: 'row', alignSelf: 'center' }}>

                <CatalogoButton onPress={() => decrease()} text='-' />
                <Text style={{ fontSize: 50, color: '#000000', textTransform: 'uppercase', margin: 10 }}>{count}</Text>
                <CatalogoButton onPress={() => increase()} text='+' />

            </View>
            <Image style={{ width: 100, height: 100, marginVertical: 25, alignSelf: 'center' }} source={{ uri: image }} />
            <View style={{ alignSelf: 'center' }}>

                <CancelarPedido onPress={() => navigation.goBack()} text='Cancelar' />
                <AgregarPedido onPress={() => agregarCarrito()} text='Agregar' />

            </View>

        </View>



    )
}
export default AgregarPedidos