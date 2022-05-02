import React from 'react';
import { StyleSheet, TouchableHighlight, Text, Dimensions } from 'react-native';

export default props=>{

    const lyoutTeclado=[estilos.teclas]

    if(props.duplo){
        lyoutTeclado.push(estilos.botaoMaior)
    }
    if(props.triplo){
        lyoutTeclado.push(estilos.botaoMaiorMaior)
    }
    if(props.igual){
        lyoutTeclado.push(estilos.teclas)
    }
    if(props.Operador){
        lyoutTeclado.push(estilos.botaoOperadores)
    }
    if(props.igualdade){
        lyoutTeclado.push(estilos.botaoIgualdalde)
    }

    return(
        <TouchableHighlight onPress={props.Digitar}>
         <Text style={lyoutTeclado}>{props.texto}</Text>
        </TouchableHighlight>
    )
}

const estilos = StyleSheet.create({

    teclas: {
        fontSize: 50,
        height: Dimensions.get("window").width/4,
        width: Dimensions.get("window").width/4,
        backgroundColor:'#696969',
        color: '#fff',
        borderWidth:1,
        borderColor:'#000',
        textAlign: 'center',
        padding: 10,
    },
    botaoOperadores: {
     backgroundColor: '#696969',
     color: '#2e8b57',
    },
    botaoMaior: {
        width: (Dimensions.get("window").width/4)*2,
        
    },
    botaoMaiorMaior: {
        width: (Dimensions.get("window").width/4)*3,
        backgroundColor: '#696969',
    
    },
    botaoIgualdalde: {
        backgroundColor: '#2e8b57',
        color: '#fff',
    },
     

})