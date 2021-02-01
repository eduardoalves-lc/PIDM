import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default class Cadastro extends Component {

    constructor(props) {
        super(props);
        this.state = { nome: null, idade: null, email: null };
    }

    static navigationOptions = { title: "Cadastro" };

    render() {
        return (
            <View style={style.container}>
                <Text style={style.headerText}> CADASTRO </Text>
                <TextInput style={style.textInput} placeholder = " Digite seu nome! " onChangeText={(nome) => this.setState({ nome })} />
                <TextInput style={style.textInput} placeholder = " Digite sua idade! " onChangeText={(idade) => this.setState({ idade })}/>
                <TextInput style={style.TextInput} placeholder = " Digite seu e-mail! " onChangeText={(email) => this.setState({ email })}/>
                <View style={style.viewButton}>
                    <Button title="Confirmar" onPress={() => this.props.navigation.navigate("Perfil", { nome: this.state.nome, idade: this.state.idade, email: this.state.email})}/>
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