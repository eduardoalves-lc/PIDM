import React, { Component } from "react";
import { Text, View } from "react-native"

export default class Cidade extends Component {
  render() {
    const { nome } = this.props;
    return (
      <View><Text>{ nome }: {this.props.votos}</Text></View>
    );
  }
}

export const fortaleza = {
  id: 1,
  nome: 'Fortaleza',
  votos:0
}

export const quixada = {
  id: 2,
  nome: 'Quixada',
  votos: 0
}

export const limoeiro = {
  id: 3,
  nome: 'Limoeiro',
  votos:0
}

export const juazeiro = {
  id: 4,
  nome: 'Juazeiro',
  votos:0
}