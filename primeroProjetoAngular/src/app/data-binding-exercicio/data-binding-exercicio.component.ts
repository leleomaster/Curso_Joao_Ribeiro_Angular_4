import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-exercicio',
  templateUrl: './data-binding-exercicio.component.html',
  styleUrls: ['./data-binding-exercicio.component.css']
})
export class DataBindingExercicioComponent {

  texto1: string = "Ativa e inativa os outros comandos";
  texto2: string = "Altera o texto dos comandos para '...'";
  texto3: string = "Coloca o texto original nos comandos";

  textoComando1: string = "";
  textoComando2: string = "";
  textoComando3: string = "";

  inativo: boolean = true;

  constructor() {
    this.ColocaTextoOriginalComandos();
   }

  AtivaInativaOutrosComandos() {
    if (this.inativo) {
      this.inativo = false;
    } else {
      this.inativo = true;
    }
  }

  AlteraTextoComandos() {
    this.textoComando1 = "...";
    this.textoComando2 = "...";
    this.textoComando3 = "...";
  }

  ColocaTextoOriginalComandos() {
    this.textoComando1 = "Comando 1";
    this.textoComando2 = "Comando 2";
    this.textoComando3 = "Comando 3";
  }
}
