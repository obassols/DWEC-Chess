import { Component, OnInit } from '@angular/core';
import { Game } from '../../Models/Game';
import { Player } from '../../Models/Player';
import { SocketService } from '../../Services/socket.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  game?: Game;
  player?: Player;
  constructor(private socket: SocketService) {}

  ngOnInit(): void {
    this.socket.game.subscribe(game => this.game = game);
    this.socket.player.subscribe(player => this.player = player);
  }

  play(): void {
    this.socket.play();
  }
}
