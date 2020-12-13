import React, { Component } from 'react'
import { Button, Text, View } from 'react-native';

export default class urna extends Component {

    constructor(props){
        super(props)
        this.state = {fortaleza:0}
    }

    render(){
        return(
            <View>
                <h1>Fortaleza: {this.state.fortaleza} </h1>

                <Button 
                    title='Fortaleza'
                    onPress={
                      ()=>{
                          this.setState({fortaleza:this.state.fortaleza + 1})
                      }  
                    }
                />
                </View>
        )

    }

}