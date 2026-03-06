import { useEffect, useState } from "react";
import type { ModeloAtualizacoes } from "~/models/ModeloAtualizacoes";
import { buscarLinksAtualizacoes } from "../services/ServicoApi";

/**
 * Encapsula toda a lógica de carregamento dos planos e seleção de
 * tipo de mensalidade. O componente de rota (`plans.tsx`) não precisa
 * conhecer nada de fetch ou estado de loading.
 */
export function useAtualizacoes() {
  const [data, setData] = useState<ModeloAtualizacoes | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  useEffect(() => {
    let mounted = true;

    buscarLinksAtualizacoes()
      .then((res) => {
        if (!mounted) return;
        setData(res);
      })
      .catch((e: unknown) => {
        if (!mounted) return;
        setError(String(e));
      })
      .finally(() => {
        if (!mounted) return;
        setLoading(false);
      });

    return () => {
      mounted = false;
    };
  }, []);


  return {
    loading,
    error,
    atualizacoesWeb: data?.atualizacoes_web ?? {} as ModeloAtualizacoes["atualizacoes_web"],
    atualizacoesLocal: data?.atualizacoes_local ?? {} as ModeloAtualizacoes["atualizacoes_local"],
  };
}
