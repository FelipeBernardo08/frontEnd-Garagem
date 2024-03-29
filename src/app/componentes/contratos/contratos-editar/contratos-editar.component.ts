import { Component, OnInit } from '@angular/core';
import { ContratoVinculadoService } from 'src/app/services/contrato-vinculado.service';

@Component({
  selector: 'app-contratos-editar',
  templateUrl: './contratos-editar.component.html',
  styleUrls: ['./contratos-editar.component.css']
})
export class ContratosEditarComponent implements OnInit {

  constructor(
    private contratoVinculado: ContratoVinculadoService
  ) { }

  contratos: Array<any> = []

  ngOnInit(): void {
    this.contratoVinculado.getAllContratosVinculados().subscribe((contrato: any) => {
      this.contratos = contrato;
      console.log(contrato);
    })
  }

}
