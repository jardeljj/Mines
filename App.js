import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import params from './src/Params';
import Field from './src/components/Field';

export default class App extends Component {
  render() {
    return (
      <View style={styles.sectionContainer}>
        <Text >Iniciando o Mines!!</Text>
        <Text >Tamanho da Grade:
          {params.getRowsAmount()}X{params.getColumnsAmount()}
        </Text>
        <Field />
        <Field opened></Field>
        <Field opened nearMines={1} />
        <Field opened nearMines={2} />
        <Field opened nearMines={3} />
        <Field opened nearMines={6} />
        <Field mined />
        <Field mined opened />
        <Field mined opened exploded />
        <Field flagged/>
        <Field flagged opened/>
      </View>
    )
  }
}



const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  }
});


