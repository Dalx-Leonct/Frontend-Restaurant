import { createContext, useEffect, useState } from 'react'

const ContextRestaurant = createContext()

export function ContextProvider({ children }) {

    const [categorys, setCategorys] = useState([]);
    const [productos, setProductos] = useState([]);
    const [tables, setTables] = useState([]);
    const [productoCantidad, setProductoCantidad] = useState([]);
    const [productosMesa, setProductosMesa] = useState([]);
    const [orden, setOrden] = useState({});
    const [selectMesa, setSelectMesa] = useState("");
    const [obtenerOrdenesBase, setObtenerOrdenesBase] = useState([]);


    const [consultarApi, setConsultarApi] = useState(true); //Categoria
    const [consultarApiProductos, setConsultarApiProductos] = useState(true); //Productos
    const [consultarApiTables, setConsultarApiTables] = useState(true);  // Mesas
    const [consultarApiOrders, setConsultarApiOrders] = useState(true); //Ordens

// Use effect de categorias
    useEffect(() => {
        const obtenerCategorias = async () => {
            try {
                const url = `http://192.168.31.244:8000/api/categories`
                const response = await fetch(url)
                const result = await response.json()
                setCategorys(result)
            } catch (error) {
                throw error
            }
            setConsultarApi(false)
        }
        if(consultarApi){
            obtenerCategorias()
        }   
    },[consultarApi]);


// Use effect de productos
    useEffect(() => {
        const obtenerProductos = async () => {
            try {
                const url = `http://192.168.31.244:8000/api/products`
                const response = await fetch(url)
                const result = await response.json()
                setProductos(result)
            } catch (error) {
                throw error
            }
            setConsultarApiProductos(false)
        }
        if(consultarApiProductos){
            obtenerProductos()
        }   
    },[consultarApiProductos]);


    // Use effect de mesas
    useEffect(() => {
        const obtenerTables = async () => {
            try {
                const url = `http://192.168.31.244:8000/api/tables`
                const response = await fetch(url)
                const result = await response.json()
                setTables(result)
            } catch (error) {
                throw error
            }
            setConsultarApiTables(false)
        }
        if(consultarApiTables){
            obtenerTables()
        }   
    },[consultarApiTables]);

    // Intento de Use effect de Ordenes
   /* 
   useEffect(() => {
        const obtenerOrdenes = async () => {
            try {
                const url = `http://192.168.31.244:8000/api/orders`
                const response = await fetch(url)
                const result = await response.json()
                setObtenerOrdenesBase(result)
            } catch (error) {
                throw error
            }
            setConsultarApiOrders(false)
        }
        if(consultarApiOrders){
            obtenerOrdenes()
        }   
    },[consultarApiOrders]);
    */

    //Se retorna el children del useContext
    return (
        <ContextRestaurant.Provider value={{ setConsultarApi, setConsultarApiProductos, categorys, productos, setConsultarApiTables, tables, productoCantidad, setProductoCantidad, productosMesa, setProductosMesa, orden, setOrden, selectMesa, setSelectMesa, consultarApiOrders, setConsultarApiOrders, obtenerOrdenesBase, setObtenerOrdenesBase }}>
            {children}
        </ContextRestaurant.Provider>
    )
}

export default ContextRestaurant;