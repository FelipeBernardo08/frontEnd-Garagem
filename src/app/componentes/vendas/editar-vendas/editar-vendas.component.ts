import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConectService } from 'src/app/services/conect.service';
import { VendaService } from 'src/app/services/venda.service';

@Component({
  selector: 'app-editar-vendas',
  templateUrl: './editar-vendas.component.html',
  styleUrls: ['./editar-vendas.component.css']
})
export class EditarVendasComponent implements OnInit {

  constructor(
    private router: Router,
    private vendaService: VendaService,
    private service: ConectService
  ) { }

  vendas: any;

  ngOnInit(): void {
    this.vendaService.getVendaId(this.service.recuperarIdUrl()).subscribe((venda: any) => {
      this.vendas = venda;
    });
  }

}
