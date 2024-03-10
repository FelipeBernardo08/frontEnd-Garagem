import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisitosFormularioCarroService {

  constructor() { }

  listaMarcas = [
    {nome: "Audi"},
    {nome: "BMW"},
    {nome: "CAOA Chery"},
    {nome: "Chevrolet GM"},
    {nome: "Citroën"},
    {nome: "Fiat"},
    {nome: "Ford"},
    {nome: "Honda"},
    {nome: "Hyundai"},
    {nome: "Iveco"},
    {nome: "Jac"},
    {nome: "Jeep"},
    {nome: "Kia"},
    {nome: "Land Rover"},
    {nome: "Mercedez-Bens"},
    {nome: "Mitsubishi"},
    {nome: "Nissan"},
    {nome: "Peugeot"},
    {nome: "RAM"},
    {nome: "Renault"},
    {nome: "Suzuki"},
    {nome: "Toyota"},
    {nome: "Volkswagen"},
    {nome: "Volvo"}
  ]

  potenciaMotor = [
    {nome: "1.0"},
    {nome: "1.4"},
    {nome: "1.6"},
    {nome: "1.8"},
    {nome: "2.0"},
    {nome: "2.2"},
    {nome: "2.4"},
    {nome: "2.8"},
    {nome: "3.0"},
    {nome: "3.3"}
  ]

  valvulaMotor = [
    {nome: "8v"},
    {nome: "16v"}
  ]

  combustivel = [
    {nome: "Gasolina"},
    {nome: "Alcool"},
    {nome: "Flex"},
    {nome: "Diesel"}
  ]

  cambio = [
    {nome: "Manual"},
    {nome: "Semi-automático"},
    {nome: "Automático"}
  ]

  cor = [
    {nome: "Branco"},
    {nome: "Preto"},
    {nome: "Prata"},
    {nome: "Vermelho"},
    {nome: "Azul"},
    {nome: "Verde"},
    {nome: "Laranja"}
  ]

  categoria = [
    {nome: "Sedã"},
    {nome: "Hatch"},
    {nome: "Pickup"},
    {nome: "SUV"},
    {nome: "Utilitário"}
  ]
}
