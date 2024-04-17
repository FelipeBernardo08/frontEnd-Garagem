import { Component, OnInit } from '@angular/core';
import { Despesas } from 'src/app/interface/despesas';
import { ClienteService } from 'src/app/services/cliente.service';
import { UserService } from 'src/app/services/user.service';
import { VendaService } from 'src/app/services/venda.service';

@Component({
  selector: 'app-criar-despesas',
  templateUrl: './criar-despesas.component.html',
  styleUrls: ['./criar-despesas.component.css']
})
export class CriarDespesasComponent implements OnInit {

  constructor(
    private clienteService: ClienteService,
    private userService: UserService,
    private vendaService: VendaService
  ) { }

  despesas: Despesas = {
    valor: '',
    descricao: '',
    id_venda: '',
    id_vendedor: '',
    id_carro: '',
    id_cliente: '',
    id_moto: ''
  }

  clientes: Array<any> = [];
  vendedores: Array<any> = [];
  vendas: Array<any> = [];

  ngOnInit(): void {
    this.clienteService.readClientes().subscribe((cliente: any) => {
      this.clientes = cliente
    });

    this.userService.readUsers().subscribe((vendedor: any) => {
      this.vendedores = vendedor
    });

    this.vendaService.getVenda().subscribe((venda: any) => {
      this.vendas = venda
    })
  }

}
