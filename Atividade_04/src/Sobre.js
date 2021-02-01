import React, {Component} from 'react';
import {View, Text, Image, StyleSheet, Button} from 'react-native';

export default class Sobre extends Component{
    static navigationOptions = {
        title: "Sobre"
    };

    render(){
        return (
            <View style = {styles.container}>
                <Text style = {styles.headerText}> Sobre </Text>
                <Image
                    source = {require('./image.png')}
                    style = {{ width: 200, height: 329 }}
                />
                <View>
                    <Text style = {styles.Text}> Nome: Eduardo </Text>
                    <Text style = {styles.Text}> Idade: 25 </Text>
                    <Text style = {styles.Text}> E-mail: eduardoalves.lc@gmail.com </Text>
                    <Text> </Text>
                </View>
                <View style={styles.viewButton}>
                    <Button title="Principal" onPress={()=>this.props.navigation.navigate("Principal")} />
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