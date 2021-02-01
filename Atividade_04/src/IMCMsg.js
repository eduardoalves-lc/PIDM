import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default class IMCMsg extends Component{

    render(){
        if (this.props.imc < 17) {
            return (<Text style={
                {fontWeight:"bold", fontSize:16, color:"red"}
            }> Muito abaixo do peso! </Text>);
        } 
        if (this.props.imc < 18.49) {
            return (<Text style={
                {fontWeight:"bold", fontSize:16, color:"red"}
            }> Abaixo do peso! </Text>);
        }
        if (this.props.imc < 24.99) {
            return (<Text style={
                {fontWeight:"bold", fontSize:16, color:"blue"}
            }> Peso normal </Text>);
        }
        if (this.props.imc < 29.99) {
            return (<Text style={
                {fontWeight:"bold", fontSize:16, color:"red"}
            }> Acima do peso! </Text>);
        }
        if (this.props.imc < 34.99) {
            return (<Text style={
                {fontWeight:"bold", fontSize:16, color:"red"}
            }> Obesidade I! </Text>);
        }
        if (this.props.imc < 39.99) {
            return (<Text style={
                {fontWeight:"bold", fontSize:16, color:"red"}
            }> Obesidade II (Servera)! </Text>);
        }
        return (<Text style={
            {fontWeight:"bold", fontSize:16, color:"red"}
        }> Obesidade III (Mórbida)! </Text>);
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5"
     },
    text:{
        fontWeight:"bold",
        fontSize:16
    }})