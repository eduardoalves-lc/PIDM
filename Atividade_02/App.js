import React, { Component } from 'react';
import {Text, View, StyleSheet} from 'react-native';
import Apuracao from './src/Apuracao';

export default function App(){
  return(
    <View style={styles.container}>
      <Apuracao />
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: '#fa7f72',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#fa7f72',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
