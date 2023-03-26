import { Component, OnInit } from '@angular/core';
import { Game } from '../../Models/Game';
import { SocketService } from '../../Services/socket.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  game?: Game = this.socket.game;

  constructor(private socket: SocketService) {}

  ngOnInit(): void {
  }

}
