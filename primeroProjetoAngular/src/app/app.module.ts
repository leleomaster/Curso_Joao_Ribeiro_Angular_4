import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { testeComponent } from './TesteComponent/teste.component';
import { PessoaComponent } from './Pessoa/Cadastro/PessoaCadastro';

import { Area1Component } from "./Areas/Area1/area1";
import { Area2Component } from "./Areas/Area2/area2";
import { SocioComponent } from './Criar_Components_com_CLI/socio/socio.component';
import { Socio2Component } from './Criar_Components_com_CLI/socio2/socio.component';
import { ClubeComponent } from './Criar_Components_com_CLI/clube/clube.component';
import { InterpolationComponent } from './Databinding/interpolation/interpolation.component';
import { DataBindPropertyComponent } from './data-bind-property/data-bind-property.component';
import { DataBindingExercicioComponent } from './data-binding-exercicio/data-binding-exercicio.component';
import { DataBindingEventComponent } from './data-binding-event/data-binding-event.component';
import { FormsModule } from '@angular/forms';
import { IntroducaoDirectivesComponent } from './introducao-directives/introducao-directives.component';
import { DirectivesNgStyleComponent } from './directives-ng-style/directives-ng-style.component';

@NgModule({
  declarations: [
    AppComponent,
    testeComponent, 
    PessoaComponent,
    Area1Component,
    Area2Component,
    SocioComponent,
    ClubeComponent,
    Socio2Component,
    InterpolationComponent,
    DataBindPropertyComponent,
    DataBindingExercicioComponent,
    DataBindingEventComponent,
    IntroducaoDirectivesComponent,
    DirectivesNgStyleComponent    
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
