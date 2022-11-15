import { createContext, useEffect, useState } from 'react'

const ContextRestaurant = createContext()

export function ContextProvider({ children }) {

    const [categorys, setCategorys] = useState([]);

    const [consultarApi, setConsultarApi] = useState(true);

    useEffect(() => {

        const obtenerCategorias = async () => {
            try {
                const url = `http://192.168.31.15:8000/api/getAllCategory`
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

    return (
        <ContextRestaurant.Provider value={{ setConsultarApi, categorys }}>
            {children}
        </ContextRestaurant.Provider>
    )
}

export default ContextRestaurant;