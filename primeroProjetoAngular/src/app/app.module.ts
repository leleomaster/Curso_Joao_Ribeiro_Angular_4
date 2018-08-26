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
import { TrabalhandoComModelComponent } from './trabalhando-com-model/trabalhando-com-model.component';
import { TrabalhandoComDadosParentEChildComponent } from './trabalhando-com-dados-parent-e-child/trabalhando-com-dados-parent-e-child.component';
import { SociosComponent } from './trabalhando-com-dados-parent-e-child/socios/socios.component';
import { CustomEventsBindingComponent } from './custom-events-binding/custom-events-binding.component';
import { MenuComponent } from './custom-events-binding/menu/menu.component';
import { JogoComponent } from './jogo/jogo.component';
import { CalculadoraComponent } from './jogo/calculadora/calculadora.component';
import { Comp1Component } from './comp1/comp1.component';
import { Comp2Component } from './comp2/comp2.component';
import { AcessoElementoDomViewchildComponent } from './acesso-elemento-dom-viewchild/acesso-elemento-dom-viewchild.component';
import { UtitlizandoDiretivaNgContentComponent } from './utitlizando-diretiva-ng-content/utitlizando-diretiva-ng-content.component';
import { CicloVidaComponentComponent } from './ciclo-vida-component/ciclo-vida-component.component';
import { DiretivasAtributosComponent } from './diretivas-atributos/diretivas-atributos.component';

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
    DirectivesNgStyleComponent,
    TrabalhandoComModelComponent,
    TrabalhandoComDadosParentEChildComponent,
    SociosComponent,
    CustomEventsBindingComponent,
    MenuComponent,
    JogoComponent,
    CalculadoraComponent,
    Comp1Component,
    Comp2Component,
    AcessoElementoDomViewchildComponent,
    UtitlizandoDiretivaNgContentComponent,
    CicloVidaComponentComponent,
    DiretivasAtributosComponent   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
