import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RequisitosFormularioMotoService {

  constructor() { }

  listaMarcas = [
    {nome: 'BMW'},
    {nome: 'Dafra'},
    {nome: 'Ducati'},
    {nome: 'Harley-Davidson'},
    {nome: 'Honda'},
    {nome: 'Kawasaki'},
    {nome: 'KTM'},
    {nome: 'Royal Enfield'},
    {nome: 'Shineray'},
    {nome: 'Suzuki'},
    {nome: 'Triumph'},
    {nome: 'Voltz'},
    {nome: 'Yamaha'}
  ]

  potenciaMotor = [
    {nome: '100cc'},
    {nome: '110cc'},
    {nome: '125cc'},
    {nome: '150cc'},
    {nome: '190cc'},
    {nome: '200cc'},
    {nome: '230cc'},
    {nome: '250cc'},
    {nome: '300cc'},
    {nome: '310cc'},
    {nome: '400cc'},
    {nome: '500cc'},
    {nome: '550cc'},
    {nome: '600cc'},
    {nome: '660cc'},
    {nome: '700cc'},
    {nome: '750cc'},
    {nome: '800cc'},
    {nome: '900cc'},
    {nome: '1000cc'},
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

  freio = [
    {nome: 'Tambor duas rodas'},
    {nome: 'Disco dianteiro, tambor traseiro'},
    {nome: 'Disco duas rodas'}
  ]



}
