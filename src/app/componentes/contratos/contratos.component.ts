import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrato } from 'src/app/interface/contrato';
import { ConectService } from 'src/app/services/conect.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {

  constructor(private service: ConectService, private router: Router) { }

  cliente = {
    nome: 'Felipe Bernardo de Oliveira',
    cpf: '123.456.789-00',
    endereco: {
      rua: 'rua da amora',
      numero: '123',
      bairro: 'josé paulo',
      cidade: 'sao Paulo',
      estado: 'SP'
    }
  }

  contrato: Contrato[] = []

  contratoTitulo: string = `CONTRATO COMPRA E VENDA`

  contratoCorpo: string = `
  Comprador: ${this.cliente.nome}, portador do documento: ${this.cliente.cpf} residente do endereço: R. ${this.cliente.endereco.rua}, 
  N. ${this.cliente.endereco.numero}, Bairro ${this.cliente.endereco.bairro}, Cidade: ${this.cliente.endereco.cidade}, Estado: ${this.cliente.endereco.estado}
  `
  ngOnInit(): void {
    this.service.readContrato().subscribe((contratos: any) => {
      this.contrato = contratos
      this.contrato[0].corpo_contrato = this.contrato[0].corpo_contrato.replace('Nome do Comprador', this.cliente.nome)
    })
  }


  public imprimir() {
    let conteudo: any = document.getElementById('contratoImprimir')?.innerHTML;
    let imprimir = window.open('', '', 'heigth=700,width=800');
    imprimir?.document.write('<html><head></head><body>');
    imprimir?.document.write(conteudo);
    imprimir?.document.write('</body></html>');
    imprimir?.document.close();
    imprimir?.print();
  }
}
