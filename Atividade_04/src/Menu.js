import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Button} from 'react-native';
import { createStackNavigator } from 'react-navigation-stack';
import { NavigationContainer } from '@react-navigation/native';
import { createAppContainer } from '@react-navigation/native';
import Principal from './Principal';
import IMCApp from './IMCApp';
import Cadastro from './Cadastro';
import Perfil from './Perfil';
import Resultado from './Resultado';
import Sobre from './Sobre';

const MainStack = createStackNavigator(
    { Principal, IMCApp, Cadastro, Perfil, Sobre },

    { initialRouteName: 'Principal',
        defaultNavigationOptions: { headerStyle: { backgroundColor: '#e5e5e5', }, headerTintColor: '#fff', headerTitleStyle: { fontWeight: 'bold',}
        }
    }
)

const RootStack = createStackNavigator(
    { Main: MainStack, ResultadoModal: Resultado },
    { mode: 'modal', headerMode: 'none' }
)

const Routes = createAppContainer(RootStack);
export default Routes;

//Copiado Aula 02 Slide 23
const styles = StyleSheet.create({
    Navigation:{
        backgroundColor: '#f4511e',
        fontWeight: 'bold'
    },
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