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
      this.contrato = contratos;
      this.formatarTexto(this.contrato)
    })
  }

  public formatarTexto(contrato: any): void {
    contrato[0].corpo_contrato = contrato[0].corpo_contrato.replace('nome_cliente', this.cliente.nome);
    contrato[0].corpo_contrato = contrato[0].corpo_contrato.replace('cpf_cliente', this.cliente.cpf);
    contrato[0].corpo_contrato = contrato[0].corpo_contrato.replace('rua_cliente', this.cliente.endereco.rua);
    contrato[0].corpo_contrato = contrato[0].corpo_contrato.replace('numero_cliente', this.cliente.endereco.numero);
    contrato[0].corpo_contrato = contrato[0].corpo_contrato.replace('bairro_cliente', this.cliente.endereco.bairro);
    contrato[0].corpo_contrato = contrato[0].corpo_contrato.replace('cidade_cliente', this.cliente.endereco.cidade);
    contrato[0].corpo_contrato = contrato[0].corpo_contrato.replace('estado_cliente', this.cliente.endereco.estado);
    contrato[0].corpo_contrato = contrato[0].corpo_contrato.replace(/;/g, '<br>');
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
