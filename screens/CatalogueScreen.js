import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import COLORS from '../consts/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import CatHorScrollView from '../components/CatHorScrollView';
import CatVerScrollView from '../components/CatVerScrollView';
import { useState, useEffect} from 'react';


//const axios = require('axios');

const CatalogueScreen = ({ navigation }) => {

    const [categories , setCategories ] = useState([]);
    const [currentCat , setCurrentCat ] = useState(1);
    const [currentTable, setCurrentTable] = useState();
    const [products , setProducts ] = useState([]);
    const [quantity , setQuantity ] = useState(0);
    const [nameCat , setNameCat ] = useState();

    /*useEffect( () => {
        async function getAllCategories(){
            const categories = await axios.get('http://10.0.2.2:8000/api/getAllCategory')
            setCategories(categories.data) 
        }   
        getAllCategories()
    }, [])
    */

    const selectCat = id =>{
        setCurrentCat (id)

        async function getProductsbyCat(){
            const products = await axios.get('http://10.0.2.2:8000/api/getProductbyCategory/'+currentCat)
            setProducts(products.data)
            console.log(products.data)

        }     
        getProductsbyCat()
        
    }
    const ProductQuantity = quantity =>{
        setQuantity(quantity)
    }



    return(
    <SafeAreaView style={{flex:1,paddingHorizontal:20,backgroundColor:COLORS.white,}}>
        <View style={styles.header}>
            <View>
                <Text style={{fontSize:20,fontWeight:'bold'}}>Elige categorias y</Text>
                <Text style={{fontSize:32,fontWeight:'bold',color:COLORS.red}}>Selecciona tus productos.</Text>
                <Text style={{fontSize:32,fontWeight:'bold',color:COLORS.red}}>{currentCat}</Text>
            </View>
        </View>
        <View style={styles.scrollHor}>
            <CatHorScrollView
                categories={categories}
                selectCat={selectCat}
                currentCat={currentCat}
            />
        </View>
        <View style={styles.scrollVer}>
            <CatVerScrollView
                
                products={products}
            />
        </View>
    </SafeAreaView>
    );
};

export default CatalogueScreen;


//___________________________________ Styles __________________________________________

const styles = StyleSheet.create({
    header:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    scrollHor: {
        //backgroundColor: COLORS.purple,
    },
    scrollVer: {
        height: 500,
        //backgroundColor: COLORS.purple,
    },
});