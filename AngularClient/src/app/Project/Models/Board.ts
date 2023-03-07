import { Piece } from './Piece';
import { Player } from './Player';

export class Board {
  id: number;
  // Array 8 x 8 with a piece or null

  positions: Array<Array<Piece | null | string>>;
  player1: Player;
  player2: Player;

  constructor(id: number, player1: Player, player2: Player) {
    this.id = id;
    this.player1 = player1;
    this.player1.color = 'White';
    this.player2 = player2;
    this.player2.color = 'Black';

    // Create a 10x10 matrix
    this.positions = new Array(10);
    for (let i = 0; i < 10; i++) {
      this.positions[i] = new Array(10);
    }
  }

  setPiecesPositions(): void {
    this.setRookPositions();
    this.setKnightPositions();
    this.setBishopPositions();
    this.setKingPositions();
    this.setQueenPositions();
    this.setPawnPositions();

    this.setLettersPositions();
    this.setNumbersPositions();
  }

  private setPawnPositions(): void {
    for (let i = 1; i < 9; i++) {
      this.positions[2][i] = new Piece('pawn', 'Black', '2' + i);
      this.positions[7][i] = new Piece('pawn', 'White', '7' + i);
    }
  }

  private setQueenPositions(): void {
    this.positions[1][4] = new Piece('queen', 'Black', '14');
    this.positions[8][4] = new Piece('queen', 'White', '84');
  }

  private setKingPositions(): void {
    this.positions[1][5] = new Piece('king', 'Black',  '15');
    this.positions[8][5] = new Piece('king', 'White',  '85');
  }

  private setBishopPositions(): void {
    this.positions[1][3] = new Piece('bishop', 'Black', '13');
    this.positions[1][6] = new Piece('bishop', 'Black', '16');
    this.positions[8][3] = new Piece('bishop', 'White', '83');
    this.positions[8][6] = new Piece('bishop', 'White', '86');
  }

  private setKnightPositions(): void {
    this.positions[1][2] = new Piece('knight', 'Black', '12');
    this.positions[1][7] = new Piece('knight', 'Black', '17');
    this.positions[8][2] = new Piece('knight', 'White', '82');
    this.positions[8][7] = new Piece('knight', 'White', '87');
  }

  private setRookPositions(): void {
    let piece = new Piece('rook', 'Black', '11');
    this.positions[1][1] = piece;

    piece = new Piece('rook', 'Black', '18');
    this.positions[1][8] = piece;

    piece = new Piece('rook', 'White', '80');
    this.positions[8][1] = piece;

    piece = new Piece('rook', 'White', '88');
    this.positions[8][8] = piece;
  }

  private setLettersPositions(): void {
    for (let i = 1; i < 9; i++) {
      this.positions[0][i] = String.fromCharCode(65 + i - 1);
      this.positions[9][i] = String.fromCharCode(65 + i - 1);
    }
  }

  private setNumbersPositions(): void {
    for (let i = 1; i < 9; i++) {
      this.positions[i][0] = ( i - 1 ).toString();
      this.positions[i][9] = ( i - 1 ).toString();
    }
  }
}
