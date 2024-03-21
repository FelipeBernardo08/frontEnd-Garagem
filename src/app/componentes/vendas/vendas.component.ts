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

  ngOnInit(): void {
    this.service.getVenda().subscribe((venda: any) => {
      this.vendas = venda;
    })
  }

  public visualizar(id: any): void {
    this.router.navigate([`/venda/visualizar/${id}`])
  }

}
