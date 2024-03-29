import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Carro } from '../interface/carro';
import { Observable } from 'rxjs';
import { ImagemCarro } from '../interface/imagem-carro';
import { Moto } from '../interface/moto';
import { Clientes } from '../interface/clientes';
import { Vendas } from '../interface/vendas';
import { Users } from '../interface/users';
import { Contrato } from '../interface/contrato';
import { ContratoVinculado } from '../interface/contrato-vinculado';

@Injectable({
  providedIn: 'root'
})
export class ConectService {

  baseUrl = 'http://127.0.0.1:8000/api';

  urlImg = 'http://127.0.0.1:8000/storage';

  constructor(private http: HttpClient) { }

  apagarTodasImagensMoto(img: any, id: any): Observable<any> {
    return this.http.post<any>(`${this.baseUrl}/apagar-imagem-moto/${id}`, img);
  }

  recuperarIdUrl(): string {
    let href = window.location.href
    // let id = href.charAt(href.length - 1);
    let partes = href.split('/');

    let id = partes[partes.length - 1];

    return id
  }
}
