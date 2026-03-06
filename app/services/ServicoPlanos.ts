import axios from "axios";
import { API_CONFIG } from "../lib/apiConfig";
import { API_PATHS } from "../lib/apiEndpoints";
import { type ModeloComparacaoDeModulosCad, type ModeloPlanos, type ModeloTipoDeMensalidade, type RespostaListarPlanos } from "../models/ModeloPlanos";

// Simulando o DioCliente configurado globalmente
const apiClient = axios.create({
  baseURL: API_CONFIG.BASE,
  headers: {
    "Content-Type": "application/json",
  },
});

export class ServicosPlanos {
  /**
   * Método listar()
   * Equivalente ao listar() do Flutter. Busca os dados na API e retorna tipado.
   */
  static async listar(): Promise<RespostaListarPlanos> {
    try {
      const response = await apiClient.get(API_PATHS.planos.listar);
      const dados = response.data;

      // O Axios já converte automaticamente a string JSON em Objetos JavaScript.
      // Retornamos mapeando para garantir que estamos enviando os arrays esperados.

      const planospainel: ModeloPlanos[] = dados.planospainel ? dados.planospainel : [];
      const tipodemensalidade: ModeloTipoDeMensalidade[] = dados.tipodemensalidade ? dados.tipodemensalidade : [];
      const comparacaodemoduloscad: ModeloComparacaoDeModulosCad[] = dados.comparacaodemoduloscad ? dados.comparacaodemoduloscad : [];

      return {
        planospainel: planospainel,
        tipodemensalidade: tipodemensalidade,
        comparacaodemoduloscad: comparacaodemoduloscad,
      };
    } catch (error) {
      console.error("Erro ao listar serviços de planos:", error);
      // Retorna arrays vazios em caso de erro para não quebrar a tela,
      // ou você pode dar um throw error; para tratar no componente.
      throw error;
    }
  }
}
