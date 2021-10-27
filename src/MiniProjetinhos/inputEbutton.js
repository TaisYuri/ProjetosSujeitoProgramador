import React, { useState } from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';

//import Arq from '../meuApp/Arq';

export default function inputEbutton(){

  const [nome, setNome] = useState('');
  const[input, setInput] = useState('');

  function atualiza(){
    setNome(input);
  }

    return(
      <View style= {estilos.container}>        
        <TextInput style={estilos.input} placeholder={"Digite seu nome"} onChangeText={(item) => setInput(item)} />
        <Button title='Atualiza' onPress={atualiza} />
        <Text style={estilos.texto}> {nome} </Text>


      </View>      
      
    )
}
const estilos = StyleSheet.create({
  container:{
    flex: 1,
    marginTop: 50,    
  },
  input:{
    borderWidth: 1,
    margin: 15,
    height: 40,
    padding: 10,
    fontSize: 17
  },
  texto:{
    textAlign: 'center',
    fontSize:20,
    color: 'red'
  }
})