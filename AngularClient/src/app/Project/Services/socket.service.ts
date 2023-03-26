import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Board } from '../Models/Board';
import { Game } from '../Models/Game';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  game?: Game;
  boards?: Board[] = this.game?.boards;

  constructor(private socket: Socket) {
    this.socket.on('game', (game: Game) => {
      this.game = game;
    });
  }

  addTeam(team: any): void {
    this.socket.emit('addTeam', team);
  }

  play(): void {
    this.socket.emit('play');
  }

  move(move: any): void {
    this.socket.emit('move', move);
  }
}
