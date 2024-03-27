import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContratoVinculado } from 'src/app/interface/contrato-vinculado';
import { ConectService } from 'src/app/services/conect.service';

@Component({
  selector: 'app-contratos-imprimir',
  templateUrl: './contratos-imprimir.component.html',
  styleUrls: ['./contratos-imprimir.component.css']
})
export class ContratosImprimirComponent implements OnInit {

  constructor(private service: ConectService, private router: Router) { }

  contratos: any;

  ngOnInit(): void {
    this.service.readContratoVinculado(this.recuperarIdUrl()).subscribe((contrato: any) => {
      this.contratos = contrato;
      this.formatarTexto(contrato)
      console.log(this.contratos)
    })
  }

  public recuperarIdUrl(): string {
    let href = window.location.href
    let id = href.charAt(href.length - 1);
    return id
  }

  public imprimir(): void {
    let conteudo: any = document.getElementById('contratoImprimir')?.innerHTML;
    let imprimir = window.open('', '', 'heigth=700,width=800');
    imprimir?.document.write('<html><head></head><body>');
    imprimir?.document.write(conteudo);
    imprimir?.document.write('</body></html>');
    imprimir?.document.close();
    imprimir?.print();
  }

  public formatarTexto(contrato: any): void {
    contrato.contrato.corpo_contrato = contrato.contrato.corpo_contrato.replace(/;/g, '<br><br>');
  }

}
