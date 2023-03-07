export class Piece {
  // Do the variables for a chess piece
  public name: string;
  public color: string;
  public position: string;
  public image: string;

  constructor(name: string, color: string, position: string) {
    this.name = name;
    this.color = color;
    this.position = position;
    this.image = this.name + this.color + '.png';
  }

}


// ELS EQUIPS S HAN DE GESTIONAR DESDE EL SERVIDOR
