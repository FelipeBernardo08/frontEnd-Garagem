import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  constructor() { }

  condition: boolean = false;

  menu: any = [
    { nome: "Início", icone: "home", link: "/" },
    { nome: "Vendas", icone: "attach_money", link: "/venda" },
    { nome: "Clientes", icone: "person", link: "/cliente" },
    { nome: "Carros", icone: "directions_car", link: "/carro" },
    { nome: "Motos", icone: "two_wheeler", link: "/moto" },
    { nome: "Contratos", icone: "gavel", link: "/contratos" },
    { nome: "Despesas", icone: "handyman", link: "/despesas" },
    { nome: "Configurações", icone: "settings", link: "/configuracoes" },
  ]

  ngOnInit(): void {
  }

  abrirOuFecharMenu(condition: boolean) {
    if (condition == true) {
      setTimeout(() => {
        this.condition = condition;
      }, 240)
      let nav = document.getElementById('nav')
      nav?.classList.remove('fechar-menu')
      nav?.classList.add('abrir-menu')
    } else if (condition == false) {
      this.condition = condition;
      let nav = document.getElementById('nav')
      nav?.classList.remove('abrir-menu')
      nav?.classList.add('fechar-menu')
    }

  }

}
