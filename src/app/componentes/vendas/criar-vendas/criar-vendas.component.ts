import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/interface/carro';
import { Clientes } from 'src/app/interface/clientes';
import { Moto } from 'src/app/interface/moto';
import { Users } from 'src/app/interface/users';
import { Vendas } from 'src/app/interface/vendas';
import { ConectService } from 'src/app/services/conect.service';

@Component({
  selector: 'app-criar-vendas',
  templateUrl: './criar-vendas.component.html',
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
    valor_total: ''
  }

  user: Users[] = []

  constructor(private service: ConectService, private router: Router) { }

  ngOnInit(): void {
    const forms = document.querySelectorAll('.needs-validation')
    Array.from(forms).forEach((form: any) => {
      form.addEventListener('submit', (event: any) => {
        if (form.classList == 'ng-valid') {
        }
        form.classList.add('was-validated')
      }, false)
    });

    this.service.readClientes().subscribe((cliente: any) => {
      this.clientes = cliente;
    });

    this.service.readUsers().subscribe((users: any) => {
      this.user = users
    })
  }

  public encontrarVeiculo(evento: any) {
    this.motos = []
    this.carros = []
    if (evento.target.value == 'carro') {
      this.service.readCarro().subscribe((carro: any) => {
        this.carros = carro;
      })
    } else if (evento.target.value == 'moto') {
      this.service.readMoto().subscribe((moto: any) => {
        this.motos = moto;
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
      this.service.createVenda(this.venda).subscribe(() => {
        this.router.navigate(['/vendas'])
      });
    }
  }
}
