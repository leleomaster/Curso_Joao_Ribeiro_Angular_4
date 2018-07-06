import { Component } from '@angular/core';

@Component({
  selector: 'app-interpolation',
  templateUrl: './interpolation.component.html',
  styleUrls: ['./interpolation.component.css']
})
export class InterpolationComponent {
  nome: string;
  apelido: string;
  idade: number;

  constructor() {
    this.nome = "Leonardo";
    this.apelido = " Campos"
    this.idade = 33
  }

  nomeCompleto(): string {
    return `<strong> ${this.nome} ${this.apelido} </strong>`;
  }
}
