import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarClubeComponent } from './listar-clube/listar-clube.component';
import { IncluirClubeComponent } from './incluir-clube/incluir-clube.component';
import { AlterarClubeComponent } from './alterar-clube/alterar-clube.component';
import { ListarJogoComponent } from './listar-jogo/listar-jogo.component';
import { IncluirJogoComponent } from './incluir-jogo/incluir-jogo.component';
import { AlterarJogoComponent } from './alterar-jogo/alterar-jogo.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente/listar-cliente.component';
import { AlterarClienteComponent } from './alterar-cliente/alterar-cliente.component';
import { IncluirClienteComponent } from './incluir-cliente/incluir-cliente.component';
import { ListarEstadioComponent } from './listar-estadio/listar-estadio.component';
import { IncluirEstadioComponent } from './incluir-estadio/incluir-estadio.component';
import { AlterarEstadioComponent } from './alterar-estadio/alterar-estadio.component';
import { ListarApostaComponent } from './listar-aposta/listar-aposta.component';
import { IncluirApostaComponent } from './incluir-aposta/incluir-aposta.component';
import { AlterarApostaComponent } from './alterar-aposta/alterar-aposta.component';
import { ListarResultadoComponent } from './listar-resultado/listar-resultado.component';
import { IncluirResultadoComponent } from './incluir-resultado/incluir-resultado.component';
import { AlterarResultadoComponent } from './alterar-resultado/alterar-resultado.component';


@NgModule({
  declarations: [
    AppComponent,
    ListarClubeComponent,
    IncluirClubeComponent,
    AlterarClubeComponent,
    ListarJogoComponent,
    IncluirJogoComponent,
    AlterarJogoComponent,
    ListarClienteComponent,
    AlterarClienteComponent,
    IncluirClienteComponent,
    ListarEstadioComponent,
    IncluirEstadioComponent,
    AlterarEstadioComponent,
    ListarApostaComponent,
    IncluirApostaComponent,
    AlterarApostaComponent,
    ListarResultadoComponent,
    IncluirResultadoComponent,
    AlterarResultadoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
