import { Board } from './Board';
import { Team } from './Team';

export class Game {
  teams = new Array<Team>();
  boards = new Array<Board>();
  playing?: boolean;

  constructor(team1: Team, team2: Team) {
    this.teams = [team1, team2];

    this.boards.push(new Board(1, this.teams[0].players[0], this.teams[1].players[0]));
    this.boards.push(new Board(2, this.teams[0].players[1], this.teams[1].players[1]));

    this.playing = false;
  }
}
