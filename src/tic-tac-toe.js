class TicTacToe {
  constructor() {
    this.playingField = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.playerMove = "x";
  }

  getCurrentPlayerSymbol() {
    return this.playerMove;
  }

  nextTurn(rowIndex, columnIndex) {
    if (
      this.playingField[rowIndex][columnIndex] === null &&
      this.playerMove === "x"
    ) {
      this.playingField[rowIndex][columnIndex] = this.playerMove;
      this.playerMove = "o";
    } else if (
      this.playingField[rowIndex][columnIndex] === null &&
      this.playerMove === "o"
    ) {
      this.playingField[rowIndex][columnIndex] = this.playerMove;
      this.playerMove = "x";
    }
  }

  isFinished() {
    if (this.getWinner() || this.isDraw()) {
      return true;
    }
    return false;
  }

  getWinner() {
    if (
      (this.playingField[0][0] === "x" && this.playingField[0][1] === "x" && this.playingField[0][2] === "x")||
      (this.playingField[1][0] === "x" && this.playingField[1][1] === "x" && this.playingField[1][2] === "x") ||
      (this.playingField[2][0] === "x" && this.playingField[2][1] === "x" && this.playingField[2][2] === "x") ||
      (this.playingField[0][0] === "x" && this.playingField[1][0] === "x" && this.playingField[2][0] === "x") ||
      (this.playingField[0][1] === "x" && this.playingField[1][1] === "x" && this.playingField[2][1] === "x") ||
      (this.playingField[0][2] === "x" && this.playingField[1][2] === "x" && this.playingField[2][2] === "x") ||
      (this.playingField[0][0] === "x" && this.playingField[1][1] === "x" && this.playingField[2][2] === "x") ||
      (this.playingField[0][2] === "x" && this.playingField[1][1] === "x" && this.playingField[2][0] === "x")) {
      return "x";
    } if (
      (this.playingField[0][0] === "o" && this.playingField[0][1] === "o" && this.playingField[0][2] === "o") ||
      (this.playingField[1][0] === "o" && this.playingField[1][1] === "o" && this.playingField[1][2] === "o") ||
      (this.playingField[2][0] === "o" && this.playingField[2][1] === "o" && this.playingField[2][2] === "o") ||
      (this.playingField[0][0] === "o" && this.playingField[1][0] === "o" && this.playingField[2][0] === "o") ||
      (this.playingField[0][1] === "o" && this.playingField[1][1] === "o" && this.playingField[2][1] === "o") ||
      (this.playingField[0][2] === "o" && this.playingField[1][2] === "o" && this.playingField[2][2] === "o") ||
      (this.playingField[0][0] === "o" && this.playingField[1][1] === "o" && this.playingField[2][2] === "o") ||
      (this.playingField[0][2] === "o" && this.playingField[1][1] === "o" && this.playingField[2][0] === "o")) {
      return "o";
    }
      return null;
  }

  noMoreTurns() {
    let result = true;
    this.playingField.forEach(elements =>
      elements.forEach(item => {
        if (item === null) result = false;
      })
    );
    return result;
  }

  isDraw() {
    if (this.noMoreTurns() && !this.getWinner()) {
      return true;
    }
    return false;
  }

  getFieldValue(rowIndex, colIndex) {
    return this.playingField[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;
