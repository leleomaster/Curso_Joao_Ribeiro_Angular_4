import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome: string = "leonarod jr";


  @Output() evento = new EventEmitter<string>();

  AlterarNome() {
    this.nome = "Leo jr";
    this.evento.emit(this.nome);
  }

  constructor() { }

  ngOnInit() {
  }

}
