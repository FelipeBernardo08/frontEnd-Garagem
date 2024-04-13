import { CarroService } from './../../services/carro.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Carro } from 'src/app/interface/carro';
import { ConectService } from 'src/app/services/conect.service';

@Component({
  selector: 'app-carro',
  templateUrl: './carro.component.html',
  styleUrls: ['./carro.component.css']
})
export class CarroComponent implements OnInit {

  carro: Carro[] = []
  img: string = ''
  valorTotal: number = 0
  constructor(
    public service: ConectService,
    public router: Router,
    public carroService: CarroService
  ) { }

  ngOnInit(): void {
    this.carroService.readCarro().subscribe(carros => {
      for (let i = 0; i < carros.length; i++) {
        if (carros[i].vendido != true) {
          this.carro.push(carros[i])
          this.valorTotal += carros[i].valor
        }
      }
      console.log(this.carro)
    })
    this.img = this.service.urlImg
    console.log(this.img)
  }


  editar(id: number) {
    this.router.navigate([`/carro/editar/${id}`])
  }
}
