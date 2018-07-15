import { Component } from '@angular/core';

@Component({
  selector: 'app-loja',
  templateUrl: './loja.component.html',
  styleUrls: ['./loja.component.css']
})
export class LojaComponent {

  constructor() { }
  produtos = [];

  AdicionarProdutos(produto) {
    if (produto === "A") {
      this.produtos.push(
        {
          'nome': 'Ananas',
          'imagem': 'ico_ananas.png'
        }
      );
    } else if (produto === "B") {
      this.produtos.push(
        {
          'nome': 'Banana',
          'imagem': 'ico_banana.png'
        }
      );
    } else if (produto === "L") {
      this.produtos.push(
        {
          'nome': 'Laranja',
          'imagem': 'ico_laranja.png'
        }
      );
    }
  }
}
