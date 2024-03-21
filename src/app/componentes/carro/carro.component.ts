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
  constructor(public service: ConectService, public router: Router) { }

  ngOnInit(): void {
    this.service.readCarro().subscribe(carros => {
      for (let i = 0; i < carros.length; i++) {
        if (carros[i].vendido != true) {
          this.carro[i] = carros[i]
        }
      }
      for (let i = 0; i < this.carro.length; i++) {
        this.valorTotal += this.carro[i].valor
      }
    })
    this.img = this.service.urlImg
  }

  editar(id: number) {
    this.router.navigate([`/carro/editar/${id}`])
  }
}
