import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Moto } from 'src/app/interface/moto';
import { ConectService } from 'src/app/services/conect.service';

@Component({
  selector: 'app-moto',
  templateUrl: './moto.component.html',
  styleUrls: ['./moto.component.css']
})
export class MotoComponent implements OnInit {

  constructor(private service: ConectService, private router: Router) { }

  moto: Moto[] = []
  img: any
  valorTotal: number = 0
  ngOnInit(): void {
    this.service.readMoto().subscribe(moto => {
      this.moto = moto
      for(let i = 0; i < this.moto.length; i++){
        this.valorTotal += this.moto[i].valor
      }
    })
    this.img = this.service.urlImg
  }

  editar(id:number){
    this.router.navigate([`/moto/editar/${id}`])
  }

}
