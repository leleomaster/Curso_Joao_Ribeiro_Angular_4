import { Component } from '@angular/core';

@Component({
  selector: 'app-custom-events-binding',
  templateUrl: './custom-events-binding.component.html',
  styleUrls: ['./custom-events-binding.component.css']
})
export class CustomEventsBindingComponent {

  info: string = "Tudo calmo";

  escutar(valor: string) {
    this.info = "O nome foi alterado para: " + valor;

  }

}
