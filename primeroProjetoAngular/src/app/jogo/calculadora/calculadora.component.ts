import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent {

  @Output() resposta_final = new EventEmitter();

  valor1: number = 0;
  valor2: number = 0;
  resultado: number = 0;

  str_operacao: string = "";
  valor_inserido: number;

  CriarNovaOperacao() {
    this.valor1 = Math.floor(Math.random() * 10);
    this.valor2 = Math.floor(Math.random() * 10);

    this.resultado = this.valor1 + this.valor2;

    this.str_operacao = `${this.valor1} + ${this.valor2} `;

  }

  DefinirResultado(evento: Event) {
    this.valor_inserido = evento.target.value;
  }

  AvaliarResultadoInserido() {
    if (this.resultado == this.valor_inserido) {
      this.resposta_final.emit(true); //
    } else {
      this.resposta_final.emit(false); // 
    }

    this.CriarNovaOperacao();
  }

  constructor() {
    this.CriarNovaOperacao();
  }

}
