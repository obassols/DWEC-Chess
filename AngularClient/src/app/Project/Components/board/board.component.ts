import { Component, OnInit } from '@angular/core';
import { Board } from '../../Models/Board';
import { Piece } from '../../Models/Piece';
import { Player } from '../../Models/Player';
import { Team } from '../../Models/Team';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {

  board!: Board;

  constructor() {
    const team1 = new Team('team1');
    const team2 = new Team('team2');
    this.board = new Board(1, new Player('jugador1', team1), new Player('jugador2', team2));
    this.board.setPiecesPositions();
  }

  ngOnInit(): void {
  }

  isPiece(cell: Piece | string | null): boolean {
    return cell instanceof Piece;
  }

  getCellValue(cell: Piece | string | null): Piece | string | null {
    return cell instanceof Piece ? cell.image : cell;
  }

}
