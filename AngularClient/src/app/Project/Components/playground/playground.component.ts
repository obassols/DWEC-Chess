import { Component, OnInit } from '@angular/core';
import { SocketService } from '../../Services/socket.service';

@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {

  game: any;
  constructor(private socket: SocketService) {
    this.socket.game.subscribe((game) => {
      this.game = game;
    });
  }

  ngOnInit(): void {
  }

}
