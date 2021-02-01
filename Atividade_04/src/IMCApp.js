import React, {Component} from 'react';
import {Text, View, Button, TextInput, StyleSheet} from 'react-native';

import Calculo from './IMCCalc'

export default class IMCApp extends Component{

    constructor(props){
        super(props);
        this.state = {altura: null, peso: null, calculo:false}
    }

    acaoRedBotao(){ this.setState(() => { return {calculo:true};});
    }

    render(){
        return(
            <View style={styles.container}><Text style={styles.headerText}> Calculadora IMC </Text>
                <View style={styles.Text}><Text> Peso (kg): </Text>
                    <TextInput style={styles.textInput} 
                    keyboardType = 'numeric' maxLength={6}
                    placeholder="Diite o seu peso" 
                    onChangeText={(peso)=>this.setState({peso, calculo:false})}/>
                </View>

                <View style={styles.Text}><Text> Altura (Metros): </Text>
                    <TextInput style={styles.textInput} 
                    keyboardType = 'numeric' maxLength={4}
                    placeholder="Digite a sua altura"
                    onChangeText={(altura)=>{this.setState({altura,calculo:false});}}/>
                </View>

                <Calculo peso = {this.state.peso} altura = {this.state.altura} calcular = {this.state.calculo}/>

                <View style={styles.viewButton}><Button title = "Calcular IMC"
                        onPress = {()=>this.acaoRedBotao()}
                    />
                </View>
            </View>
        )
    }
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
 Text: {
    fontSize: 20,
    margin:10
},
viewButton: {
    width: "93%",
    margin: 15,
    backgroundColor: "red"
}
})