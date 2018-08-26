import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-diretivas-atributos',
  templateUrl: './diretivas-atributos.component.html',
  styleUrls: ['./diretivas-atributos.component.css']
})
export class DiretivasAtributosComponent implements OnInit {

  nomes: string[] = ["campos", "leonardo", "junior"]

  ver: boolean = true;
  vercss: boolean = false;

  constructor() { }


  ngOnInit() {
  }

}
