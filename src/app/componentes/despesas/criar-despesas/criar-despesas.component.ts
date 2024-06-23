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
  template: `
    <section class="container">
    <div class="card mt-3">
        <div class="card-header">
            <div class="text-center">
                <h3>
                    <strong>
                        Cadastrar Despesas
                    </strong>
                </h3>
            </div>
        </div>
        <div class="card-body">
            <form action="" class="row form-floating needs-validation" id="formDespesas">
                <div class="col-md-6">
                    <label for="" class="form-label">Descricao</label>
                    <textarea name="descricao" [(ngModel)]="despesas.descricao"
                        placeholder="Descreva os dados da despesa..." class="form-control" cols="30" rows="15"
                        required></textarea>
                </div>
                <div class="col-md-6">
                    <div class="row mt-1">
                        <label for="" class="form-label">Valor</label>
                        <input type="text" class="form-control" required name="valor" [(ngModel)]="despesas.valor"
                            placeholder="R$">
                    </div>
                    <div class="row mt-1">
                        <label for="id_cliente" class="form-label">Cliente</label>
                        <select name="id_cliente" class="form-select" id="">
                            <option value="" disabled selected>Selecione - opcional</option>
                            <option *ngFor="let item of clientes" [value]="item.id">Nome: {{item.nome}} - CPF:
                                {{item.cpf}}</option>
                        </select>
                    </div>
                    <div class="row mt-1">
                        <label for="" class="form-label">Vendedor</label>
                        <select name="id_vendedor" class="form-select" [(ngModel)]="despesas.id_vendedor" id="">
                            <option value="" disabled selected>Selecione - opcional</option>
                            <option *ngFor="let item of vendedores" [value]="item.id">Nome: {{item.name}}</option>
                        </select>
                    </div>
                    <div class="row mt-1">
                        <label for="" class="form-label">Venda</label>
                        <select name="id_venda" class="form-select" [(ngModel)]="despesas.id_venda" id="">
                            <option value="" disabled selected>Selecione - opcional</option>
                            <option *ngFor="let item of vendas" [value]="item.id">#{{item.id}} - Cliente:
                                {{item.cliente.nome}}</option>
                        </select>
                    </div>
                    <div class="row mt-1">
                        <label for="" class="form-label">Veículo</label>
                        <select name="" class="form-select" (change)="selecionarVeiculo($event)">
                            <option value="" disabled selected>Selecione - opcional</option>
                            <option value="carro">Carro</option>
                            <option value="moto">Moto</option>
                        </select>
                    </div>
                    <div *ngIf="selectVeiculo == 'carro'" class="row mt-1">
                        <label for="" class="form-label">Carro</label>
                        <select name="id_carro" id="" class="form-select" [(ngModel)]="despesas.id_carro">
                            <option value="" disabled selected>Selecione - opcional</option>
                            <option [value]="item.id" *ngFor="let item of carros">{{item.marca}} - {{item.modelo}} -
                                {{item.placa}}
                            </option>
                        </select>
                    </div>
                    <div *ngIf="selectVeiculo == 'moto'" class="row mt-1">
                        <label for="" class="form-label">Moto</label>
                        <select name="id_moto" id="" class="form-select" [(ngModel)]="despesas.id_moto">
                            <option value="" disabled selected>Selecione - opcional</option>
                            <option [value]="item.id" *ngFor="let item of motos">{{item.marca}} - {{item.modelo}} -
                                {{item.placa}}
                            </option>
                        </select>
                    </div>
                </div>

                <div class="row mt-3">
                    <div class="col-md-6">
                        <button class="btn btn-sm btn-danger w-100" routerLink="/despesas">Voltar</button>
                    </div>
                    <div class="col-md-6">
                        <button class="btn btn-sm btn-success w-100" (click)="enviar()">Enviar</button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
  `,
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
