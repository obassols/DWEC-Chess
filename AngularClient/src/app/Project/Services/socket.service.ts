import { Injectable } from '@angular/core';
import { Socket } from 'ngx-socket-io';
import { Game } from '../Models/Game';

@Injectable({
  providedIn: 'root'
})
export class SocketService {

  game = this.socket.fromEvent<Game>('game');

  constructor(private socket: Socket) {}

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
