import { useState } from "react";
import { useLocation, useNavigate } from "react-router";
import { obterDestinoDownloadDaSearchParams, obterPlataformaDaSearchParams } from "../lib/downloadDestino";
import type { ModeloPlanos, ModeloTipoDeMensalidade } from "../models/ModeloPlanos";
import { calcularEconomia, calcularValorMensal, quebrarValorEmPartes } from "../utils/calculoPlanos";
import { formatarReal, formatarRealSemSimbolo } from "../utils/formatacao";

interface UseCardPlanoOptions {
  item: ModeloPlanos;
  tipodemensalidadeSelecionado?: ModeloTipoDeMensalidade | null;
  mostrarPlanoCliente: boolean;
}

/**
 * Encapsula toda a lógica de negócio do card de plano:
 * - cálculo de valores e descontos
 * - verificação se é o plano atual do cliente
 * - navegação para signup
 * - estado de loading do botão
 */
export function useCardPlano({ item, tipodemensalidadeSelecionado, mostrarPlanoCliente }: UseCardPlanoOptions) {
  const navigate = useNavigate();
  const { search } = useLocation();
  const destinoAtual = obterDestinoDownloadDaSearchParams(new URLSearchParams(search));
  const plataformaAtual = obterPlataformaDaSearchParams(new URLSearchParams(search));
  const [carregando, setCarregando] = useState(false);

  // Mock do usuário — substituir por contexto real de autenticação
  const usuario = {
    id: "1",
    idtipodemensalidade: "1",
    idplanospainel: "1",
  };

  // ── Valores calculados ────────────────────────────────────────
  const percentual = parseFloat(tipodemensalidadeSelecionado?.percentualdedesconto ?? "0");
  const quantMeses = parseInt(tipodemensalidadeSelecionado?.quantmeses ?? "1", 10);

  const valorMensal = calcularValorMensal(item.valordoplano, percentual);
  const total = valorMensal * quantMeses;
  const economia = calcularEconomia(item.valordoplano, percentual, quantMeses);

  const valorF = quebrarValorEmPartes(valorMensal);
  const valorTotalF = quebrarValorEmPartes(total);
  const valorTotal = total.toFixed(2);

  const economiaFormatada = formatarReal(economia);
  const totalFormatado = formatarRealSemSimbolo(total);

  // ── Flags de estado visual ────────────────────────────────────
  const isMaisVendido = item.maisvendido === "Sim";

  const isSelecionado = mostrarPlanoCliente && usuario.idtipodemensalidade === tipodemensalidadeSelecionado?.id && usuario.idplanospainel === item.id;

  // ── Ações ─────────────────────────────────────────────────────
  async function escolherPlano() {
    // Visitante (landing page) → redireciona direto para o cadastro
    if (!mostrarPlanoCliente) {
      const params = new URLSearchParams();
      params.set("plano", item.id);
      params.set("mensalidade", tipodemensalidadeSelecionado?.id ?? "");
      params.set("valor", valorTotal);
      if (plataformaAtual) {
        params.set("plataforma", plataformaAtual);
      } else if (destinoAtual) {
        params.set("plataforma", destinoAtual);
      }
      navigate(`/cadastro?${params.toString()}`);
      return;
    }

    // Usuário logado → valida upgrades e gera fatura
    const idPlanoAtual = parseInt(usuario.idplanospainel, 10);
    const idPlanoSelecionado = parseInt(item.id, 10);
    const idMensalidadeAtual = parseInt(usuario.idtipodemensalidade, 10);
    const idMensalidadeSelecionada = parseInt(tipodemensalidadeSelecionado?.id ?? "0", 10);

    if (idPlanoSelecionado < idPlanoAtual) {
      alert("Não é possível selecionar um plano inferior ao atual.");
      return;
    }
    if (idMensalidadeSelecionada < idMensalidadeAtual) {
      alert("Não é possível selecionar uma mensalidade inferior à atual.");
      return;
    }

    setCarregando(true);
    try {
      // Substituir pelo serviço real de geração de fatura
      console.log("Fatura gerada — redirecionar para /faturas");
    } catch (err) {
      console.error(err);
    } finally {
      setCarregando(false);
    }
  }

  return {
    // valores
    valorF,
    valorTotalF,
    valorTotal,
    economiaFormatada,
    totalFormatado,
    percentual,
    quantMeses,
    // flags
    isMaisVendido,
    isSelecionado,
    carregando,
    // ações
    escolherPlano,
  };
}
