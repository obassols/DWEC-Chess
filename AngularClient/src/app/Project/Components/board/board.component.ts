import { Component, Input, OnInit } from '@angular/core';
import { Board } from '../../Models/Board';
import { Piece } from '../../Models/Piece';
import { Team } from '../../Models/Team';
import { Cell } from '../../Models/Cell';
import { SocketService } from '../../Services/socket.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  @Input() reverse?: boolean;
  @Input() boardId: number = 0;
  board: Board = this.socket.game.boards[this.boardId];

  constructor(private socket: SocketService) {
    const team1 = new Team('team1');
    const team2 = new Team('team2');
    this.board.setPiecesPositions();
  }

  ngOnInit(): void {
    this.socket.moveObservable.subscribe(move => {
      if (move.boardId === this.board.id) {
        const prev = this.board.cells[move.from.row][move.from.col];
        const curr = this.board.cells[move.to.row][move.to.col];
        this.move(prev, curr);
      }
    });

    if (this.reverse) {
      this.board.cells.reverse();
      this.board.cells[1].reverse();
      this.board.cells[8].reverse();
    }
  }

  drop(event: any): void {
    console.log(event);
    const prev: Cell = event.previousContainer.data;
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
        }
      }
      this.move(prev, curr);
    }
  }

  move(from: any, to: any): void {
    const prev: Cell = from;
    const curr: Cell = to;
    console.log('Moving piece');
    if (curr.hasPiece) {
      console.log('Cell has piece');
      if (curr.piece?.color === 'White') {
        console.log('Killing White Piece');

        this.board.whiteDeadPieces.push(curr.piece as Piece);
        console.log(this.board.whiteDeadPieces);
      } else if (curr.piece?.color === 'Black') {
        console.log('Killing Black Piece');

        this.board.blackDeadPieces.push(curr.piece as Piece);
        console.log(this.board.blackDeadPieces);
      }
    }
    curr.setPiece(prev.piece as Piece);
    prev.removePiece();
  }
}
