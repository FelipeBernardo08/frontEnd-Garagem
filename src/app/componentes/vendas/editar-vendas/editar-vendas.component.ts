import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/interface/carro';
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
  cliente: any;
  carro: any;
  moto: any;

  ngOnInit(): void {
    this.vendaService.getVendaId(this.service.recuperarIdUrl()).subscribe((venda: any) => {
      console.log(venda)
      this.vendas = venda;
      this.cliente = venda.cliente
      if (venda.id_carro != null) {
        this.carro = venda.carro
      } else if (venda.id_moto != null) {
        this.moto = venda.moto
      }
    });
  }

  atribuirVeiculo(veiculo: any): void {

  }

}
