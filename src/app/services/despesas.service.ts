import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Despesas } from '../interface/despesas';

@Injectable({
  providedIn: 'root'
})
export class DespesasService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/api';

  createDespesas(despesas: any): Observable<Despesas> {
    return this.http.post<Despesas>(`${this.baseUrl}/despesas`, despesas);
  }

  getDespesas(): Observable<Despesas>{
    return this.http.get<Despesas>(`${this.baseUrl}/despesas`);
  }

}
