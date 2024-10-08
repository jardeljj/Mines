import React, { Component } from 'react';
import { StyleSheet, Text, View, SafeAreaView, Alert } from 'react-native';
import params from './src/Params';
import MineField from './src/components/MineField';
import { creatMinedBoard, cloneBoard, openField, hadExplosion, wonGame, showMines, invertflag } from './src/functions';

export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = this.createState()
  }

  minesAmount = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return Math.ceil(cols * rows * params.difficultLevel)
  }

  createState = () => {
    const cols = params.getColumnsAmount()
    const rows = params.getRowsAmount()
    return {
      board: creatMinedBoard(rows, cols, this.minesAmount()),
      won: false,
      lost: false
    }
  }

  onOpenField = (row, column) => {
    const board = cloneBoard(this.state.board)
    openField(board, row, column)
    const lost = hadExplosion(board)
    const won = wonGame(board)

    if (lost) {
      showMines(board)
      //Alert.alert("perdeu pra krl cabaço")
      Alert.alert(
        "Perdeu pra krl cabaço",
        "Você perdeu! sem choro se quiser mais detalhes clica em detalhes sou noob.",
        [
          {
            text: "detalhes sou noob",
            onPress: () => {
              Alert.alert("Cabaço", "Cabaço é uma gíria que significa 'inexperiente' ou burro alem do normal, mas tenta dnv ai :)");
            }
          },
          {
            text: "OK",
            style: "cancel"
          }
        ]
      );
    }

    if (won) {
      Alert.alert("Ta liberado ser feliz")
    }
    this.setState({ board, lost, won })
  }

  onSelectField = (row, column) => {
    const board = cloneBoard(this.state.board)
    invertflag(board, row, column)
    const won = wonGame(board)

    if (won) {
      Alert.alert("Ta liberado ser feliz")
    }

    this.setState({ board, won })

  }


  render() {
    return (
      <SafeAreaView style={styles.container}>
        <Text >Iniciando o Mines!!</Text>
        <Text >Tamanho da Grade:
          {params.getRowsAmount()}X{params.getColumnsAmount()}</Text>
        <View style={styles.board}>
          <MineField board={this.state.board}
            onOpenField={this.onOpenField} 
            onSelectField={this.onSelectField}/>
        </View>
      </SafeAreaView>
    )
  }
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  board: {
    alignItems: 'center',
    backgroundColor: '#AAA'
  }
});


