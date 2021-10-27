import React, { useState } from 'react';
import {View, Text, StyleSheet, FlatList, TextInput, TouchableOpacity} from 'react-native';

import Header from './src/Header';
import List from './src/List';

export default function App(){  

    const[feed, setFeed] = useState([{
      id: '1', 
      nome: 'Tais Yuri', 
      descricao: 'Mais um dia de muitos bugs :)', 
      imgperfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbB2GDx9wCq2ivG_CZN9B8buwvZ-IR-obfxoNEWOOAKRuH2zwQylHbmKoQmkRQn2jCxo&usqp=CAU', 
      imgPublicacao: 'https://midias.agazeta.com.br/2021/04/12/produtos-para-gatos-472152-article.png',  
      likeada: true, 
      likers: 1
     },
    {
      id: '2', 
      nome: 'Tais Yuri', 
      descricao: 'Isso sim é ser raiz!!!!!', 
      imgperfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbB2GDx9wCq2ivG_CZN9B8buwvZ-IR-obfxoNEWOOAKRuH2zwQylHbmKoQmkRQn2jCxo&usqp=CAU', 
      imgPublicacao: 'https://i.pinimg.com/736x/c0/4c/85/c04c85eaa19ee8b159165a9c4759554f.jpg', 
      likeada: false, 
      likers: 0
    },
    {
      id: '3', 
      nome: 'Tais Yuri', 
      descricao: 'Boa tarde galera do insta...', 
      imgperfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbB2GDx9wCq2ivG_CZN9B8buwvZ-IR-obfxoNEWOOAKRuH2zwQylHbmKoQmkRQn2jCxo&usqp=CAU', 
      imgPublicacao: 'https://i.pinimg.com/736x/dd/23/8f/dd238f3d7b36b95e62fc67c5d398668b.jpg',  
      likeada: false, 
      likers: 3
    },
    {
      id: '4', 
      nome: 'Tais Yuri', 
      descricao: 'Isso sim que é TI! ', 
      imgperfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbB2GDx9wCq2ivG_CZN9B8buwvZ-IR-obfxoNEWOOAKRuH2zwQylHbmKoQmkRQn2jCxo&usqp=CAU', 
      imgPublicacao: 'https://blog.petiko.com.br/wp-content/uploads/2014/06/gato-usando-computador.jpg', 
      likeada: false, 
      likers: 1
    },
    {
      id: '5', 
      nome: 'Tais Yuri', 
      descricao: 'Bora trabalhar, hoje estou começando em um projeto novo aqui no sujeito, desde o backend ao frontend', 
      imgperfil: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFbB2GDx9wCq2ivG_CZN9B8buwvZ-IR-obfxoNEWOOAKRuH2zwQylHbmKoQmkRQn2jCxo&usqp=CAU', 
      imgPublicacao: 'https://catiororeflexivo.com/wp-content/uploads/2021/01/Gato-con-ropa-2.jpg',
      likeada: false, 
      likers: 32
    }])


   return(
      <View style={estilos.container}>
        <Header />
       
        <FlatList keyExtractor={(item) => item.id} data={feed} renderItem={ ({item}) => <List data={item}/>}/>
      </View>     
    )
}


const estilos = StyleSheet.create({
  container :{
    flex: 1,
    marginTop: 50,
   
  },

})



 