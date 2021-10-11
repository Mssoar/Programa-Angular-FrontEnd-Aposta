import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Clube } from '../entities/clube';

@Injectable({
  providedIn: 'root'
})
export class ClubeService {

  rotaBase: String = "http://localhost:8080/clube"

  constructor(private http: HttpClient) { }

  listar(): Observable<any>{
    return this.http.get<Clube>(`${this.rotaBase}/listar`)
  }

  incluir(clube : Clube): Observable<Clube> {
    return this.http.post<Clube>(`${this.rotaBase}/incluir`, clube)

  }

  alterar(clube: Clube): Observable<Clube> {
    return this.http.post<Clube>(`${this.rotaBase}/alterar`, clube)

  }

  consultar(id: number): Observable<Clube> {
    return this.http.get<Clube>(`${this.rotaBase}/${id}`)

  }
}
