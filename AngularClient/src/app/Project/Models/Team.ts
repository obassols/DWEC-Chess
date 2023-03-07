import { Player } from './Player';

export class Team {
  public name: string;
  public players: Player[] = new Array(2);

  constructor(name: string, players?: Player[]) {
    this.name = name;
    this.players = players ? players : this.players;
  }
}
