import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ConectService } from 'src/app/services/conect.service';
import { ContratoVinculadoService } from 'src/app/services/contrato-vinculado.service';

@Component({
  selector: 'app-contratos-imprimir',
  templateUrl: './contratos-imprimir.component.html',
  styleUrls: ['./contratos-imprimir.component.css']
})
export class ContratosImprimirComponent implements OnInit {

  constructor(
    private router: Router,
    private contratoVinculadoService: ContratoVinculadoService,
    private service: ConectService
  ) { }

  contratos: any;

  ngOnInit(): void {
    this.contratoVinculadoService.readContratoVinculado(this.service.recuperarIdUrl()).subscribe((contrato: any) => {
      this.contratos = contrato;
      this.formatarTexto(contrato)
      console.log(this.contratos)
    })
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
