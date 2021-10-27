import React, { useState } from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Slider from '@react-native-community/slider';

export default function App(){  

  const[valor, setValor] = useState(0);

    return(
      <View style={estilos.container}>
        
        <Slider minimumValue={0} maximumValue={100} value={valor} onValueChange={ (item) => setValor(item) }
                minimumTrackTintColor='#000FFF' thumbTintColor='#FF0000'>

        </Slider>
        <Text> Valor: {valor.toFixed(0)} </Text>

      </View>
    )
}


const estilos = StyleSheet.create({
  container :{
    flex: 1,
    marginTop: 60
  },
  



})

