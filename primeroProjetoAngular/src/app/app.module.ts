import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { testeComponent } from './TesteComponent/teste.component';
import { PessoaComponent } from './Pessoa/Cadastro/PessoaCadastro';

import { Area1Component } from "./Areas/Area1/area1";
import { Area2Component } from "./Areas/Area2/area2";

@NgModule({
  declarations: [
    AppComponent,
    testeComponent, 
    PessoaComponent,
    Area1Component,
    Area2Component
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
