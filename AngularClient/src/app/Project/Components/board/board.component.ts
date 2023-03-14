import { Component, OnInit } from '@angular/core';
import { Board } from '../../Models/Board';
import { Piece } from '../../Models/Piece';
import { Player } from '../../Models/Player';
import { Team } from '../../Models/Team';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Cell } from '../../Models/Cell';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board!: Board;
  whiteDeadPieces: Array<Piece> = [];
  blackDeadPieces: Array<Piece> = [];

  constructor() {
    const team1 = new Team('team1');
    const team2 = new Team('team2');
    this.board = new Board(1, new Player('jugador1', team1), new Player('jugador2', team2));
    this.board.setPiecesPositions();
  }

  ngOnInit(): void {
  }

  isCell(cell: Cell | string): boolean {
    return cell instanceof Cell;
  }

  getCell(cell: Cell | string): Cell {
    return cell as Cell;
  }

  drop(event: any): void {
    console.log(event);
    const prev: Cell  = event.previousContainer.data;
    const curr: Cell = event.container.data;
    if (event.previousContainer === event.container) {
      console.log('Same container');
    } else {
      console.log('Moving piece');
      if (curr.hasPiece) {
        console.log('Cell has piece');
        if (curr.piece?.color === prev.piece?.color) {
          console.log('Same color');
          return;
        } else {
          console.log('Different color');
          if (curr.piece?.color === 'White') {
            console.log('Killing White Piece');

            this.whiteDeadPieces.push(curr.piece as Piece);
            console.log(this.whiteDeadPieces);
          } else if (curr.piece?.color === 'Black') {
            console.log('Killing Black Piece');

            this.blackDeadPieces.push(curr.piece as Piece);
            console.log(this.blackDeadPieces);
          }
          console.log(curr);
          curr.setPiece(prev.piece as Piece);
          prev.removePiece();
        }
      }
      curr.setPiece(prev.piece as Piece);
      prev.removePiece();
    }
  }

}
