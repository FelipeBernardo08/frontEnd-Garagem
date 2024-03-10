export interface Moto {
    id:any,
    marca: string,
    modelo: string,
    potencia_motor:string,
    combustivel:string,
    freio:string,
    cambio:string,
    km_atual: string,
    ano_fabricacao:string,
    final_placa?:string,
    cor:string,
    descricao?:string,
    
    freio_abs?:boolean,
    alarme?: boolean,
    injecao_eletronica?: boolean,
    carregador_12v?: boolean,
    partida_eletrica?: boolean,

    placa: string,
    ipva_pago: boolean,
    ipva_valor: any,  
    fipe: any,
    valor_pago: any,
    porcentagem_maxima: any,
    valor: any,
    vendido:boolean,

    fotos?:any 
}
