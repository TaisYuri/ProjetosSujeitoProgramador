import React from "react";
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';

export default function List(props){

    function likeada(likers){
        return (likers ? require('../Img/likeada.png'): require('../Img/like.png'))
    }

    return (
        <View>
            <View style={estilos.header}>
                <Image style={estilos.fotoPerfil} source={ {uri: props.data.imgperfil}}/>
                <Text style= {estilos.nomePerfil}> {props.data.nome} </Text>
            </View>
            <Image resizeMode='cover' style={estilos.imagem} source={ {uri: props.data.imgPublicacao}}/>
            <View style={estilos.areaBtn}>
                <TouchableOpacity>
                    <Image style={estilos.iconeLike} source={ likeada (props.data.likeada)}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={estilos.iconeSend} source={ require('../Img/comment.png')}/>
                </TouchableOpacity>
                <TouchableOpacity>
                    <Image style={estilos.iconeSend} source={ require('../Img/send.png')}/>
                </TouchableOpacity>
            </View>
            <Text style={estilos.nomeRodape}> {props.data.nome} </Text>
            <Text style={estilos.descrRodape}> {props.data.descricao} </Text>
        </View>
    )
}
const estilos = StyleSheet.create({
    header:{
        flexDirection: 'row',
        padding: 5,
        alignItems: 'center'
    },
    fotoPerfil:{
        width: 50,
        height: 50,
        borderRadius: 25,
    },
    nomePerfil:{
        fontSize: 25,  
        fontWeight: 'bold'  
    },
    imagem:{
        height:400,
    },
    areaBtn:{
        flexDirection: 'row',
        padding: 5,
    },
    iconeLike:{
        width: 25,
        height:25
    },
    iconeSend:{
        width: 25,
        height: 25,
        marginLeft: 5
    },
    nomeRodape:{
        fontWeight: 'bold',
        fontSize: 17,
        paddingLeft: 5
    },
    descrRodape:{
        paddingLeft: 5,
        marginBottom: 15
    },
})