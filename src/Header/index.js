import React from "react";
import {StyleSheet, Image, View} from 'react-native';

export default function Header(){
    return(
        <View style={estilos.container}>
            <Image source={require('../Img/logo.png')}/>
            <Image style={estilos.send} source={require('../Img/send.png')} />
        </View>
    )
}

const estilos = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 55,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 15,
        borderBottomWidth: 0.2,
        borderColor: '#121212',
        elevation: 2,

    },
    send:{
        width: 28,
        height: 28,        
    },
})