import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ciclo-vida-component',
  templateUrl: './ciclo-vida-component.component.html',
  styleUrls: ['./ciclo-vida-component.component.css']
})
export class CicloVidaComponentComponent implements OnInit {

  listaVicloVidaPagina : string[] = new Array<string>("Test 1", "Teste 2");

  textoDoChecked : string;

  ListaVicloVidaPagina(){
    return this.listaVicloVidaPagina;
  }

  constructor() { 
   // this. listaVicloVidaPagina = new Array<string>();
    this.listaVicloVidaPagina.push("Passou por constructor <br>");
  }// executa primpeiro

  executarClick(){
    this.textoDoChecked = "Clicou";
  }

  ngOnInit() {     
    this.listaVicloVidaPagina.push("Passou por ngOnInit<br>");
  }

  ngOnChanges() {    
    this.listaVicloVidaPagina.push("Passou por ngOnChanges<br>");
   }
  ngDoCheck() {     
    this.listaVicloVidaPagina.push("Passou por ngDoCheck<br>");
   }
  ngAfterContentinit() {      
    this.listaVicloVidaPagina.push("Passou por ngAfterContentinit<br>");
  }
  ngAfterContentChecked() {     
    this.listaVicloVidaPagina.push("Passou por ngAfterContentChecked<br>");
   }
  ngAfterViewInit() {     
    this.listaVicloVidaPagina.push("Passou por ngAfterViewInit<br>");
   }
  ngAfterViewChecked() {     
    this.listaVicloVidaPagina.push("Passou por ngAfterViewChecked<br>");
   }
  ngOnDestroy() {     
    this.listaVicloVidaPagina.push("Passou por ngOnDestroy<br>");
  }
  /*
    ngOnInit              => Executa quando o componente é instânciado
    ngOnChanges           => Executa quando uma diretiva @Input altera uma propriedade.
    ngDoCheck             => Executa sempre que existe alguma alteração no componente.
    ngAfterContentinit    => Executa depois da utilização do ng-content dentro do template.
    ngAfterContentChecked => Executa smpre que existe uma alteracão de conteúdo do ng-content.
    ngAfterViewInit       => Executa depois da iniciação de @ChildView.
    ngAfterViewChecked    => Executa sempre que acontece uma alteração via @ChildView.
    ngOnDestroy           => Executa quando o componente vai ser destruído.         
  */

}
