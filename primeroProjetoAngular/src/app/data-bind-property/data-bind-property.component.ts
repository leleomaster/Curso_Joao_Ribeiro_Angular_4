import { Component } from '@angular/core';

@Component({
  selector: 'app-data-bind-property',
  templateUrl: './data-bind-property.component.html',
  styleUrls: ['./data-bind-property.component.css']
})
export class DataBindPropertyComponent {

  inativo: boolean = true;

  texto: string = "texto placeholde"

  constructor() {
    //this.ColocarAtivoBotao();
  }

  ColocarAtivoBotao() {
    setTimeout(() => {
      this.inativo = false;
      this.texto = "Texto foi alterado"
    }, 3000);
  }

  MudarTexto(_inativo, _texto) {
    this.texto = _texto;
    this.inativo = _inativo;
  }


}
