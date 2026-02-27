export interface ModeloComparacaoDeModulos {
  id: string;
  nome: string;
  planosemqueestaativo: any[];
}

export interface ModeloComparacaoDeModulosCad {
  id: string;
  nome: string;
  modulos: ModeloComparacaoDeModulos[];
}

export interface ModeloModalidadeDosPlanos {
  id: string;
  nome: string;
}

export interface ModeloPlanos {
  id: string;
  nome: string;
  descricaodoplano: string;
  valordoplano: string;
  maisvendido: string;
  quantidadedeusuario: string;
  modalidadedosplanos: ModeloModalidadeDosPlanos[];
}

export interface ModeloTipoDeMensalidade {
  id: string;
  nome: string;
  quantmeses: string;
  percentualdedesconto: string;
}

// Interface auxiliar para tipar o retorno do Serviço (equivalente ao Record Type do Dart)
export interface RespostaListarPlanos {
  planospainel: ModeloPlanos[];
  tipodemensalidade: ModeloTipoDeMensalidade[];
  comparacaodemoduloscad: ModeloComparacaoDeModulosCad[];
}