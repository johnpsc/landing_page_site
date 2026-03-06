export interface ModeloAtualizacoes {
    atualizacoes_web: Atualizacao;
    atualizacoes_local: Atualizacao;
}

export interface Atualizacao {
    id: string;
    arquivo: string;
    versao: string;
    datacadastro: string;
    horacadastro: string;
    tiposistema: string;
    obrigacaodeatualizacao: string;
    arquivo_instalador: string;
}