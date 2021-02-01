import React, {Component} from 'react';
import {View, Text, TextInput, Image, StyleSheet, Button} from 'react-native';

export default class Perfil extends Component{
    
    static navigationOptions = {
        title: "Perfil"
    };

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}> PERFIL </Text>
                <Image source={require('./ufc.png')}
                    style={{ width: 300, height: 133 }}
                />
                <View>
                    <Text style={styles.Text}> Nome: {this.props.navigation.getParam("nome","Digite seu nome")}</Text>
                    <Text style={styles.Text}> Idade: {this.props.navigation.getParam("idade","Digite sua idade")}</Text>
                    <Text style={styles.Text}> E-mail: {this.props.navigation.getParam("email","Digite seu e-mail")}</Text>
                </View>
                <View style={styles.viewButton}>
                    <Button title="Principal" onPress={()=>this.props.navigation.navigate("Principal")}/>
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