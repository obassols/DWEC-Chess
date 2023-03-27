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

  game: Observable<Game> = this.socket.fromEvent('game');
  player: Observable<Player> = this.socket.fromEvent('player');

  constructor(private socket: Socket) {
  }

  addTeam(team: Team): void {
    console.log(team);
    this.socket.emit('addTeam', team);
  }

  play(): void {
    this.socket.emit('play');
    console.log('play');
  }

  move(move: any): void {
    this.socket.emit('move', move);
  }
}
