import { Component } from '@angular/core';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent {

  constructor() { }

  ananase: number = 0;
  banana: number = 0;
  laranja: number = 0;
  totalProdutos: number = 0;

  AdicionarAnanase() {
    this.ananase++;
    this.SomaTotalProdutos();
  }

  RemoverAnanase() {
    this.ananase = this.Remover(this.ananase);
    this.SomaTotalProdutos();
  }

  AdicionarBanana() {

    this.banana++
    this.SomaTotalProdutos();
  }

  RemoverBanana() {
    this.banana = this.Remover(this.banana);
    this.SomaTotalProdutos();
  }

  AdicionarLaranja() {
    this.laranja++
    this.SomaTotalProdutos();
  }

  RemoverLaranja() {
    this.laranja = this.Remover(this.laranja);
    this.SomaTotalProdutos();
  }

  Remover(valor) {
    if (valor >= 1) {
      valor--;      
    }

    return valor;
  }

  SomaTotalProdutos() {
    this.totalProdutos = this.ananase + this.banana + this.laranja;
  }
}
