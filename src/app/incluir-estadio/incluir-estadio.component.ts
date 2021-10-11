import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Estadio } from '../entities/estadio';
import { EstadioService } from '../services/estadio.service';

@Component({
  selector: 'app-incluir-estadio',
  templateUrl: './incluir-estadio.component.html',
  styleUrls: ['./incluir-estadio.component.css']
})
export class IncluirEstadioComponent implements OnInit {

 estadio: Estadio = {idEstadio: 0, nome:''}

  constructor(private servicoEstadio: EstadioService) { }

  ngOnInit(): void {
  }

  incluir(frm: NgForm){
    this.servicoEstadio.incluir(this.estadio).subscribe(
      dados => alert("Estadio cadastrado com sucesso"), 
      error => alert("Erro ao cadastrar Estadio"), 
      )
    }

}
