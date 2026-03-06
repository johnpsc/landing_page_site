/**
 * Funções puras de formatação — sem dependência de framework ou estado.
 */

/** Formata número como "1.234,56" (sem símbolo R$) */
export function formatarRealSemSimbolo(num: number): string {
  return num.toLocaleString("pt-BR", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
}

/** Formata número como "R$ 1.234,56" */
export function formatarReal(num: number): string {
  return num.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}

/** Aplica máscara de CNPJ: 00.000.000/0000-00 */
export function maskCNPJ(value: string): string {
  return value
    .replace(/\D/g, "")
    .slice(0, 14)
    .replace(/^(\d{2})(\d)/, "$1.$2")
    .replace(/^(\d{2})\.(\d{3})(\d)/, "$1.$2.$3")
    .replace(/\.(\d{3})(\d)/, ".$1/$2")
    .replace(/(\d{4})(\d)/, "$1-$2");
}

/** Aplica máscara de telefone/celular: (00) 00000-0000 */
export function maskPhone(value: string): string {
  return value
    .replace(/\D/g, "")
    .slice(0, 11)
    .replace(/^(\d{2})(\d)/, "($1) $2")
    .replace(/(\d{5})(\d)/, "$1-$2");
}
