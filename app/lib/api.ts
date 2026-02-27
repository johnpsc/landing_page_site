export const API_CONFIG = {
  // Mesma base usada pelo Flutter `DioCliente` com `Empresa.eadsagestart` e `apiVersaoSistema = 1.1.25`.
  BASE: 'https://eadsagestart.com.br/sistema/apis_restaurantes/api_desktop_versao/1.1.25/',
};

export async function fetchPlans() {
  const url = `${API_CONFIG.BASE}planos/listar.php`;
  const res = await fetch(url, { method: 'GET' });
  if (!res.ok) throw new Error(`Erro ao buscar planos: ${res.status}`);
  return res.json();
}

export type SignupPayload = {
  nome_da_empresa: string;
  nome_do_responsavel: string;
  celular: string;
  email: string;
  senha: string;
  confirmar_senha: string;
  cnpj: string;
  id_planos_painel?: string;
  id_tipo_de_mensalidade?: string;
  valor_da_mensalidade?: string;
};

export async function signup(payload: SignupPayload) {
  const url = `${API_CONFIG.BASE}pre_cadastro_painel/inserir.php`;
  const res = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Erro no cadastro: ${res.status} ${text}`);
  }

  return res.json();
}
