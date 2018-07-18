import { Component } from '@angular/core';

@Component({
  selector: 'app-trabalhando-com-dados-parent-e-child',
  templateUrl: './trabalhando-com-dados-parent-e-child.component.html',
  styleUrls: ['./trabalhando-com-dados-parent-e-child.component.css']
})
export class TrabalhandoComDadosParentEChildComponent {

  novos_socios = [];

  constructor() {
    this.novos_socios.push({ nome: "socio 1", contato: "5646" });
    this.novos_socios.push({ nome: "socio 2", contato: "564568" });
    this.novos_socios.push({ nome: "socio 3", contato: "44565." });
    this.novos_socios.push({ nome: "socio 4", contato: "3883" });
    this.novos_socios.push({ nome: "socio 5", contato: "1220" });
    this.novos_socios.push({ nome: "socio 6", contato: "535367" });
    this.novos_socios.push({ nome: "socio 7", contato: "969663" });
  }



}
