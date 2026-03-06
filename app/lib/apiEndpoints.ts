import { API_CONFIG } from "./apiConfig";

export const API_PATHS = {
  planos: {
    listar: "planos/listar.php",
  },
  preCadastroPainel: {
    inserir: "pre_cadastro_painel/inserir.php",
  },
};

export const API_ENDPOINTS = {
  planos: {
    listar: `${API_CONFIG.BASE}${API_PATHS.planos.listar}`,
  },
  preCadastroPainel: {
    inserir: `${API_CONFIG.BASE}${API_PATHS.preCadastroPainel.inserir}`,
  },
};
