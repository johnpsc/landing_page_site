export interface ModeloComparacaoDeModulos {
  id: string;
  nome: string;
  planosemqueestaativo: string[];
}

/** Alias curto usado nos componentes de UI */
export type Modulo = ModeloComparacaoDeModulos;

export interface ModeloComparacaoDeModulosCad {
  id: string;
  nome: string;
  modulos: ModeloComparacaoDeModulos[];
}

export interface ModeloModalidadeDosPlanos {
  id: string;
  nome: string;
}

/** Alias mantido para compatibilidade com CardPlanosPainel */
export type ModalidadePlano = ModeloModalidadeDosPlanos;

export interface ModeloPlanos {
  id: string;
  nome: string;
  descricaodoplano?: string;
  valordoplano: string;
  maisvendido?: string;
  quantidadedeusuario?: string;
  modalidadedosplanos?: ModeloModalidadeDosPlanos[];
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

/** Alias em inglês para consistência nos componentes de UI */
export type FetchPlansResponse = RespostaListarPlanos;