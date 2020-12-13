import React, { Component } from 'react';
import {Text, View, StyleSheet, Button } from 'react-native';
import Cidade, { fortaleza, quixada, limoeiro, juazeiro }  from './Cidades'

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cidades: {fortaleza, quixada, limoeiro, juazeiro},
      vencedores: [fortaleza],
      perdedores: [quixada, limoeiro, juazeiro]
    }
  }

  setVencedor(){
    let cidadeVencedora = this.state.vencedores[0]
    Object.values(this.state.cidades).forEach( cidade => {
      if(!this.state.vencedores.includes(cidade)){
        if(cidade.votos > cidadeVencedora.votos) { let newValue = [cidade]
          this.setState({vencedores: newValue})
          cidadeVencedora = cidade;
        }
        else if(cidade.votos === cidadeVencedora.votos && cidade.id != cidadeVencedora.id) {
          let newValue = [...this.state.vencedores, cidade]
          this.setState({vencedores: newValue})
        }
      }
    })
  }

  setPerdedor() {
    const cidadePerdedora = this.state.perdedores[0]
    let newValue = [...this.state.perdedores]
    Object.values(this.state.cidades).forEach( city => {
      if(!this.state.perdedores.includes(city) && city.votos === cidadePerdedora.votos) newValue.push(city)
    })
    this.setState({perdedores: newValue})
  }

  renderCidade(key, cidade) {
    return (
      <View key={key}>
        <Cidade nome={cidade.nome} votos={this.state.cidades[key].votos} />

        <Button
          title='VOTAR'
          onPress={
            () => {
              let listaVencedores = this.state.vencedores
              let listaPerdedores = this.state.perdedores

              if(this.state.vencedores.includes(cidade)) { let indice = this.state.vencedores.indexOf(cidade)
                listaVencedores.splice(indice, 1, {...cidade, votos: cidade.votos +1})
              }
              if(this.state.perdedores.includes(cidade) && this.state.perdedores.length > 1){
                let indice = this.state.perdedores.indexOf(cidade)
                listaPerdedores.splice(indice, 1)
              }
              
              const newValue = {...this.state.cidades}
              newValue[key].votos += 1

              this.setState({
                cidades: {...newValue}, vencedores: listaVencedores, perdedores: listaPerdedores})

              this.updateVotos()
            }
          }/>
      </View>
    )
  }

  updateVotos(){
    this.setVencedor()
    this.setPerdedor()
  }

  renderNome(nome){
    return (<span key={nome}>{nome}, </span>)
  }

  render() {
    return (
      <View style={styles.container}>
        <Text> VOTAÇÃO </Text><br />{Object.entries(this.state.cidades).map(([key, value]) => this.renderCidade(key, value))}<br />
        <Text>MAIS VOTADAS:</Text><Text> [ {Object.values(this.state.vencedores).map(city => this.renderNome(city.nome))} ]</Text><br />
        <Text>MENOS VOTADAS:</Text><Text> [ {Object.values(this.state.perdedores).map(city => this.renderNome(city.nome))} ] </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fa7f72',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    marginBottom: 100,
    fontWeight: 500
  },
  container: {
    flex: 1,
    backgroundColor: '#fa7f72',
    alignItems: 'center',
    justifyContent: 'center',
  },
});