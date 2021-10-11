import { Component, OnInit } from '@angular/core';
import { Resultado } from '../entities/resultado';
import { ResultadoService } from '../services/resultado.service';

@Component({
  selector: 'app-resultado',
  templateUrl: './listar-resultado.component.html',
  styleUrls: ['./listar-resultado.component.css']
})
export class ListarResultadoComponent implements OnInit {

  resultados : Resultado[] = []
  constructor(private servicoResultado : ResultadoService) { }

  ngOnInit(): void {
    this.servicoResultado.listar().subscribe(
      dados => { this.resultados= dados, console.log(this.resultados) },
      error => { console.log("Erro ao recuperar resultados", error)}
    )
  }

}
