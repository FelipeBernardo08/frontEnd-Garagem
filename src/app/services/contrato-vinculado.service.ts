import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ContratoVinculado } from '../interface/contrato-vinculado';

@Injectable({
  providedIn: 'root'
})
export class ContratoVinculadoService {
  baseUrl = 'http://127.0.0.1:8000/api';

  constructor(private http: HttpClient) { }

  createContratoVinculado(contrato: any): Observable<ContratoVinculado> {
    return this.http.post<ContratoVinculado>(`${this.baseUrl}/contratoVinculado`, contrato);
  }

  readContratoVinculado(id: any): Observable<ContratoVinculado> {
    return this.http.get<ContratoVinculado>(`${this.baseUrl}/contratoVinculado/${id}`);
  }
}
