export class Piece {
  // Do the variables for a chess piece
  public name: string;
  public color: string;
  public image: string;

  constructor(name: string, color: string) {
    this.name = name;
    this.color = color;
    this.image = this.name + this.color + '.png';
  }

}


// ELS EQUIPS S HAN DE GESTIONAR DESDE EL SERVIDOR
