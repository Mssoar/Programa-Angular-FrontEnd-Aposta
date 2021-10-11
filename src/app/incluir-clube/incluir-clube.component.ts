import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Clube } from '../entities/clube';
import { ClubeService } from '../services/clube.service';

@Component({
  selector: 'app-incluir-clube',
  templateUrl: './incluir-clube.component.html',
  styleUrls: ['./incluir-clube.component.css']
})
export class IncluirClubeComponent implements OnInit {

  clube : Clube = {idClube: 0, nome:'', telefone:'', email:''}

  constructor(private servicoClube: ClubeService) { }

  ngOnInit(): void {
  }

  incluir(frm: NgForm){

    this.servicoClube.incluir(this.clube).subscribe(
      dados => alert("Clube cadastrado com sucesso"), 
      error => alert("Erro ao cadastrar clube"), 

      )
    }

}
