import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-introducao-directives',
  templateUrl: './introducao-directives.component.html',
  styleUrls: ['./introducao-directives.component.css']
})
export class IntroducaoDirectivesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  texto_botaso: string = "Apresentar";
  apresentar: boolean = false;

  btn_Click() {
    if (this.apresentar) {
      this.apresentar = false;
      this.texto_botaso = "Apresentar";
    } else {
      this.apresentar = true;
      this.texto_botaso = "Remover";
    }
  }

  apresentar2: boolean = false;

  btn_Click2(){
    if (this.apresentar2) {
      this.apresentar2 = false;
    } else {
      this.apresentar2 = true;
    }
  }
}
