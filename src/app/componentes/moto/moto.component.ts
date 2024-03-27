import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moto } from 'src/app/interface/moto';
import { ConectService } from 'src/app/services/conect.service';
import { MotoService } from 'src/app/services/moto.service';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {

  constructor(
    private service: ConectService,
    private router: Router,
    private motoService: MotoService
  ) { }

  moto: Moto[] = []
  img: any
  valorTotal: number = 0
  ngOnInit(): void {
    this.motoService.readMoto().subscribe(moto => {
      for (let i = 0; i < moto.length; i++) {
        if (moto[i].vendido != true) {
          this.moto.push(moto[i])
          this.valorTotal += moto[i].valor
        }
      }
    })
    this.img = this.service.urlImg
  }

  editar(id: number) {
    this.router.navigate([`/moto/editar/${id}`])
  }

}
