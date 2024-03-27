import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Vendas } from 'src/app/interface/vendas';
import { ConectService } from 'src/app/services/conect.service';

@Component({
  selector: 'app-vendas',
  templateUrl: './vendas.component.html',
  styleUrls: ['./vendas.component.css']
})
export class VendasComponent implements OnInit {

  constructor(private service: ConectService, private router: Router) { }

  vendas: Array<any> = [];
  valorTotal: number = 0;

  ngOnInit(): void {
    this.service.getVenda().subscribe((venda: any) => {
      this.vendas = venda;
      for (let i = 0; i < venda.length; i++) {
        this.valorTotal += venda[i].valor_total
      }
    })
    let conteudo = document.getElementById('listaVendas')?.innerHTML;
  }

  public visualizar(id: any): void {
    this.router.navigate([`/venda/visualizar/${id}`])
  }

}
