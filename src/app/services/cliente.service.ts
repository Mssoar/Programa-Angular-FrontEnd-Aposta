import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../entities/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  rotaBase: String = "http://localhost:8080/cliente"

  constructor(private http: HttpClient) { }

  listar():Observable<any>{
    return this.http.get<Cliente>(`${this.rotaBase}/listar`)
  }

  incluir(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.rotaBase}/incluir`, cliente)
  }

  alterar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.rotaBase}/alterar`, cliente)
  }

  consultar(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.rotaBase}/${id}`)
  }
}
