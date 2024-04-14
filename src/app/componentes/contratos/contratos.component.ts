import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Contrato } from 'src/app/interface/contrato';
import { ConectService } from 'src/app/services/conect.service';
import { ContratoService } from 'src/app/services/contrato.service';

@Component({
  selector: 'app-contratos',
  templateUrl: './contratos.component.html',
  styleUrls: ['./contratos.component.css']
})
export class ContratosComponent implements OnInit {

  constructor(
    private router: Router,
    private contratoService: ContratoService
  ) { }

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

  ngOnInit(): void {
    this.contratoService.readContrato().subscribe((contratos: any) => {
      this.contrato = contratos;
      this.formatarTexto(this.contrato)
    })
  }

  public formatarTexto(contrato: any): void {
    contrato[0].corpo_contrato = contrato[0].corpo_contrato.replace(/;/g, '<br><br>');
  }

  public apagar(id: any): void {
    this.contratoService.deleteContrato(id).subscribe(() => {
      this.router.navigate(['/contratos']);
    });
  }

}
