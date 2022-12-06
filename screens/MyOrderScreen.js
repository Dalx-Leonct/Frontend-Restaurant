import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import COLORS from '../consts/colors';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProdVerScrollView from '../components/ProdVerScrollView'; 

const MyOrderScreen = ({ navigation }) => {

  return(
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <View >
            <Text style={styles.tittle}>Su pedido es:</Text>
        </View>
      </View>
      <View style={styles.scroll}>
        <ProdVerScrollView/>
      </View>
      <View style={styles.end}>
        <View style={styles.line}></View>
        <Text style={styles.totalText}>Total: </Text>
        <View style={{alignItems: 'center'}}>
          <Pressable style={styles.sendBtn}>
          <Text style={styles.textBtn}>Enviar Orden</Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default MyOrderScreen;

const styles = StyleSheet.create({
    container: {
    flex:1,
    paddingHorizontal:20,
    backgroundColor:COLORS.light,
  },
  header:{
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  tittle: {
    fontSize:29,
    fontWeight:'bold',
    color:COLORS.dark,
  },
  scroll: {
    height: "75%",
    //backgroundColor: COLORS.purple,
  },
  end: {
    height: "18%",
    //backgroundColor: COLORS.white,
    justifyContent: 'flex-start',
  },
  totalText: {
    fontWeight: 'bold',
    fontSize: 19,
    justifyContent: 'flex-end'
  },
  line: {
    backgroundColor: COLORS.dark,
    height: 1.1,
  },
  sendBtn: {
    height: 40,
    width: 160,
    marginTop: 25,
    backgroundColor:COLORS.dark,
    borderRadius: 12,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textBtn: {
    color: COLORS.white,
    fontSize: 18,
  }
});