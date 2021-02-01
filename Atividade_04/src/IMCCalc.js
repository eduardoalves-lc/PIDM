import React, {Component} from 'react';
import {View,Text,StyleSheet} from 'react-native';

import Mensagens from './IMCMsg';

export default class IMCCalc extends Component{
    render(){
        if(this.props.altura == null || this.props.peso == null || !this.props.calcular) return null;
        let imc = this.props.peso / (this.props.altura * this.props.altura);
        
        return (
            <View>
                <Text style={{fontWeight:"bold",fontSize:16}}> IMC : {imc} </Text>
                <Mensagens imc={imc}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#e5e5e5"
     }})