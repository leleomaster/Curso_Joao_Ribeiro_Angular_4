import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'primeiro';
 
  // Utlizado no aprendizado: utilizando a diretiva ng-content
  texto: string = "Mollit ea tempor et laborum enim ipsum veniam excepteur.";
}
