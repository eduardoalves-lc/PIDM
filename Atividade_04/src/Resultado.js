import React, {Component} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';
import IMCCalc from './IMCCalc';

export default class Resultado extends Component{
    render(){
        return (
            <View style = {styles.container}>
                <Text style = {styles.headerText}> Resultado: </Text>
                <IMCCalc
                    altura = {this.props.navigation.getParam("altura","0")}
                    peso = {this.props.navigation.getParam("peso","0")}
                />
                <View style={styles.viewButton}>
                    <Button title = "Sair" onPress={()=>this.props.navigation.goBack()} />
                </View>
            </View>
        );
    }
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
        paddingLeft: 20
     },
    viewButton: {
        width: "93%",
        margin: 15,
        backgroundColor: "red"
    }
})