import { VendaService } from 'src/app/services/venda.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/interface/carro';
import { Clientes } from 'src/app/interface/clientes';
import { Moto } from 'src/app/interface/moto';
import { Users } from 'src/app/interface/users';
import { Vendas } from 'src/app/interface/vendas';
import { CarroService } from 'src/app/services/carro.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { ConectService } from 'src/app/services/conect.service';
import { MotoService } from 'src/app/services/moto.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-criar-vendas',
  // templateUrl: './criar-vendas.component.html',
  template: `
    <section class="mt-3 container">
    <div class="card">
        <div class="card-header text-center">
            <h3>Nova Venda</h3>
        </div>
        <div class="card-body">
            <form class="row form-floating needs-validation" id="formVenda">

                <div class="col-md-6">
                    <label for="listaCliente" class="form-label">Cliente</label>
                    <select name="id_cliente" [(ngModel)]="venda.id_cliente" class="form-select mt-2" required
                        (change)="selecionarCliente($event)">
                        <option value="" disabled selected>Selecione</option>
                        <option *ngFor="let item of clientes;" [value]="item.id">
                            {{item.nome}} - CPF: {{item.cpf}}
                        </option>
                    </select>

                    <div class="row mt-3" *ngIf="cliente.nome != '' ">
                        <div class="col-md-6 mt-2">
                            <label for="nome" class="form-label">Nome</label>
                            <input type="text" name="nome" class="form-control" id="nome" placeholder=""
                                [(ngModel)]="cliente.nome" required disabled>
                        </div>

                        <div class="col-md-6 mt-2">
                            <label for="cpf" class="form-label">CPF</label>
                            <input type="text" name="cpf" class="form-control" id="cpf" placeholder=""
                                [(ngModel)]="cliente.cpf" disabled>
                        </div>

                        <div class="col-md-8 mt-2">
                            <label for="email" class="form-label">E-mail</label>
                            <input type="text" name="email" class="form-control" id="email" placeholder=""
                                [(ngModel)]="cliente.email" disabled>
                        </div>

                        <div class="col-md-4 mt-2">
                            <label for="nascimento" class="form-label">Data de Nascimento</label>
                            <input type="text" name="nascimento" class="form-control" id="data-nascimento"
                                placeholder="" [(ngModel)]="cliente.nascimento" disabled>
                        </div>

                        <div class="col-md-4 mt-2">
                            <label for="rua" class="form-label">Rua</label>
                            <input type="text" name="end_rua" class="form-control" id="rua" placeholder=""
                                [(ngModel)]="cliente.end_rua" disabled>
                        </div>

                        <div class="col-md-4 mt-2">
                            <label for="numero" class="form-label">Número</label>
                            <input type="text" name="end_numero" class="form-control" id="numero" placeholder=""
                                [(ngModel)]="cliente.end_numero" disabled>
                        </div>

                        <div class="col-md-4 mt-2">
                            <label for="bairro" class="form-label">Bairro</label>
                            <input type="text" name="end_bairro" class="form-control" id="bairro" placeholder=""
                                [(ngModel)]="cliente.end_bairro" disabled>
                        </div>

                        <div class="col-md-8 mt-2">
                            <label for="cidade" class="form-label">Cidade</label>
                            <input type="text" name="end_cidade" class="form-control" id="cidade" placeholder=""
                                [(ngModel)]="cliente.end_cidade" disabled>
                        </div>

                        <div class="col-md-4 mt-2">
                            <label for="uf" class="form-label">UF</label>
                            <input type="text" name="end_estado" class="form-control" id="uf" placeholder=""
                                [(ngModel)]="cliente.end_estado" disabled>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <label for="listaVeiculo" class="form-label">Tipo do Veículo</label>
                    <select name="veiculo" class="form-select mt-2" (change)="encontrarVeiculo($event)" required>
                        <option value="" disabled selected>Selecione</option>
                        <option value="carro">Carro</option>
                        <option value="moto">Moto</option>
                    </select>

                    <div *ngIf="carros.length > 0 || motos.length > 0" class="mt-3">
                        <label for="listaVeiculo" class="form-label">Selecione o Veículo</label>

                        <select name="id_carro" class="form-select mt-2" *ngIf="carros.length > 0" required
                            (change)="selecionarCarro($event)" [(ngModel)]="venda.id_carro">
                            <option value="" disabled selected>Selecione</option>
                            <option *ngFor="let item of carros;" [value]="item.id">
                                {{item.marca}} {{item.modelo}} {{item.potencia_motor}} - {{item.ano_fabricacao}}
                            </option>
                        </select>

                        <select name="id_moto" class="form-select mt-2" *ngIf="motos.length > 0" required
                            (change)="selecionarMoto($event)" [(ngModel)]="venda.id_moto">
                            <option value="" disabled selected>Selecione</option>
                            <option *ngFor="let item of motos;" [value]="item.id">{{item.marca}} {{item.modelo}}
                                {{item.potencia_motor}} - {{item.ano_fabricacao}}
                            </option>
                        </select>
                    </div>

                    <div class="row mt-2" *ngIf="carros.length > 0" id="fichaCarro">
                        <div class="col-md-6">
                            <label for="marca" class="form-label">Marca</label>
                            <input type="text" name="marca" class="form-control" id="marca" placeholder=""
                                [(ngModel)]="carro.marca" disabled>
                        </div>

                        <div class="col-md-6">
                            <label for="modelo" class="form-label">Modelo</label>
                            <input type="text" name="modelo" class="form-control" id="modelo" placeholder=""
                                [(ngModel)]="carro.modelo" disabled>
                        </div>

                        <div class="col-md-4 mt-2">
                            <label for="motor" class="form-label">Motor</label>
                            <input type="text" name="motor" class="form-control" id="motor" placeholder=""
                                [(ngModel)]="carro.potencia_motor" disabled>
                        </div>

                        <div class="col-md-4  mt-2">
                            <label for="placa" class="form-label">Placa</label>
                            <input type="text" name="placa" class="form-control" id="placa" placeholder=""
                                [(ngModel)]="carro.placa" disabled>
                        </div>

                        <div class="col-md-4  mt-2">
                            <label for="cambio" class="form-label">Cambio</label>
                            <input type="text" name="cambio" class="form-control" id="cambio" placeholder=""
                                [(ngModel)]="carro.cambio" disabled>
                        </div>

                        <div class="col-md-4  mt-2">
                            <label for="cor" class="form-label">Cor</label>
                            <input type="text" name="cor" class="form-control" id="cor" placeholder=""
                                [(ngModel)]="carro.cor" disabled>
                        </div>


                        <div class="col-md-4  mt-2">
                            <label for="km" class="form-label">KM</label>
                            <input type="text" name="km" class="form-control" id="km" placeholder=""
                                [(ngModel)]="carro.km_atual" disabled>
                        </div>


                        <div class="col-md-4  mt-2">
                            <label for="valor" class="form-label">Valor</label>
                            <input type="text" name="valor" class="form-control" id="valor" placeholder=""
                                [(ngModel)]="carro.valor" disabled>
                        </div>
                    </div>

                    <div class="row mt-2" *ngIf="motos.length > 0" id="fichaCarro">
                        <div class="col-md-6">
                            <label for="marca" class="form-label">Marca</label>
                            <input type="text" name="marca" class="form-control" id="marca" placeholder=""
                                [(ngModel)]="moto.marca" disabled>
                        </div>

                        <div class="col-md-6">
                            <label for="modelo" class="form-label">Modelo</label>
                            <input type="text" name="modelo" class="form-control" id="modelo" placeholder=""
                                [(ngModel)]="moto.modelo" disabled>
                        </div>

                        <div class="col-md-4 mt-2">
                            <label for="motor" class="form-label">Motor</label>
                            <input type="text" name="motor" class="form-control" id="motor" placeholder=""
                                [(ngModel)]="moto.potencia_motor" disabled>
                        </div>

                        <div class="col-md-4  mt-2">
                            <label for="placa" class="form-label">Placa</label>
                            <input type="text" name="placa" class="form-control" id="placa" placeholder=""
                                [(ngModel)]="moto.placa" disabled>
                        </div>

                        <div class="col-md-4  mt-2">
                            <label for="cambio" class="form-label">Cambio</label>
                            <input type="text" name="cambio" class="form-control" id="cambio" placeholder=""
                                [(ngModel)]="moto.cambio" disabled>
                        </div>

                        <div class="col-md-4  mt-2">
                            <label for="cor" class="form-label">Cor</label>
                            <input type="text" name="cor" class="form-control" id="cor" placeholder=""
                                [(ngModel)]="moto.cor" disabled>
                        </div>


                        <div class="col-md-4  mt-2">
                            <label for="km" class="form-label">KM</label>
                            <input type="text" name="km" class="form-control" id="km" placeholder=""
                                [(ngModel)]="moto.km_atual" disabled>
                        </div>


                        <div class="col-md-4  mt-2">
                            <label for="valor" class="form-label">Valor</label>
                            <input type="text" name="valor" class="form-control" id="valor" placeholder=""
                                [(ngModel)]="moto.valor" disabled>
                        </div>
                    </div>

                </div>

                <div class="col-md-6">
                    <label for="vendedor" class="form-label mt-3">Vendedor</label>
                    <select name="id_vendedor" [(ngModel)]="venda.id_vendedor" class="form-select mt-2" required>
                        <option value="" disabled selected>Selecione</option>
                        <option *ngFor="let item of user;" [value]="item.id">
                            {{item.name}}
                        </option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label for="valorTotal" class="form-label mt-3">Valor Venda</label>
                    <input type="text" name="valorTotal" class="form-control mt-2" [(ngModel)]="venda.valor_total"
                        required placeholder="R$">
                </div>

                <div class="col-md-6">
                    <label for="forma_pgto" class="form-label mt-3">Forma de Pagamento</label>
                    <select name="forma_pgto" [(ngModel)]="venda.forma_pgto" name="forma_pgto" class="form-select mt-2">
                        <option value="" selected disabled>Selecione</option>
                        <option value="pix">PIX</option>
                        <option value="dinheiro">Dinheiro</option>
                        <option value="cartao">Cartão</option>
                        <option value="cheque">Cheque</option>
                    </select>
                </div>

                <div class="col-md-6">
                    <label for="observacao" class="form-label mt-3">Observação</label>
                    <textarea name="observacao" id="" cols="30" rows="10" class="form-control" [(ngModel)]="venda.observacao"></textarea>
                </div>

                <div class="row mt-3">
                    <div class="col-md-6">
                        <button class="w-100 btn btn-sm btn-danger m-3" routerLink="/venda">
                            Cancelar
                        </button>
                    </div>
                    <div class="col-md-6">
                        <button class="w-100 btn btn-sm btn-success m-3" type="submit" (click)="enviar()">
                            Cadastrar Venda
                        </button>
                    </div>
                </div>
            </form>
        </div>
    </div>
</section>
  `,
  styleUrls: ['./criar-vendas.component.css']
})
export class CriarVendasComponent implements OnInit {
  carros: Carro[] = [];
  motos: Moto[] = [];
  clientes: Clientes[] = [];

