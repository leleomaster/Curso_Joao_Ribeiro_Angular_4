import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-socios',
  templateUrl: './socios.component.html',
  styleUrls: ['./socios.component.css']
})
export class SociosComponent {

  @Input() socios = [];

  @Input("novo_nome_valor") valor: string = "antonio";

  constructor() {

    this.socios.push({ nome: "João", contato: "2354564" });
    this.socios.push({ nome: "Ana", contato: "7779898" });
    this.socios.push({ nome: "Carlos", contato: "56546" });
    this.socios.push({ nome: "Sara", contato: "245669889" });
  }


}
