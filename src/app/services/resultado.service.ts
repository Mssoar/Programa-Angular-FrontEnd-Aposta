import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Resultado } from 'src/app/entities/resultado';

@Injectable({
  providedIn: 'root'
})
export class ResultadoService {

  rotaBase: String = "http://localhost:8080/resultado"

  constructor(private http: HttpClient) { }

  listar():Observable<any>{
    return this.http.get<Resultado>(`${this.rotaBase}/listar`)
  }

  incluir(resultado: Resultado): Observable<Resultado> {
    return this.http.post<Resultado>(`${this.rotaBase}/incluir`, resultado)
  }

  alterar(resultado: Resultado): Observable<Resultado> {
    return this.http.post<Resultado>(`${this.rotaBase}/alterar`, resultado)
  }

  consultar(id: number): Observable<Resultado> {
    return this.http.get<Resultado>(`${this.rotaBase}/${id}`)
  }

}
