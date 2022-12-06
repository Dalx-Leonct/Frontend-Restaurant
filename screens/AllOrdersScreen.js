import React from 'react';
import { ScrollView, StatusBar } from 'react-native';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import { useState, useEffect} from 'react';
import { FlatList } from 'react-native';

//const axios = require('axios');

export default function AllOrdersScreen(){

  const [tables , setTables ] = useState([]);
/*
    useEffect( () => {
        
        async function getAllTable(){
            const tables = await axios.get('http://10.0.2.2:8000/api/getAllTable')
            console.log(tables.data)
            setTables(tables.data)
        }
        getAllTable()
    }, [])
*/
  return(
    <View style={styles.container}>
      
      <Text style={styles.titulo}>Todas las ordenes</Text>
      <Text style={styles.subtitulo}>Mira todas las ordenes que ha hecho la mesa</Text>

        <FlatList
          data = {tables}
          renderItem = {({item}) => <Text>{item.id},{item.nTable}</Text>}      
        />

      <StatusBar style="auto"/>
    </View>
  );
}

//___________________________________ Styles __________________________________________

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#CBC5EA',
    alignItems: 'center',
  },
  titulo: {
    fontStyle: 'italic',
    alignContent: 'flex-start',
    paddingTop: 225,
    fontSize: 50,
    color: '#0D0D0E',
  },
  subtitulo: {
    fontSize: 25,
    color: '#0A090C',
  },
});