import React, { useState } from 'react';
import {View,  Image, StyleSheet, TouchableOpacity, Text} from 'react-native';

import biscoito from './src/biscoito.png'
import biscoitoQuebrado from './src/biscoitoAberto.png'

const frases = ['"5 meses com a melhor namorada"', '"Você já encontrou sua alma gemea"', '"O seu sorriso é o mais lindo"', '"Jessica ♥ Tais"']

export default function App(){  

  const[nome, setNome] = useState('')
  const[img, setImg ] = useState(biscoito)
  let numAnt =0
  function quebrar(){    
    let num = (Math.floor(Math.random()* frases.length))
    
    if(!num === numAnt){
    setNome(frases[num]) 
    setImg(biscoitoQuebrado)
    numAnt= num
  }else{
    num = (Math.floor(Math.random()* frases.length))
    setNome(frases[num]) 
    setImg(biscoitoQuebrado)
    numAnt= num
  }
  }

  function reverter(){
    setImg(biscoito)
    setNome('')
  }

    return(
      <View style={estilos.container}>
        <Image source={img} style={estilos.biscoitos}/>
        <Text style={estilos.frases}> {nome}</Text>
        <TouchableOpacity style={estilos.botao} onPress={quebrar}>
          <View style={estilos.btnArea}>
            <Text style={estilos.btnTexto}>Quebrar Biscoito</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={[estilos.botao, {marginTop: 15, borderColor: '#121212'}]} onPress={reverter}>
          <View style={estilos.btnArea}>
            <Text style={[estilos.btnTexto, {color: '#121212'}]}>Novo Biscoito</Text>
          </View>
        </TouchableOpacity>
      </View>
    )
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  biscoitos:{
    width: 200,
    height: 200
  },
  frases:{
    fontSize: 17,
    color: '#DD7b22',
    fontStyle: 'italic',
    margin: 30,
  },
  botao:{
    width: 200,
    height: 50,
    borderWidth: 2,
    borderColor:'#dd7b22',
    borderRadius: 25,   
  },
  btnArea:{
    flex: 1,
    justifyContent:'center',
    alignItems:'center'
  },
  btnTexto:{
    color: '#dd7b22',
    fontSize: 15,
    fontWeight: 'bold'
  },
})