import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Observable } from 'rxjs';
import { Game } from '../Models/Game';
import { Player } from '../Models/Player';
import { Team } from '../Models/Team';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  gameObservable: Observable<Game> = this.socket.fromEvent('game');
  playerObservable: Observable<Player> = this.socket.fromEvent('player');
  game: Game = new Game(new Team('team1'), new Team('team2'));
  player?: Player;

  constructor(private socket: Socket) {
    this.gameObservable.subscribe(game => {
      this.game = game;
    });
    this.playerObservable.subscribe(player => {
      this.player = player;
    });
  }

  addTeam(team: Team): void {
    console.log(team);
    this.socket.emit('addTeam', team);
  }

  play(): void {
    this.socket.emit('play');
    console.log('play');
  }

  move(prev: any, curr: any): void {
    const move = {
      gameId: this.game?.id,
      boardId: this.game?.boards[0].id,
      playerId: this.player?.name,
      from: prev,
      to: curr
    };
    this.socket.emit('move', move);
  }
}
