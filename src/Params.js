import { Dimensions } from "react-native";

const params = {
    blockSize: 30,
    fontSize: 15,
    borderSize: 5,
    headerRatio: 0.15, // Proporção do painel superior na tela
    difficultLevel: 0.1,
    getColumnsAmount() {
        const width = Dimensions.get('window').width
        return Math.floor(width / this.blockSize)
    },
    getRowsAmount() {
        const totalHeight = Dimensions.get('window').height
        const boardHeight = totalHeight * (1 - this.headerRatio)
        return Math.floor(boardHeight / this.blockSize)
    }
}

export default params