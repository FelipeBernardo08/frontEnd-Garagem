import { Component, OnInit } from '@angular/core';
import { Carro } from 'src/app/interface/carro';
import { Clientes } from 'src/app/interface/clientes';
import { Moto } from 'src/app/interface/moto';
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

  constructor(private service: ConectService) { }

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
  }

  public encontrarVeiculo(evento: any) {
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

  public enviar() {

  }
}
