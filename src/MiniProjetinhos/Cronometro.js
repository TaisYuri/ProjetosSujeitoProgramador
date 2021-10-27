import React, { useState } from 'react';
import {View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';

var ss = 0;
var mm = 0;
var hh = 0;
let timer = null;

export default function App(){  

  const[btnIniciar, setBtn]= useState('Iniciar');
  const[tempo, setTempo] = useState(0);
  const[ultimo, setUltimo] = useState(null);

  function iniciar(){
      if(timer !== null){
        //parar o timer
        clearInterval(timer);
        timer = null;

        setBtn('Iniciar');
      }else{
        timer = setInterval(() => {
          ss++

          if(ss === 60){
            ss = 0
            mm++
            
          }
          if(mm === 60){
            mm = 0
            hh++
          }
          // transforma em 00:00:00 sendo 
          // Se hh < 10 então junta "0"+hh (ex: 05) se não pega hh)
          let format = ( hh< 10 ? '0' + hh : hh)+ ':' 
          + (mm <10 ? '0'+mm : mm) + ':'
          + (ss <10 ? '0' + ss : ss)

          setTempo(format);
          setBtn('Parar')

        },1000)
      }
  }
  function limpar(){
    if(timer !== null){
      clearInterval(timer);
      timer = null;
      
    }
    setUltimo(tempo); // pega o tempo adiciona a constante do ultimo tempo
    setTempo(0); // zera o tempo
    ss = 0;
    mm = 0,
    hh = 0,

    setBtn('Iniciar')
  }


    return(
      <View style={estilos.container}>
        <Image source={require('./src/crono.png')} />
        <Text style={estilos.timer}> {tempo} </Text>
        <View style={estilos.btnArea}>
          <TouchableOpacity style={estilos.btn} onPress={iniciar}>
            <Text style={estilos.btnTexto}> {btnIniciar} </Text>
          </TouchableOpacity>
          <TouchableOpacity style={estilos.btn} onPress={limpar}>
            <Text style={estilos.btnTexto}>Limpar</Text>
          </TouchableOpacity>
        </View>
        <Text style={estilos.ultimoTempo}> 
          {ultimo ? 'Ultimo tempo: ' + ultimo : ''}  
        </Text>
      </View>
    )
}

const estilos = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ddddff'    
  },
  timer:{
    fontSize: 45,
    fontWeight: 'bold',
    marginTop: -160,
    color: '#FFF'
  },
  btnArea:{
    flexDirection: 'row',
    marginTop: 130,
    height: 40
  },
  btn:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
    marginHorizontal: 17,
    borderRadius:9   
  },
  btnTexto:{
    fontSize: 20,
    fontWeight: 'bold',
    color:'#ddd5ff'
  },
  ultimoTempo:{
    marginTop: 30,
    fontSize:25,
    color:'#fff',
    fontStyle: 'italic'

  },

})

