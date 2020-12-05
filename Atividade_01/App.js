import React, {Component} from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Cabecalho from './Cabecalho';
import Corpo from './Corpo';
import Disciplina from './Disciplina';

export default class App extends Component {
  render(){
    return(
      <View>
        <Cabecalho nome=' ALUNO: Eduardo Alves'
                   curso=' CURSO: Engenharia de Software'/>
          <Text> {"\n"} </Text>
        <Corpo />
        <Text> {"\n"} DISCIPLINAS: </Text>
        <Disciplina disciplina=' - PIDM' />
        <Disciplina disciplina=' - PAA' />
        <Disciplina disciplina=' - Arquitetura Software' />
        <Disciplina disciplina=' - Manutenção' />
      </View>
    );
  }
}