  cliente: Clientes = {
    nome: '',
    cpf: '',
    nascimento: '',
    email: '',
    end_rua: '',
    end_numero: '',
    end_bairro: '',
    end_cidade: '',
    end_estado: ''
  }

  carro: Carro = {
    marca: '',
    modelo: '',
    potencia_motor: '',
    valvulas_motor: '',
    combustivel: '',
    cambio: '',
    km_atual: '',
    ano_fabricacao: '',
    cor: '',
    categoria: '',
    portas: '',
    placa: '',
    valor_pago: '',
    porcentagem_maxima: '',
    valor: '',
    vendido: false,
  }

  moto: Moto = {
    marca: '',
    modelo: '',
    potencia_motor: '',
    combustivel: '',
    freio: '',
    cambio: '',
    km_atual: '',
    ano_fabricacao: '',
    cor: '',

    placa: '',
    ipva_pago: false,
    ipva_valor: '',
    fipe: '',
    valor_pago: '',
    porcentagem_maxima: '',
    valor: '',
    vendido: false,
  }

  venda: Vendas = {
    id_cliente: '',
    id_carro: '',
    id_moto: '',
    id_vendedor: '',
    valor_total: '',
    forma_pgto: '',
    observacao: ''
  }

  user: Users[] = []

  constructor(
    private service: ConectService,
    private router: Router,
    private clienteService: ClienteService,
    private userService: UserService,
    private carroService: CarroService,
    private motoService: MotoService,
    private vendaService: VendaService
  ) { }

