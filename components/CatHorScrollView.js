import React, { Component } from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { Pressable } from 'react-native';
import COLORS from '../consts/colors';

class CatHorScrollView extends Component {

    render() {
        return (
            <View>
                <ScrollView horizontal={true}>
                {
                    this.props.categories.map((item, index) => (
                        <View key = {item.id} style = {styles.item}>
                            <Pressable onPress={()=> this.props.selectCat(item.id)}>
                                <Text style={styles.textCat}>{item.name}</Text>
                            </Pressable>
                            
                        </View>
                    ))
                }
                </ScrollView>
            </View>
        )
    }
}

export default CatHorScrollView

const styles = StyleSheet.create ({
    item: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: 1,
        marginTop: 18,
        margin: 2,
        marginBottom: 10,
        padding: 6,
        //borderColor: '#0A090C',
        //borderWidth: 1,
        borderRadius: 6,
        backgroundColor: COLORS.red
    },
    textCat: {
        fontSize: 15,
        color: COLORS.white
    }
})