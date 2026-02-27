import axios from 'axios';
import { 
  type RespostaListarPlanos, 
  type ModeloPlanos, 
  type ModeloTipoDeMensalidade, 
  type ModeloComparacaoDeModulosCad 
} from '../models/ModeloPlanos';

// Simulando o DioCliente configurado globalmente
const apiClient = axios.create({
  baseURL: 'https://eadsagestart.com.br/sistema/apis_restaurantes/api_desktop_versao/1.1.25/', // Substitua pela URL real da sua API
  headers: {
    'Content-Type': 'application/json'
  }
});

const caminhoAPI = 'planos';

export class ServicosPlanos {
  /**
   * Método listar()
   * Equivalente ao listar() do Flutter. Busca os dados na API e retorna tipado.
   */
  static async listar(): Promise<RespostaListarPlanos> {
    try {
      const response = await apiClient.get(`${caminhoAPI}/listar.php`);
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