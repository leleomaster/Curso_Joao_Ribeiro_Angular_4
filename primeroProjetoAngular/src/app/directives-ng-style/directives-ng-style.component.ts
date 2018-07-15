import { Component } from '@angular/core';

@Component({
  selector: 'app-directives-ng-style',
  templateUrl: './directives-ng-style.component.html',
  styleUrls: ['./directives-ng-style.component.css']
})
export class DirectivesNgStyleComponent {

  valor: boolean = false;
  cor: string = "red";
  status: boolean = true;

  btn_Click() {
    if (this.valor) {
      this.cor = "blue";
      this.valor = false;
    } else {
      this.cor = "green";
      this.valor = true;
    }
  }

  AlterarEstilo() {
    return {
      backgroundColor: 'cyan'
    }
  }

  Altenar() {
    if (this.status) {
      this.status = false;
    } else {
      this.status = true;
    }
  }

  listaNomes: string[];

  GetListaNomes() {
    return ["leleo", "campos", "jose", "junior"];
  }
}
