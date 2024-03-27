import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contrato } from '../interface/contrato';

@Injectable({
  providedIn: 'root'
})
export class ContratoService {

  constructor(private http: HttpClient) { }

  baseUrl = 'http://127.0.0.1:8000/api';

  createContrato(contrato: any): Observable<Contrato> {
    return this.http.post<Contrato>(`${this.baseUrl}/contrato`, contrato);
  }

  readContrato(): Observable<Contrato> {
    return this.http.get<Contrato>(`${this.baseUrl}/contrato`);
  }

}
