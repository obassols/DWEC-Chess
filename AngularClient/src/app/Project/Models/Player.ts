import { Team } from './Team';

export class Player {
  // Do the variables for a chess player
  name?: string;
  color?: string;
  connected?: string;

  constructor(name: string, team?: Team) {
    this.name = name;
  }
}
