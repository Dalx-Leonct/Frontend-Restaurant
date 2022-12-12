import React, { useContext } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import COLORS from '../consts/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import ContextRestaurant from '../components/ContextR';
import CountDown from 'react-native-countdown-component';

//Detalle de orden y cronometro
const MyOrderScreen = ({ navigation }) => {
  const { setConsultarApi, setConsultarApiProductos, categorys, productos, tables, productoCantidad, setProductoCantidad, productosMesa, setProductosMesa, orden, setOrden, selectMesa, setSelectMesa } = useContext(ContextRestaurant);

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.header}>

        <Text style={styles.tittle}>Detalle del pedido:</Text>

        <View style={{ borderWidth: 2, borderRadius: 9, margin: 2 }} >
          <Text style={styles.detalle}>Mesa: {orden.tables_id}</Text>
          <Text style={styles.detalle}>Total: {orden.total}</Text>
          {orden.orderStatus === "Waiting" ? <Text style={styles.detalle}>Estado del pedido: En espera</Text> : orden.orderStatus === "Confirmed" ? <Text style={styles.detalle}>Estado del pedido: Confirmado</Text> : <Text style={styles.detalle}>Estado del pedido: Finalizado</Text>}
          <Text style={styles.detalle}>Codigo de orden: {orden.codeOrder}</Text>

        </View >

        <View style={{marginTop:20, marginBottom:70}}>

        <Text style={styles.timerText}>Espere el tiempo de la orden</Text>

        </View>

        <CountDown
        until={60 * 10 + 30}
        size={35}
        onFinish={()=>alert('Finalizado')}
        digitStyle={{backgroundColor: '#FFFFFF', borderWidth:2}}
        digitTxtStyle={{color:'#000000'}}
        separatorStyle ={{color: '#000000'}}
        timeToShow={['M', 'S']}
        timeLabels={{m:'MM', s:'SS'}}
        showSeparator

      />

      </View>

    </SafeAreaView>
  );
};

export default MyOrderScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FDFD96',
  },
  header: {
    marginTop: 10,
    alignSelf: 'center',
    flex: 1
  },
  tittle: {
    fontSize: 29,
    fontWeight: 'bold',
    color: COLORS.dark,
    alignSelf: 'center',
    alignContent: 'center',
    marginBottom: 20
  },
  scroll: {
    height: "50%",
    //backgroundColor: COLORS.purple,
  },
  timerText: {
    fontWeight: 'bold',
    fontSize: 25,
    alignSelf: 'flex-end',
    color: COLORS.dark,
    margin: 20
  },
  detalle: {
    fontWeight: 'bold',
    fontSize: 20,
    color: COLORS.dark,
    margin: 5,
    padding: 5
  },

});