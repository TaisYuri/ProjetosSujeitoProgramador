import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {Picker} from '@react-native-picker/picker'

export default function App(){  

  const [carroSelecionado, setCarroSelecionado] = useState(0);

  const [listaCarros, setListaCarros] = useState([
    {key: 1, name: 'Gol 1.0', valor: 25.000},
    {key: 2, name: 'BMW', valor: 125.500},
    {key:3, name: 'Fit 1.6', valor: 69.500}
  ])

    let carros = listaCarros.map((item, index) => {
      return <Picker.Item key={index} value={index} label={item.name}/>
    })

    return(
      <View style={estilos.container}>
         <Picker selectedValue={carroSelecionado} onValueChange={ (itemValue, itemIdex) => setCarroSelecionado(itemValue)}>
           {carros}

         </Picker>
         <Text> {'Carro: ' + listaCarros[carroSelecionado].name} </Text>
         <Text> {'Valor: ' + listaCarros[carroSelecionado].valor} </Text>
         
      </View>
    )
}


const estilos = StyleSheet.create({
  container :{
    flex: 1,
    marginTop: 60
  },
  



})

