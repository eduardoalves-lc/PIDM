import React, {Component} from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

export default class Principal extends Component{

    static navigationOptions = {
        title: "Principal"
    };

    render(){
        return(
            <View style = {styles.container}>
                <Text style = {styles.headerText}> ATIVIDADE 04 </Text>
                <Text> </Text>
                <View style = {styles.viewButton}>
                    <Button title = "Cadastro" onPress={()=>this.props.navigation.navigate("Cadastro")}/>
                </View>
                <View style={styles.viewButton}>
                    <Button title="IMCApp" onPress={()=>this.props.navigation.navigate("IMCApp")}/>
                </View>
                <View style={styles.viewButton}>
                    <Button title="Sobre" onPress={()=>this.props.navigation.navigate("Sobre")}/>
                </View>
            </View>  
        )}
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
