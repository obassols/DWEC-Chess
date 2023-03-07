import { Piece } from './Piece';
import { Team } from './Team';

export class Player {
  // Do the variables for a chess player
  name: string;
  team?: Team;
  color?: string;
  pieces: Piece[] = new Array(16);
  deadPieces: Piece[] = new Array(16);

  constructor(name: string, team?: Team) {
    this.name = name;
    this.team = team;
  }
}
