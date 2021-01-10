import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

import IMC from './src/IMCApp';

export default function App() {
  return <IMC />;
}

//Copiado Aula 02 Slide 23
const styles = StyleSheet.create({
 container: {
  flex: 1,
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: "#e5e5e5"
 },
 headerText: {
  fontSize: 20,
  textAlign: "center",
  margin: 10,
  fontWeight: "bold"
 },
 textInput: {
  height: 45,
  width: "95%",
  borderColor: "gray",
  borderWidth: 2,
  paddingLeft: 20
 },
 viewButton: {
  width: "93%",
  margin: 15,
  backgroundColor: "red"
}
});

 
