import { Component, OnInit } from '@angular/core';
import { Estadio } from '../entities/estadio';
import { EstadioService } from '../services/estadio.service';

@Component({
  selector: 'app-listar-estadio',
  templateUrl: './listar-estadio.component.html',
  styleUrls: ['./listar-estadio.component.css']
})
export class ListarEstadioComponent implements OnInit {

  estadios: Estadio[] = [];

  constructor(private servicoEstadio: EstadioService) { }

  ngOnInit(): void {
    this.servicoEstadio.listar().subscribe(
      dados => { this.estadios= dados, console.log(this.estadios) },
      error => { console.log("Erro ao recuperar estadios ", error)}
    )
  }

}
