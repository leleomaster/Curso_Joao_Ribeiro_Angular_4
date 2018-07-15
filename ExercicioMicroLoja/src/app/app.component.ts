import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  ehParaExibirLoja: boolean = true;
  ehParaExibirStock: boolean = false;

  ExibirLoja(){
    this.ehParaExibirStock = false;
    this.ehParaExibirLoja = true; 
  }

  ExibirStock(){
    this.ehParaExibirStock = true;
    this.ehParaExibirLoja = false;
  }
}
