import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/Params';
import Field from './src/components/Field';

export default class App extends Component {
    render(){
        return (
            <View>
                <Text style={styles.sectionTitle}>Iniciando o Mines!!</Text>
                <Text style={styles.sectionTitle}>Tamanho da Grade:
                    {params.getRowsAmount()}X{params.getColumnsAmount()}
                </Text>
                <Field/>
            </View>
        )
    }
}



const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
});


