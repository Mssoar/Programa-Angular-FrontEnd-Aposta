import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlterarClubeComponent } from './alterar-clube/alterar-clube.component';
import { AlterarJogoComponent } from './alterar-jogo/alterar-jogo.component';
import { IncluirClubeComponent } from './incluir-clube/incluir-clube.component';
import { IncluirJogoComponent } from './incluir-jogo/incluir-jogo.component';
import { ListarJogoComponent } from './listar-jogo/listar-jogo.component';
import { ListarClubeComponent } from './listar-clube/listar-clube.component';
import { ListarClienteComponent } from './listar-cliente/listar-cliente/listar-cliente.component';
import { AlterarClienteComponent } from './alterar-cliente/alterar-cliente.component';
import { IncluirClienteComponent } from './incluir-cliente/incluir-cliente.component';
import { ListarEstadioComponent } from './listar-estadio/listar-estadio.component';
import { AlterarEstadioComponent } from './alterar-estadio/alterar-estadio.component';
import { IncluirEstadioComponent } from './incluir-estadio/incluir-estadio.component';
import { ListarApostaComponent } from './listar-aposta/listar-aposta.component';
import { AlterarApostaComponent } from './alterar-aposta/alterar-aposta.component';
import { IncluirApostaComponent } from './incluir-aposta/incluir-aposta.component';
import { ListarResultadoComponent } from './listar-resultado/listar-resultado.component';
import { IncluirResultadoComponent } from './incluir-resultado/incluir-resultado.component';
import { AlterarResultadoComponent } from './alterar-resultado/alterar-resultado.component';

const routes: Routes = [
  {path:'listarclube', component: ListarClubeComponent},
  {path:'incluirclube', component: IncluirClubeComponent},
  {path:'alterarclube', component: AlterarClubeComponent},
  {path:'alterarclube/:id', component: AlterarClubeComponent},
  {path:'listarjogos', component: ListarJogoComponent},
  {path:'incluirjogo',component:IncluirJogoComponent},
  {path:'alterarjogo/:id',component:AlterarJogoComponent},
  {path:'listarclientes', component: ListarClienteComponent},
  {path:'alterarcliente/:id', component: AlterarClienteComponent},
  {path:'incluircliente', component: IncluirClienteComponent},
  {path:'listarestadios', component: ListarEstadioComponent},
  {path:'alterarestadio/:id', component: AlterarEstadioComponent},
  {path:'incluirestadio', component: IncluirEstadioComponent},
  {path:'listarapostas', component: ListarApostaComponent},
  {path:'alteraraposta/:id', component: AlterarApostaComponent},
  {path:'incluiraposta', component: IncluirApostaComponent},
  {path:'listarresultados',component: ListarResultadoComponent},
  {path:'incluirresultado',component:IncluirResultadoComponent},
  {path:'alterarresultado/:id',component:AlterarResultadoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
