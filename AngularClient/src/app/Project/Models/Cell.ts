import { Piece } from './Piece';

export class Cell {
  x: number;
  y: number;
  hasPiece: boolean;
  piece: Piece | null;
  label?: string;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.hasPiece = false;
    this.piece = null;
  }

  setPiece(piece: Piece): void {
    this.piece = piece;
    this.hasPiece = true;
  }

  removePiece(): void {
    this.piece = null;
    this.hasPiece = false;
  }
}
