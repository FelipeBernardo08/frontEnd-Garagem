import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Clientes } from 'src/app/interface/clientes';
import { ConectService } from 'src/app/services/conect.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  constructor(private service: ConectService, private router: Router) { }

  clientes: Clientes[] = []

  ngOnInit(): void {
    this.service.readClientes().subscribe(cliente => {
      this.clientes = cliente
      // console.log(this.clientes)
    })
  }

  editar(id:any){
    this.router.navigate([`/cliente/editar/${id}`])
  }

}
