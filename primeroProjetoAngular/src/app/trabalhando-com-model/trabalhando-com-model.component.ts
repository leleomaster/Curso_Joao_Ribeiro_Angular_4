import { Component } from '@angular/core';
import { cl_operacao } from './Operacao.model'

@Component({
  selector: 'app-trabalhando-com-model',
  templateUrl: './trabalhando-com-model.component.html',
  styleUrls: ['./trabalhando-com-model.component.css']
})
export class TrabalhandoComModelComponent {

  operacao: cl_operacao;

  constructor(){
    this.operacao = new cl_operacao();
  }

  CriarOpracao() {
    this.operacao = new cl_operacao();


  }

}
