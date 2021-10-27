import React, { useState } from 'react';
import {View, Text, StyleSheet, Switch, TextInput, TouchableOpacity} from 'react-native';

import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default function App(){  

    const[nome, setNome] = useState('');
    const[idade, setIdade] = useState(0);
    
    const[sexualidade, setSexo] = useState('');
    const[limite, setLimite] = useState(0);
    const [estudante, setEstudante] = useState(false);
    
    const selecionaSexo=[{ id: 0, sexo: 'Indefinido'}, {id: 1, sexo: 'Masculino'}, {id: 3, sexo: 'Feminino'}]
    let selectSexo = selecionaSexo.map( (item, index) => {
      return <Picker.Item key={index} value={index} label ={item.sexo}/>
    })

    const[exibeDados, setExibeDados] = useState(false)
    function Exibe(){      
      return(<View style={estilos.contDados}>
        <Text style={estilos.textoInput}> Nome: {nome}</Text>
        <Text style={estilos.textoInput}> Idade: {idade}</Text>
        <Text style={estilos.textoInput}> Sexo: {selecionaSexo[sexualidade].sexo}</Text>
        <Text style={estilos.textoInput}> Limite: {limite.toFixed(0)}</Text>
        <Text style={estilos.textoInput}> Estudante? {estudante ? 'Sim' : 'Não'}</Text>
      </View>
      )}

    function salvar(){
      setExibeDados(true);  
      if(nome === ''){
        alert('Necessário informar o nome')
        return
      }    
    }
    function apagar(){
      setExibeDados(false);
    }
  

    return(
      <View style={estilos.container}>
        <Text style={estilos.titulo}> Banco Sujeito</Text>
        <Text style={estilos.titulo}> Cadastro </Text>
        <View style={estilos.contInput}>
          <Text style={estilos.textoInput}>Nome: </Text>
          <TextInput style={estilos.input} placeholder={'Entre com seu nome'} onChangeText={ (item) => setNome(item) } />
        </View>
        <View style={estilos.contInput}>
          <Text style={estilos.textoInput}>Idade: </Text>
          <TextInput style={estilos.input} placeholder={'Entre com sua idade'} onChangeText={ (item) => setIdade(item) } />
        </View>
        <Picker style={estilos.inputs} selectedValue={sexualidade} onValueChange={ (itemValue, intemIndex) => setSexo(itemValue)} >
          {selectSexo}
        </Picker>

        <Slider style={estilos.inputs} minimumValue={100} maximumValue={2000} value={limite} onValueChange={ (item) => setLimite(item)}>
        </Slider>
        <Text style={estilos.textoInput}> Limite: R${limite.toFixed(0)}</Text>

        <Switch value={estudante} onValueChange={ (itemValue) => setEstudante(itemValue)}/>
        <Text style={estilos.textoInput}> Estudante com status: { estudante ? 'Ativo' : 'Inativo'}</Text>

        <View style={estilos.contBtn}>
          <TouchableOpacity style={estilos.btn} onPress={salvar}> 
            <Text style={estilos.textoBtn}>Salvar dados</Text>
          </TouchableOpacity>

          <TouchableOpacity style={estilos.btn} onPress={apagar}> 
            <Text style={estilos.textoBtn}>Apagar dados</Text>
          </TouchableOpacity>
        </View>
        <Text> {exibeDados ? <Exibe/> : ''} </Text>
      </View>     
    )
}


const estilos = StyleSheet.create({
  container :{
    flex: 1,
    marginTop: 50,
    backgroundColor: '#fffbbb'
  },
  titulo: {
    fontSize: 25,
    color: '#121212',
    fontWeight:'bold',
    backgroundColor: '#FFAA02',
    textAlign:'center'
  },
  contInput:{
    flexDirection:'row',
    alignItems:'baseline',
    marginVertical: 7,
  
  },
  input:{
    marginHorizontal: 15,
    fontSize: 15,
    borderWidth:1,
    borderRadius: 5,
    padding: 2,
    width: 300,
    paddingLeft: 5
  },
  textoInput:{
    color: '#121212',
    fontSize: 17,
    padding: 5
    
  },
  inputs: {
    marginVertical: 15,
    fontSize: 18,    
  },
  contBtn:{
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginVertical: 15
  },
  btn:{
    backgroundColor: '#FFAA02',
    borderWidth: 1,
    borderRadius: 9,
    height: 40,
    width: 120,
    justifyContent: 'center'
  },
  textoBtn:{
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',    
  },
  contDados:{
    marginVertical: 15
  },
  
})



 