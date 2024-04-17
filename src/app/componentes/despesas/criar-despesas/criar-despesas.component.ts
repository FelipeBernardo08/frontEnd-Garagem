import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Despesas } from 'src/app/interface/despesas';
import { CarroService } from 'src/app/services/carro.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { DespesasService } from 'src/app/services/despesas.service';
import { MotoService } from 'src/app/services/moto.service';
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
    private vendaService: VendaService,
    private carroService: CarroService,
    private motoService: MotoService,
    private despesaService: DespesasService,
    private router: Router
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
  carros: Array<any> = [];
  motos: Array<any> = [];

  selectVeiculo: string = '';

  ngOnInit(): void {
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach((form: any) => {
      form.addEventListener('submit', (event: any) => {
        if (form.classList == 'ng-valid') {
        }
        form.classList.add('was-validated')
      }, false)
    })

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

  selecionarVeiculo(e: any): void {
    let event = e.target.value
    if (event == 'carro') {
      this.buscarCarro();
    } else {
      this.buscarMoto();
    }
  }

  buscarCarro(): void {
    this.selectVeiculo = 'carro'
    this.carroService.readCarro().subscribe((carro: any) => {
      this.carros = carro
    });
  }

  buscarMoto(): void {
    this.selectVeiculo = 'moto'
    this.motoService.readMoto().subscribe((moto: any) => {
      this.motos = moto
    });
  }

  enviar(): void {
    let form = document.getElementById('formDespesas')
    let valid = form?.classList.contains('ng-valid')
    if (valid) {
      this.despesaService.createDespesas(this.despesas).subscribe(() => {
        this.router.navigate(['/despesas'])
      })
    }
  }

}
