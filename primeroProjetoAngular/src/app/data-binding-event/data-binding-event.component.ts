import { Component } from '@angular/core';

@Component({
  selector: 'app-data-binding-event',
  templateUrl: './data-binding-event.component.html',
  styleUrls: ['./data-binding-event.component.css']
})
export class DataBindingEventComponent {

  valor: string;
  valor2: string;
  texto: string;

  constructor() {
    this.valor = "Tetxo normal";
  }

  btn_click(event: any) {

    this.valor = "Novo texto";

    console.log(event);

  }

  teclaPressionada(event: any){

    this.valor = event.target.value;
    console.log(event);
  }

  Executar(event: MouseEvent){
    this.texto = "Clicou: ";

    console.log(event);
  }

  mouseover(event: any){
    this.texto = "MouseOver no botão: "+event.path["0"].textContent;
  }

  mousemove(event: any){
    this.texto = event.screenX +" - " + event.screenY;
  }

  ExecutarText(event: Event){
    this.texto = (<HTMLInputElement>event.target).value;
  }

  text_changed(event: any){
    this.valor2 = event.target.value;
  }

  AlterarTexto(){
    this.valor2 = "Valor alterado :)";
  }
}
