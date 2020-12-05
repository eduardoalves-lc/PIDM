import React, {Component} from 'react';
import {Image} from 'react-native';

export default class Corpo extends Component{
    render(){
        let pic = {uri:'https://www.quixada.ufc.br/wp-content/uploads/2015/01/Foto_curso_ufc_quixad%c3%a1-150x84.jpg'};
        return (
            <Image source={pic} style={{width:120,height:160}}/>
        );
    }
}