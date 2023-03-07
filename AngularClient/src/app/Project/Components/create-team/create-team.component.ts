import { Component, OnInit } from '@angular/core';
import { Player } from '../../Models/Player';
import { Team } from '../../Models/Team';

@Component({
  selector: 'app-create-team',
  templateUrl: './create-team.component.html',
  styleUrls: ['./create-team.component.scss']
})
export class CreateTeamComponent implements OnInit {

  teams: Team[] = new Array();
  teamName = '';
  player1Name = '';
  player2Name = '';
  constructor() { }

  ngOnInit(): void {
  }

  createTeam(): void {
    const player1 = new Player(this.player1Name);
    const player2 = new Player(this.player2Name);

    const team = new Team(this.teamName, [player1, player2]);
    player1.team = team;
    player2.team = team;

    this.teams.push(team);
  }
}
