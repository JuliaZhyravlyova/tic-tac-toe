class TicTacToe {
    constructor() {
      this.matrix =
      [[null,null,null],
      [null,null,null],
      [null,null,null]];
      this.player = 'x';
    }

    getCurrentPlayerSymbol() {
      return this.player;
    }

    nextTurn(rowIndex, columnIndex) {

      if(this.matrix[rowIndex][columnIndex] == null){

        this.matrix[rowIndex][columnIndex] = this.player;

        if(this.player == 'x' ){

          this.player = 'o'
        }
          else{

         this.player = 'x';
       }
      }
    }

    isFinished() {
      if (this.getWinner() || this.isDraw()){

        return true;

      }
      else{

        return false;

      }
    }

    getWinner() {


      if (this.matrix[0][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][2] )
        return this.matrix[2][2];
      if (this.matrix[0][2] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][0] )
       return this.matrix[2][0];
      if (this.matrix[0][0] == this.matrix[0][1] && this.matrix[0][1] == this.matrix[0][2] )
      return this.matrix[0][2];
      if (this.matrix[1][0] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[1][2] )
       return this.matrix[1][2];
      if (this.matrix[2][0] == this.matrix[2][1] && this.matrix[2][1] == this.matrix[2][2] )
       return this.matrix[2][2];
      if (this.matrix[0][0] == this.matrix[1][0] && this.matrix[1][0] == this.matrix[2][0] )
      return this.matrix[2][0];
      if (this.matrix[0][1] == this.matrix[1][1] && this.matrix[1][1] == this.matrix[2][1] )
       return this.matrix[2][1];
      if (this.matrix[0][2] == this.matrix[1][2] && this.matrix[1][2] == this.matrix[2][2] )
       return this.matrix[2][2];
      return null;
    }

    noMoreTurns() {
      for (var i = 0; i < this.matrix.length; i++) {
        if(this.matrix[i].indexOf(null) != -1){
          return false;
        }
      }
      return true;
    }

    isDraw() {

      if (this.getWinner() == null && this.noMoreTurns()){

       return true;
     }
      else{

       return false;
     }
    }

    getFieldValue(rowIndex, colIndex){

      return this.matrix[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
