import { API_ENDPOINTS } from "../lib/apiEndpoints";

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

export async function fetchPlans() {
  const res = await fetch(API_ENDPOINTS.planos.listar, { method: "GET" });
  if (!res.ok) throw new Error(`Erro ao buscar planos: ${res.status}`);
  return res.json();
}

export async function signup(payload: SignupPayload) {
  const res = await fetch(API_ENDPOINTS.preCadastroPainel.inserir, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`Erro no cadastro: ${res.status} ${text}`);
  }

  return res.json();
}
