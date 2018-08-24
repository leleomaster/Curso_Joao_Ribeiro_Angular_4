import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-acesso-elemento-dom-viewchild',
  templateUrl: './acesso-elemento-dom-viewchild.component.html',
  styleUrls: ['./acesso-elemento-dom-viewchild.component.css']
})
export class AcessoElementoDomViewchildComponent implements OnInit {

  valor: string = "mensagem";

  @ViewChild("meuInput") menuElemento: ElementRef;
  @ViewChild("meuParagrafo") meuParagrafo: ElementRef;
  Executar(){
   // console.log(this.meuParagrafo);
   // console.log(this.meuParagrafo.nativeElement);
   console.log(this.meuParagrafo.nativeElement.classname);
    this.valor = this.menuElemento.nativeElement.value;
    this.meuParagrafo.nativeElement.classname = "alert alert-success";
  }

  constructor() { }

  ngOnInit() {
  }

}
