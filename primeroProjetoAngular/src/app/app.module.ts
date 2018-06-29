import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { testeComponent } from './TesteComponent/teste.component';
import { PessoaComponent } from './Pessoa/Cadastro/PessoaCadastro';

@NgModule({
  declarations: [
    AppComponent,
    testeComponent, 
    PessoaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
