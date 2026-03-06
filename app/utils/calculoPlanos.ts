import type { ModeloTipoDeMensalidade } from "../models/ModeloPlanos";
import { formatarRealSemSimbolo } from "./formatacao";

/**
 * Calcula o valor mensal do plano após desconto percentual.
 */
export function calcularValorMensal(valorStr: string, percentual: number): number {
  const valor = parseFloat(valorStr.replace(",", ".")) || 0;
  if (percentual <= 0) return valor;
  return valor - (valor * percentual) / 100;
}

/**
 * Retorna o valor economizado (desconto aplicado × quantidade de meses).
 */
export function calcularEconomia(valorStr: string, percentual: number, quantMeses: number): number {
  const valor = parseFloat(valorStr.replace(",", ".")) || 0;
  const desconto = (valor * percentual) / 100;
  return desconto * quantMeses;
}

/**
 * Retorna { inteiro, decimal, valorOriginal } a partir do valor do plano
 * e do tipo de mensalidade selecionado. Usado na tabela comparativa.
 */
export function calcularValorFormatado(valorStr: string, tipoMensalidade: ModeloTipoDeMensalidade | null): { inteiro: string; decimal: string; valorOriginal: number } {
  const percentual = parseFloat(tipoMensalidade?.percentualdedesconto ?? "0");
  const valorFinal = calcularValorMensal(valorStr, percentual);
  const [inteiro, decimal = "00"] = valorFinal.toFixed(2).split(".");
  return { inteiro, decimal, valorOriginal: valorFinal };
}

/**
 * Quebra o valor mensal em { inteiro, decimal } como strings (ex.: "129", "90").
 * Usa a formatação pt-BR para separador de milhar no inteiro.
 */
export function quebrarValorEmPartes(valorMensal: number): { inteiro: string; decimal: string } {
  const [inteiro, decimal] = formatarRealSemSimbolo(valorMensal).split(",");
  return { inteiro, decimal };
}
