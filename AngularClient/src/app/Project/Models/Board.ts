import { Cell } from './Cell';
import { Piece } from './Piece';
import { Player } from './Player';

export class Board {
  id: number;
  // Array 8 x 8 with a piece or null

  cells: Array<Array<Cell>>;
  player1: Player;
  player2: Player;
  whiteDeadPieces: Array<Piece> = [];
  blackDeadPieces: Array<Piece> = [];
  turn: string;

  constructor(id: number, player1: Player, player2: Player) {
    this.id = id;
    this.turn = 'White';
    this.player1 = player1;
    this.player1.color = 'White';
    this.player2 = player2;
    this.player2.color = 'Black';

    // Create a 10x10 matrix
    this.cells = new Array(10);
    for (let i = 0; i < 10; i++) {
      this.cells[i] = new Array<Cell>(10);
      for (let x = 0; x < 10; x++) {
        this.cells[i][x] = new Cell(i, x);
      }
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
      this.cells[2][i].setPiece(new Piece('pawn', 'Black'));
      this.cells[7][i].setPiece(new Piece('pawn', 'White'));
    }
  }

  private setQueenPositions(): void {
    this.cells[1][4].setPiece(new Piece('queen', 'Black'));
    this.cells[8][4].setPiece(new Piece('queen', 'White'));
  }

  private setKingPositions(): void {
    this.cells[1][5].setPiece(new Piece('king', 'Black'));
    this.cells[8][5].setPiece(new Piece('king', 'White'));
  }

  private setBishopPositions(): void {
    this.cells[1][3].setPiece(new Piece('bishop', 'Black'));
    this.cells[1][6].setPiece(new Piece('bishop', 'Black'));
    this.cells[8][3].setPiece(new Piece('bishop', 'White'));
    this.cells[8][6].setPiece(new Piece('bishop', 'White'));
  }

  private setKnightPositions(): void {
    this.cells[1][2].setPiece(new Piece('knight', 'Black'));
    this.cells[1][7].setPiece(new Piece('knight', 'Black'));
    this.cells[8][2].setPiece(new Piece('knight', 'White'));
    this.cells[8][7].setPiece(new Piece('knight', 'White'));
  }

  private setRookPositions(): void {
    let piece = new Piece('rook', 'Black');
    this.cells[1][1].setPiece(piece);
    this.cells[1][8].setPiece(piece);

    piece = new Piece('rook', 'White');
    this.cells[8][1].setPiece(piece);
    this.cells[8][8].setPiece(piece);
  }

  private setLettersPositions(): void {
    this.cells[0][0].label = '*';
    this.cells[9][0].label = '*';
    this.cells[0][9].label = '*';
    this.cells[9][9].label = '*';

    for (let i = 1; i < 9; i++) {
      this.cells[0][i].label = String.fromCharCode(65 + i - 1);
      this.cells[9][i].label = String.fromCharCode(65 + i - 1);
    }
  }

  private setNumbersPositions(): void {
    for (let i = 1; i < 9; i++) {
      this.cells[i][0].label = ( i - 1 ).toString();
      this.cells[i][9].label = ( i - 1 ).toString();
    }
  }
}
