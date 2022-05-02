import React from 'react';
import { StatusBar, StyleSheet, Text, View } from 'react-native';

export default props=>{
    return(
        <View style={estilos.visor}>
            <StatusBar/>
            <Text style={estilos.txtVisorOperador} numberOfLines ={1}> {props.operador}</Text>
            <Text style={estilos.txtVisorIgual} numberOfLines ={1}> {props.igual}</Text>
            </View>
    )
}

const estilos = StyleSheet.create({
    visor: {
        flex:1,
        padding:10,
        justifyContent:'center',
        alignItems: 'flex-end',
        backgroundColor: '#444',
        width:'100%'
    },
    txtVisorIgual: {
        fontSize: 35,
        color: '#fff',
    },
    txtVisorOperador: {
        fontSize: 50,
        color: '#fff',
    }

})