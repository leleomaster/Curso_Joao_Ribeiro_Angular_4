import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-jogo',
  templateUrl: './jogo.component.html',
  styleUrls: ['./jogo.component.css']
})
export class JogoComponent implements OnInit {

  resposta: string = "";

  respostas_certas: number = 0;
  respostas_erradas: number = 0;
  estiloAlerta : string = '';
  
  constructor() { }

  AvaliarResposta(valor: any) {
    if (valor === true) {
      this.resposta = "Você acertou :)";
      this.estiloAlerta = "alert alert-success";
      this.respostas_certas++;
    } else {

      this.estiloAlerta = "alert alert-danger";
      this.resposta = "Você errou :(";
      this.respostas_erradas++;
    }
  }

  ngOnInit() {
  }

}
