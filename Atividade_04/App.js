import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Menu from './src/Menu';

export default function App() {
  return <Menu> </Menu>
}

//Copiado Aula 02 Slide 23
const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",
        backgroundColor: "#e5e5e5"
    },
    headerText:{
        fontSize:40,
        fontWeight:"bold",
        margin: 10,
        textAlign: "center"
    },
    Text:{
        fontSize:25,
        margin:10,
        fontWeight:"bold"
    },
    textInput: {
        height: 45,
        width: "95%",
        borderColor: "gray",
        borderWidth: 2,
        paddingLeft: 20,
        margin:15,
        fontSize:20
     },
    viewButton: {
        width: "93%",
        margin: 15,
        backgroundColor: "red"
    }
})