import { Component, OnInit } from '@angular/core';
import { DespesasService } from 'src/app/services/despesas.service';

@Component({
  selector: 'app-despesas',
  templateUrl: './despesas.component.html',
  styleUrls: ['./despesas.component.css']
})
export class DespesasComponent implements OnInit {

  constructor(private despesasService: DespesasService) { }

  despesas: Array<any> = []

  ngOnInit(): void {
    this.despesasService.getDespesas().subscribe((despesa: any) => {
      this.despesas = despesa;
      console.log(this.despesas)
    })
  }

}
