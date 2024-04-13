export interface Carro {
    id?: any,
    marca: string,
    modelo: string,
    potencia_motor: string,
    valvulas_motor: string,
    combustivel: string,
    cambio: string,
    km_atual: string,
    ano_fabricacao: string,
    final_placa?: string,
    cor: string,
    categoria: string,
    descricao?: string,
    portas: string,

    ar_condicionado?: boolean,
    ar_quente?: boolean,
    air_bag_dianteiro?: boolean,
    air_bag_traseiro?: boolean,
    vidro_eletrico_dianteiro?: boolean,
    vidro_eletrico_traseiro?: boolean,
    multimidea?: boolean,
    camera_re?: boolean,
    alarme?: boolean,
    travas_eletricas?: boolean,
    computador_bordo?: boolean,
    regulagem_banco?: boolean,
    regulagem_volante?: boolean,

    placa: string,
    chassis?: string,
    ipva_pago?: boolean
    ipva_valor?: any,
    fipe?: any,
    valor_pago: any,
    porcentagem_maxima: any
    valor: any,
    vendido?: boolean,

    fotos?: any
}