  ngOnInit(): void {
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach((form: any) => {
      form.addEventListener('submit', (event: any) => {
        if (form.classList == 'ng-valid') {
        }
        form.classList.add('was-validated')
      }, false)
    });

    this.clienteService.readClientes().subscribe((cliente: any) => {
      this.clientes = cliente;
    });

    this.userService.readUsers().subscribe((users: any) => {
      this.user = users
    })
  }

  public encontrarVeiculo(evento: any) {
    this.motos = []
    this.carros = []

    if (evento.target.value == 'carro') {
      this.carroService.readCarro().subscribe((carro: any) => {
        for (let i = 0; i < carro.length; i++) {
          if (carro[i].vendido != true) {
            this.carros.push(carro[i])
          }
        }
      })
    } else if (evento.target.value == 'moto') {
      this.motoService.readMoto().subscribe((moto: any) => {
        for (let i = 0; i < moto.length; i++) {
          if (moto[i].vendido != true) {
            this.motos.push(moto[i])
          }
        }
      })
    }
  }

  public selecionarCliente(e: any) {
    let index = e.target.value
    for (let i = 0; i < this.clientes.length; i++) {
      if (this.clientes[i].id == index) {
        this.cliente = this.clientes[i];
      }
    }
  }

  public selecionarMoto(e: any) {
    let index = e.target.value
    for (let i = 0; i < this.motos.length; i++) {
      if (this.motos[i].id == index) {
        this.moto = this.motos[i];
      }
    }
  }

  public selecionarCarro(e: any) {
    let index = e.target.value
    for (let i = 0; i < this.carros.length; i++) {
      if (this.carros[i].id == index) {
        this.carro = this.carros[i];
      }
    }
  }

  public enviar() {
    let form = document.getElementById('formVenda');
    let valid = form?.classList.contains('ng-valid')
    if (valid) {
      this.vendaService.createVenda(this.venda).subscribe(() => {
        this.identificarVeiculo(this.venda.id_carro, this.venda.id_moto);
        this.router.navigate(['/venda'])
      });
    }
  }

  public identificarVeiculo(id_carro: any, id_moto: any): void {
    if (id_carro != '') {
      this.carro.fotos = this.carro.id
      this.carro.vendido = true
      this.carroService.updateCarro(this.carro, this.carro.id).subscribe(() => {
      });
    } else if (id_moto != '') {
      this.moto.fotos = this.moto.id
      this.moto.vendido = true
      this.motoService.updateMoto(this.moto, this.moto.id).subscribe(() => {
      })
    }
  }
}
